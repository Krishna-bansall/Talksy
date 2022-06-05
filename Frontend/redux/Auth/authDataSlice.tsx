import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IAuthDataState {
  data: {
    isLoggedIn: boolean
    data: { phone: string; hash: string }
    user?: {
      id: string
      phone: number
      activated: boolean
      createdAt: string
    }
  }
}
const initialState: IAuthDataState = {
  data: {
    isLoggedIn: false,
    data: { phone: 'phone', hash: 'phone' },
    user: {
      id: '',
      phone: 123,
      activated: false,
      createdAt: '',
    },
  },
}

export const authDataSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setApiData: (
      state: IAuthDataState,
      action: PayloadAction<IAuthDataState['data']>
    ) => {
      state.data = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setApiData } = authDataSlice.actions

export default authDataSlice.reducer
