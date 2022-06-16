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

export const userActivationSlice = createSlice({
  name: 'activate',
  initialState,
  reducers: {
    setName: (state: IActivationDataState, action: PayloadAction<string>) => {
      state.data.name = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setName } = userActivationSlice.actions

export default userActivationSlice.reducer
