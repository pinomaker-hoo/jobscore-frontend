// ** Firebase Imports
import { db } from '@/config/firebaseConfig'
import { collection, setDoc, doc } from 'firebase/firestore'

// ** Type Imports
import { SaveMyCompanyResult, SaveWantCompanyResult } from '@/types'

const resultApi = {
  saveResult: async (
    myCompany: SaveMyCompanyResult,
    wantCompany: SaveWantCompanyResult
  ) => {
    await setDoc(doc(collection(db, 'myCompanyResult')), myCompany)
    await setDoc(doc(collection(db, 'wantCompanyResult')), wantCompany)
  },
}

export const { saveResult } = resultApi
