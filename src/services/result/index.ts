// ** Firebase Imports
import { db } from '@/config/firebaseConfig'
import { collection, setDoc, doc } from 'firebase/firestore'

// ** Type Imports
import { SaveMyCompanyResult, SaveWantCompanyResult } from '@/types'
import dayjs from 'dayjs'

const resultApi = {
  saveResult: async (
    myCompany: SaveMyCompanyResult,
    wantCompany: SaveWantCompanyResult
  ) => {
    const createdAt = dayjs().format('YYYY.MM.DD HH:mm:ss')
    await setDoc(doc(collection(db, 'myCompanyResult')), {
      ...myCompany,
      createdAt,
    })
    await setDoc(doc(collection(db, 'wantCompanyResult')), {
      ...wantCompany,
      createdAt,
    })
  },
}

export const { saveResult } = resultApi
