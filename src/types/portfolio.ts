export type Language = 'id' | 'en'

export interface TrackRecordItem {
  id: string
  title: string
  desc: string
}

export interface ProjectPhoto {
  url: string
  caption: string
}

export interface BlueprintProject {
  id: string
  code: string
  title: string
  subtitle: string
  tags: string[]
  problem: string
  features: string[]
  mandorRole: string[]
  aiRole: string[]
  hasPhotos: boolean
  photos: ProjectPhoto[]
}

export interface ProfileData {
  fullName: string
  brandTitle: string
  roleTitle: string
  heroTagline: string
  heroSubheadline: string
  intro1: string
  intro2: string
  degree: string
  profilePhoto: string
  whatsappNumber: string
  whatsappMessage: string
  email: string
  githubUrl: string
  trackRecord: TrackRecordItem[]
}

export interface NlpModelConfig {
  modelName: string
  version: string
  inferenceType: 'rule_based' | 'private_endpoint' | 'onnx_local'
  endpointUrl?: string
  authToken?: string
  isProtected: boolean
}

export interface PortfolioState {
  profile: ProfileData
  projects: BlueprintProject[]
  adminPin: string
  language?: Language
  nlpModelConfig?: NlpModelConfig
}
