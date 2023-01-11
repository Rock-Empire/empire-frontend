import { configureStore } from "@reduxjs/toolkit";
// import { createStore } from 'redux'
// import { persistStore, persistReducer } from 'redux-persist';
import AuthSlice from "./AuthSlice";

const store = configureStore({
  reducer: {
    auth: AuthSlice,
  },
});

export default store;