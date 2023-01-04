import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = { auth: false, user: null };

const authReducer = createSlice({
  initialState,
  name: "auth",
  reducers: {
    login: (state, action) => {
      if (action.payload) {
        Cookies.set("user", JSON.stringify(action.payload));
        state.auth = true;
        state.user = JSON.stringify(action.payload);
      }
    },

    logout: (state) => {
      Cookies.remove("user");
      Cookies.remove("token");
      Cookies.remove("isAuthenticated");
      // Cookies.clear();
      state.auth = false;
      state.user = null;
    },
  },
});

export const AUTH_ACTIONS = { ...authReducer.actions };
export default authReducer.reducer;

