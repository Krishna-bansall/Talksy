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
    mailDo: (state: ITypeState) => {
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
export const { mailDo, phone, otp } = typeSlice.actions

export default typeSlice.reducer
