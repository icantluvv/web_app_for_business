import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ShowSideMasters: false
};

const sideMasterSlice = createSlice({
  name: "sideMasters",
  initialState,
  reducers: {
    toggleSideMasters: (state) => {
      state.ShowSideMasters = !state.ShowSideMasters;
    }
  }
});

export const { toggleSideMasters } = sideMasterSlice.actions;
export default sideMasterSlice.reducer;
