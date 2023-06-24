import appSlice from "./appSlice";
import { configureStore } from "@reduxjs/toolkit";
import seachSlice from "./seachSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search:seachSlice,
  },
});

export default store;
