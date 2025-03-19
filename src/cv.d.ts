export interface CV {
  basics: Basics
  work: Array<Work>
  volunteer?: Array<Volunteer>
  education: Array<Education>
  awards?: Array<Awards>
  certificates?: Array<Certificates>
  publications?: Array<Publications>
  skills: Array<Skills>
  languages: Array<Languages>
  interests?: Array<Interests>
  references?: Array<References>
  projects?: Array<Projects>
  [key: string]: any; 
}

interface Basics {
  name: string
  label: string
  image?: string
  email: string
  phone: string
  url?: string
  summary: string
  location: Location
  profiles: Array<Profiles>
  [key: string]: any; // Permite propiedades adicionales
}

interface Location {
  address: string
  postalCode: string
  city: string
  countryCode: string
  region: string
}

interface Profiles {
  network: string
  username: string
  url: string
}

interface Work {
  name: string
  position: string
  url?: string
  startDate?: DateStr
  endDate?: DateStr
  summary: string
  highlights?: Highlight | string[]
  modalities?: string[]
  technologies?: string[]
  [key: string]: any; // Permite propiedades adicionales
}

type DateStr = 
  | string 
  | `${string}-${string}-${string}` 
  | `${string}-${string}` 
  | `${number}` // Año solo (ej: "2023")
  | null

interface Volunteer {
  organization: string
  position: string
  url: string
  startDate: DateStr
  endDate: DateStr
  summary: string
  highlights: Highlight
}

interface Skills {
  name: string
  level?: string
  keywords?: Array<string>
  [key: string]: any; // Permite propiedades adicionales
}

interface Awards {
  title: string
  date: string
  awarder: string
  summary: string
}

interface Certificates {
  name: string,
  date: DateStr,
  issuer: string,
  url: string
}

interface Publications {
  name: string
  publisher: string
  releaseDate: DateStr
  url: string
  summary: string
}

interface Education {
  institution: string
  url?: string
  area: string
  studyType?: string
  startDate?: DateStr
  endDate?: DateStr
  score?: string
  courses?: Array<string>
  [key: string]: any; // Permite propiedades adicionales
}

interface Languages {
  language: Language | string
  fluency: string
  [key: string]: any; // Permite propiedades adicionales
}

type Language =
  "Spanish"
  | "English"
  | "German"
  | "France"
  | "Italian"
  | "Korean"
  | "Portuguese"
  | "Chinese"
  | "Arabic"
  | "Dutch"
  | "Finnish"
  | "Russian"
  | "Turkish"
  | "Hindi"
  | "Bengali"
  | string

interface Projects {
  name: string
  isActive: boolean
  description: string
  highlights: Highlight
  url: string
  github?: string
}

interface Interests {
  name: string
  keywords: Array<string>
}

interface References {
  name: string
  reference: string
}

type Highlight = Array<String>
