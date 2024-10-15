import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SelectedPageState {
  selectedPageId: string | null;
}

const initialState: SelectedPageState = {
  selectedPageId: null
};

const pageSlice = createSlice({
  name: "channel",
  initialState,
  reducers: {
    selectPage(state, action: PayloadAction<string>) {
      state.selectedPageId = action.payload;
    },
    deselectPage(state) {
      state.selectedPageId = null;
    }
  }
});

export const { selectPage, deselectPage } = pageSlice.actions;
export default pageSlice.reducer;
