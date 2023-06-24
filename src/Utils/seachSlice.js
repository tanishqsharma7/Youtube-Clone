import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchCache: {},
  },

  reducers: {
    cacheResult: (state, action) => {
      state.searchCache = Object.assign(state.searchCache, action.payload);
    },
  },
});

export const { cacheResult } = searchSlice.actions;
export default searchSlice.reducer;
