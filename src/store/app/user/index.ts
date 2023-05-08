// ** Redux Imports
import { createSlice } from '@reduxjs/toolkit'

interface UserType {
  company: {
    id: string
    name: string
    department: string
  }
  score: {
    type1: number
    type2: number
    type3: number
    type4: number
    type5: number
    type6: number
    type7: number
    type8: number
  }
}

const initialState: UserType = {
  company: {
    id: '',
    name: '',
    department: '',
  },
  score: {
    type1: 0,
    type2: 0,
    type3: 0,
    type4: 0,
    type5: 0,
    type6: 0,
    type7: 0,
    type8: 0,
  },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateCompany: (state, { payload }) => {
      state.company = {
        ...payload,
      }
    },
    updateDepartment: (state, { payload }) => {
      state.company.department = payload.department
    },
    updateSelectScore: (state, { payload }) => {
      state.score = {
        ...state.score,
        ...payload,
      }
    },
  },
  extraReducers: (builder) => {},
})

export default userSlice.reducer

export const { updateCompany, updateDepartment, updateSelectScore } =
  userSlice.actions
