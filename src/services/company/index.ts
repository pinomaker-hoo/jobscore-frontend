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
import { CompanyType, SaveCompanyType } from '@/types'

const companyApi = {
  saveCompany: async (company: SaveCompanyType) => {
    await setDoc(doc(collection(db, 'company')), company)
  },
  findAllCompany: async (name: string): Promise<CompanyType[]> => {
    const querySnapshot = await getDocs(
      query(
        collection(db, 'company'),
        where('name', '>=', name),
        where('name', '<', name + '\uf8ff')
      )
    )

    return querySnapshot.docs.map((item) => ({
      id: item.id,
      name: item.data().name,
      url: item.data().url,
    }))
  },
}

export const { saveCompany, findAllCompany } = companyApi
