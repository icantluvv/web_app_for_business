import { createSlice } from "@reduxjs/toolkit";

const channelSlice = createSlice({
  name: "channel",
  initialState: {
    channelData: null
  },
  reducers: {
    setChannelData: (state, action) => {
      state.channelData = action.payload;
    },
    unsetChannelData: (state) => {
      state.channelData = null;
    }
  }
});

export const { setChannelData, unsetChannelData } =
  channelSlice.actions;

export default channelSlice.reducer;
