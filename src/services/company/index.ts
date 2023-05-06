// ** Firebase Imports
import { db } from '@/config/firebaseConfig'
import {
  doc,
  setDoc,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore'

// ** Type Imports
import { SaveCompanyType } from '@/types'

const companyApi = {
  saveCompany: async (company: SaveCompanyType) => {
    await setDoc(doc(collection(db, 'company')), company)
  },
}

export const { saveCompany, findAllCompany } = companyApi
