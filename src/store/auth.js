import { createSlice } from "@reduxjs/toolkit";

const initailAuthState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "authenticate",
  initailState: initailAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
