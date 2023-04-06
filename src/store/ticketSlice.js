import { createSlice } from "@reduxjs/toolkit";

const initialState = { tickets: null };

const ticketReducer = createSlice({
  initialState,
  name: "tickets",
  reducers: {
    getTickets: (state, action) => {
      if (action.payload) {
        console.log(state)
        state.tickets = JSON.stringify(action.payload);
      }
    },
  },
});

export const Ticket_ACTIONS = { ...ticketReducer.actions };
export default ticketReducer.reducer;