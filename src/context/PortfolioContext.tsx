import React, { createContext, useContext, useState, useEffect } from 'react'
import type { ProfileData, BlueprintProject, PortfolioState, ProjectPhoto } from '../types/portfolio'
import { DEFAULT_PROFILE, DEFAULT_PROJECTS } from '../data/defaultBlueprintData'

interface PortfolioContextType {
  profile: ProfileData
  projects: BlueprintProject[]
  adminPin: string
  isBlueprintMode: boolean
  toggleTheme: () => void
  isAdminOpen: boolean
  openAdmin: () => void
  closeAdmin: () => void
  updateProfile: (data: Partial<ProfileData>) => void
  updateProject: (id: string, data: Partial<BlueprintProject>) => void
  addProject: (project: BlueprintProject) => void
  deleteProject: (id: string) => void
  addProjectPhoto: (projectId: string, photo: ProjectPhoto) => void
  changeAdminPin: (newPin: string) => boolean
  resetToDefault: () => void
  exportDataJson: () => string
  importDataJson: (jsonStr: string) => boolean
}

const STORAGE_KEY = 'zaky_portfolio_blueprint_v1'
const DEFAULT_PIN = '882199'

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined)

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<ProfileData>(DEFAULT_PROFILE)
  const [projects, setProjects] = useState<BlueprintProject[]>(DEFAULT_PROJECTS)
  const [adminPin, setAdminPin] = useState<string>(DEFAULT_PIN)
  const [isBlueprintMode, setIsBlueprintMode] = useState<boolean>(false)
  const [isAdminOpen, setIsAdminOpen] = useState<boolean>(false)

  // Load from LocalStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed: PortfolioState = JSON.parse(saved)
        if (parsed.profile) setProfile(parsed.profile)
        if (parsed.projects && parsed.projects.length > 0) setProjects(parsed.projects)
        if (parsed.adminPin) setAdminPin(parsed.adminPin)
      }
    } catch (e) {
      console.error('Failed to load portfolio state', e)
    }

    const savedTheme = localStorage.getItem('zaky_portfolio_theme')
    if (savedTheme === 'blueprint') {
      setIsBlueprintMode(true)
      document.documentElement.classList.add('blueprint-mode')
    }
  }, [])

  // Auto save to LocalStorage
  const saveState = (newProfile: ProfileData, newProjects: BlueprintProject[], newPin: string) => {
    const payload: PortfolioState = {
      profile: newProfile,
      projects: newProjects,
      adminPin: newPin
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
  }

  const toggleTheme = () => {
    setIsBlueprintMode((prev) => {
      const next = !prev
      if (next) {
        document.documentElement.classList.add('blueprint-mode')
        localStorage.setItem('zaky_portfolio_theme', 'blueprint')
      } else {
        document.documentElement.classList.remove('blueprint-mode')
        localStorage.setItem('zaky_portfolio_theme', 'paper')
      }
      return next
    })
  }

  const updateProfile = (data: Partial<ProfileData>) => {
    setProfile((prev) => {
      const updated = { ...prev, ...data }
      saveState(updated, projects, adminPin)
      return updated
    })
  }

  const updateProject = (id: string, data: Partial<BlueprintProject>) => {
    setProjects((prev) => {
      const updated = prev.map((p) => (p.id === id ? { ...p, ...data } : p))
      saveState(profile, updated, adminPin)
      return updated
    })
  }

  const addProject = (project: BlueprintProject) => {
    setProjects((prev) => {
      const updated = [...prev, project]
      saveState(profile, updated, adminPin)
      return updated
    })
  }

  const deleteProject = (id: string) => {
    setProjects((prev) => {
      const updated = prev.filter((p) => p.id !== id)
      saveState(profile, updated, adminPin)
      return updated
    })
  }

  const addProjectPhoto = (projectId: string, photo: ProjectPhoto) => {
    setProjects((prev) => {
      const updated = prev.map((p) => {
        if (p.id === projectId) {
          return {
            ...p,
            hasPhotos: true,
            photos: [...p.photos, photo]
          }
        }
        return p
      })
      saveState(profile, updated, adminPin)
      return updated
    })
  }

  const changeAdminPin = (newPin: string): boolean => {
    if (!newPin || newPin.trim().length < 4) return false
    const trimmed = newPin.trim()
    setAdminPin(trimmed)
    saveState(profile, projects, trimmed)
    return true
  }

  const resetToDefault = () => {
    setProfile(DEFAULT_PROFILE)
    setProjects(DEFAULT_PROJECTS)
    setAdminPin(DEFAULT_PIN)
    saveState(DEFAULT_PROFILE, DEFAULT_PROJECTS, DEFAULT_PIN)
  }

  const exportDataJson = () => {
    const payload: PortfolioState = {
      profile,
      projects,
      adminPin
    }
    return JSON.stringify(payload, null, 2)
  }

  const importDataJson = (jsonStr: string): boolean => {
    try {
      const parsed: PortfolioState = JSON.parse(jsonStr)
      if (parsed.profile && parsed.projects) {
        setProfile(parsed.profile)
        setProjects(parsed.projects)
        if (parsed.adminPin) setAdminPin(parsed.adminPin)
        saveState(parsed.profile, parsed.projects, parsed.adminPin || adminPin)
        return true
      }
      return false
    } catch (e) {
      console.error('Invalid JSON import', e)
      return false
    }
  }

  return (
    <PortfolioContext.Provider
      value={{
        profile,
        projects,
        adminPin,
        isBlueprintMode,
        toggleTheme,
        isAdminOpen,
        openAdmin: () => setIsAdminOpen(true),
        closeAdmin: () => setIsAdminOpen(false),
        updateProfile,
        updateProject,
        addProject,
        deleteProject,
        addProjectPhoto,
        changeAdminPin,
        resetToDefault,
        exportDataJson,
        importDataJson
      }}
    >
      {children}
    </PortfolioContext.Provider>
  )
}

export const usePortfolio = () => {
  const context = useContext(PortfolioContext)
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider')
  }
  return context
}
