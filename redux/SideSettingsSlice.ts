import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ShowSideSettings: false
};

const sideSettingsSlice = createSlice({
  name: "sideSettings",
  initialState,
  reducers: {
    toggleSideSettings: (state) => {
      state.ShowSideSettings = !state.ShowSideSettings;
    }
  }
});

export const { toggleSideSettings } = sideSettingsSlice.actions;
export default sideSettingsSlice.reducer;
