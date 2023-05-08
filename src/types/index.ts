export enum Company {
  MY = 'MY',
  WANT = 'WANT',
}

export interface Category {
  id: number
  title: string
  type: Company
}

export interface Question {
  id: number
  question: string
  categoryId: number
  answer: Answer[]
}

export interface Answer {
  id: number
  text: string
  point: number
}

export interface CompanyType {
  id: string
  name: string
  url: string
}

export interface SaveCompanyType {
  name: string
  url: string
}

export interface Department {
  name: string
  id: number
  size: number
  type: boolean
}

export interface SelectPoint {
  type1: number
  type2: number
  type3: number
  type4: number
}

