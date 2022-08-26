import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IAuthDataState {
  data: {
    data?: { phone: string; hash: string }
    user?: {
      id: string
      phone: number
      activated: boolean
      createdAt: string
      name?: string
      username?: string
      avatar?: string
    }
    auth: Boolean
  }
}
const initialState: IAuthDataState = {
  data: {
    data: { phone: 'phone', hash: 'phone' },
    user: {
      id: '',
      phone: 123,
      activated: false,
      createdAt: '',
    },
    auth: false,
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
