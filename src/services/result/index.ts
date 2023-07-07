// ** Firebase Imports
import { db } from '@/config/firebaseConfig'
import { collection, setDoc, doc } from 'firebase/firestore'

// ** Type Imports
import { SaveMyCompanyResult, SaveWantCompanyResult } from '@/types'

// ** Other Imports
import dayjs from 'dayjs'

const resultApi = {
  saveResult: async (
    myCompany: SaveMyCompanyResult,
    wantCompany: SaveWantCompanyResult,
    companyName: string
  ) => {
    const createdAt = dayjs().format('YYYY.MM.DD HH:mm:ss')
    await setDoc(doc(collection(db, 'myCompanyResult')), {
      ...myCompany,
      company: companyName,
      createdAt,
    })
    await setDoc(doc(collection(db, 'wantCompanyResult')), {
      ...wantCompany,
      createdAt,
    })
    await setDoc(doc(collection(db, 'user')), {
      myCode: myCompany.code,
      wantCode: wantCompany.code,
      companyId: myCompany.companyId,
      company: companyName,
      department: myCompany.department,
      myTotalCount: myCompany.totalCount,
      wantTotalCount: wantCompany.totalCount,
      createdAt,
    })
  },
}

export const { saveResult } = resultApi
