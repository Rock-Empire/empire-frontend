import { combineReducers } from "redux";
import authSlice from "./AuthSlice";
import ticketSlice from "./ticketSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  tickets: ticketSlice
})

export default rootReducer;