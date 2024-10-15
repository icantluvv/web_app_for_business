import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ShowServiceTypes: {} as Record<string, boolean>
};

const ServiceTypeSlice = createSlice({
  name: "serviceType",
  initialState,
  reducers: {
    toggleServiceType: (state, action) => {
      const id = action.payload;
      state.ShowServiceTypes[id] = !state.ShowServiceTypes[id];
    }
  }
});

export const { toggleServiceType } = ServiceTypeSlice.actions;
export default ServiceTypeSlice.reducer;
