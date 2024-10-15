import { createSlice } from "@reduxjs/toolkit";

const channelSlice = createSlice({
  name: "channel",
  initialState: {
    selectedChannelId: null,
    channelData: null
  },
  reducers: {
    selectChannel: (state, action) => {
      state.selectedChannelId = action.payload;
    },
    setChannelData: (state, action) => {
      state.channelData = action.payload;
    },
    deselectChannel: (state) => {
      state.selectedChannelId = null;
    }
  }
});

export const { selectChannel, setChannelData, deselectChannel } =
  channelSlice.actions;

export default channelSlice.reducer;
