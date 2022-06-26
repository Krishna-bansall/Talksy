import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IActivationDataState {
  data: {
    name: string
    profilePicture?: string
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
    setImage: (state: IActivationDataState, action: PayloadAction<string>) => {
      state.data.profilePicture = action.payload
    },
    setUsername: (
      state: IActivationDataState,
      action: PayloadAction<string>
    ) => {
      state.data.username = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setName, setImage, setUsername } = userActivationSlice.actions

export default userActivationSlice.reducer
