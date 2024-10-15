import { configureStore } from "@reduxjs/toolkit";
import channelReducer from "./ChannelSlice";
import pageReducer from "./SelectPageSlice";
import sideCalendarReducer from "./SideCalendarSlice";
import sideMastersReducer from "./SideMastersSlice";
import sideSettingsReducer from "./SideSettingsSlice";
import serviceTypeReducer from "./ServiceTypeSlice";
import moneyTypeReducer from "./MoneyTypeSlice";

const store = configureStore({
  reducer: {
    channel: channelReducer,
    page: pageReducer,
    sideCalendar: sideCalendarReducer,
    sideMasters: sideMastersReducer,
    sideSettings: sideSettingsReducer,
    serviceType: serviceTypeReducer,
    moneyType: moneyTypeReducer
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
