import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ITypeState {
  value: string
}

const initialState: ITypeState = {
  value: 'phone',
}

export const typeSlice = createSlice({
  name: 'type',
  initialState,
  reducers: {
    mail: (state: ITypeState) => {
      state.value = 'mail'
    },
    phone: (state: ITypeState) => {
      state.value = 'phone'
    },
    otp: (state: ITypeState) => {
      state.value = 'otp'
    },
  },
})

// Action creators are generated for each case reducer function
export const { mail, phone, otp } = typeSlice.actions

export default typeSlice.reducer
