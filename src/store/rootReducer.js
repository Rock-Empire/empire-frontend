import { combineReducers } from "redux";
import authSlice from "./AuthSlice";

const rootReducer = combineReducers({
  auth: authSlice,
})

export default rootReducer;