import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ShowSideCalendar: false
};

const sideCalendarSlice = createSlice({
  name: "sideCalendar",
  initialState,
  reducers: {
    toggleSideCalendar: (state) => {
      state.ShowSideCalendar = !state.ShowSideCalendar;
    }
  }
});

export const { toggleSideCalendar } = sideCalendarSlice.actions;
export default sideCalendarSlice.reducer;
