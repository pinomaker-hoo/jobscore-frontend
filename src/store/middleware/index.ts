// ** Redux Imports
import { isRejectedWithValue } from '@reduxjs/toolkit'

export const rtkQueryErrorLogger =
  (_api: any) => (next: any) => (action: any) => {
    if (isRejectedWithValue(action)) {
      console.log({ title: 'Async error!', message: action.error.message })
    }

    return next(action)
  }

export const middleware = [rtkQueryErrorLogger]
