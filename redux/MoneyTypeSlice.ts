import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MoneyTypeState {
  selectedType: "cash" | "cashless" | "safe" | "salary";
}

const initialState: MoneyTypeState = {
  selectedType: "cash"
};

const moneyTypeSlice = createSlice({
  name: "moneyType",
  initialState,
  reducers: {
    setSelectedType(
      state,
      action: PayloadAction<MoneyTypeState["selectedType"]>
    ) {
      state.selectedType = action.payload;
    }
  }
});

export const { setSelectedType } = moneyTypeSlice.actions;

export default moneyTypeSlice.reducer;
