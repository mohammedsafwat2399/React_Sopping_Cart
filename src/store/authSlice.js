import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggIn: false },
  reducers: {
    logIn(state) {
      state.isLoggIn = true;
    },
    logOut(state) {
      state.isLoggIn = false;
    },
  },
});
export const authtActions = authSlice.actions;
export default authSlice;
