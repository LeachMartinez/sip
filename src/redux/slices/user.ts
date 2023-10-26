import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../store"
import { TypeUser } from "@/types/UserType"

// Define the initial state using that type
const initialState: TypeUser = {
  id: 0,
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  isAuth: false
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authUser: (state, action: PayloadAction<TypeUser>) => {
      state.avatar = action.payload.avatar;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email
      state.isAuth = true;
    },
    logoutUser: (state) => {
      state.isAuth = false;
    },
  },
})

export const { authUser, logoutUser } = userSlice.actions

export default userSlice.reducer