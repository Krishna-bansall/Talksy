import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IActivationDataState {
  data: {
    name: string
    profilePicture?: File
    username: string
  }
}
const initialState: IActivationDataState = {
  data: {
    name: 'name',
    //  profilePicture:
    username: 'username',
  },
}

export const authDataSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setName: (state: IActivationDataState, action: PayloadAction<string>) => {
      state.data.name = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setName } = authDataSlice.actions

export default authDataSlice.reducer
