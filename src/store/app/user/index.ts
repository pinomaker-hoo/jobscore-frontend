// ** Redux Imports
import { createSlice } from '@reduxjs/toolkit'

interface UserType {
  company: {
    id: string
    name: string
    department: string
  }
  score: {
    myCompany: {
      type1: number
      type2: number
      type3: number
      type4: number
    }

    wantCompany: {
      type1: number
      type2: number
      type3: number
      type4: number
    }
  }
}

export const initialState: UserType = {
  company: {
    id: '',
    name: '',
    department: '',
  },
  score: {
    myCompany: {
      type1: 0,
      type2: 0,
      type3: 0,
      type4: 0,
    },
    wantCompany: {
      type1: 0,
      type2: 0,
      type3: 0,
      type4: 0,
    },
  },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    initialize: (state) => {
      ;(state.company = initialState.company),
        (state.score = initialState.score)
    },
    updateCompany: (state, { payload }) => {
      state.company = {
        ...payload,
      }
    },
    updateDepartment: (state, { payload }) => {
      state.company = { ...state.company, ...payload }
    },
    updateMyCompanyScore: (state, { payload }) => {
      state.score.myCompany = {
        ...state.score.myCompany,
        ...payload,
      }
    },
    updateWantCompanyScore: (state, { payload }) => {
      state.score.wantCompany = {
        ...state.score.wantCompany,
        ...payload,
      }
    },
  },
  extraReducers: (builder) => {},
})

export default userSlice.reducer

export const {
  updateCompany,
  updateDepartment,
  updateMyCompanyScore,
  updateWantCompanyScore,
  initialize,
} = userSlice.actions
