import React, { createContext, useContext, useState, useEffect } from 'react'
import type { ProfileData, BlueprintProject, PortfolioState, ProjectPhoto, Language, DesignVariant } from '../types/portfolio'
import { DEFAULT_PROFILE, DEFAULT_PROJECTS } from '../data/defaultBlueprintData'
import { TRANSLATIONS, type TranslationDictionary } from '../data/translations'

interface PortfolioContextType {
  profile: ProfileData
  projects: BlueprintProject[]
  adminPin: string
  isBlueprintMode: boolean
  toggleTheme: () => void
  designVariant: DesignVariant
  setDesignVariant: (variant: DesignVariant) => void
  toggleDesignVariant: () => void
  language: Language
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
  t: TranslationDictionary
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
  const [designVariant, setDesignVariantState] = useState<DesignVariant>('cyber')
  const [language, setLanguageState] = useState<Language>('id')
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
        if (parsed.language) setLanguageState(parsed.language)
        if (parsed.designVariant) setDesignVariantState(parsed.designVariant)
      }
    } catch (e) {
      console.error('Failed to load portfolio state', e)
    }

    const savedVariant = localStorage.getItem('zaky_portfolio_variant') as DesignVariant | null
    if (savedVariant === 'cyber' || savedVariant === 'blueprint') {
      setDesignVariantState(savedVariant)
    }

    const savedTheme = localStorage.getItem('zaky_portfolio_theme')
    if (savedTheme === 'blueprint') {
      setIsBlueprintMode(true)
      document.documentElement.classList.add('blueprint-mode')
    }

    const savedLang = localStorage.getItem('zaky_portfolio_lang') as Language | null
    if (savedLang === 'en' || savedLang === 'id') {
      setLanguageState(savedLang)
    }
  }, [])

  // Auto save to LocalStorage
  const saveState = (
    newProfile: ProfileData,
    newProjects: BlueprintProject[],
    newPin: string,
    newLang: Language = language,
    newVariant: DesignVariant = designVariant
  ) => {
    const payload: PortfolioState = {
      profile: newProfile,
      projects: newProjects,
      adminPin: newPin,
      language: newLang,
      designVariant: newVariant
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
  }

  const setDesignVariant = (variant: DesignVariant) => {
    setDesignVariantState(variant)
    localStorage.setItem('zaky_portfolio_variant', variant)
    saveState(profile, projects, adminPin, language, variant)
  }

  const toggleDesignVariant = () => {
    const next = designVariant === 'cyber' ? 'blueprint' : 'cyber'
    setDesignVariant(next)
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

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('zaky_portfolio_lang', lang)
    saveState(profile, projects, adminPin, lang)
  }

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id')
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
    setLanguageState('id')
    saveState(DEFAULT_PROFILE, DEFAULT_PROJECTS, DEFAULT_PIN, 'id')
  }

  const exportDataJson = () => {
    const payload: PortfolioState = {
      profile,
      projects,
      adminPin,
      language
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
        if (parsed.language) setLanguageState(parsed.language)
        saveState(
          parsed.profile,
          parsed.projects,
          parsed.adminPin || adminPin,
          parsed.language || language
        )
        return true
      }
      return false
    } catch (e) {
      console.error('Invalid JSON import', e)
      return false
    }
  }

  const t = TRANSLATIONS[language]

  return (
    <PortfolioContext.Provider
      value={{
        profile,
        projects,
        adminPin,
        isBlueprintMode,
        toggleTheme,
        designVariant,
        setDesignVariant,
        toggleDesignVariant,
        language,
        setLanguage,
        toggleLanguage,
        t,
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
