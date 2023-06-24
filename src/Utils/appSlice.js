import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },

  reducers: {
    toggleMenu: (state) => {
      console.log(state);
      state.isMenuOpen = !state.isMenuOpen;
      console.log("fs");
    },
    closeMenu:(state)=>{
      state.isMenuOpen=false;
    },
    openMenu:(state)=>{
      state.isMenuOpen=true;
    }
  },
});

export const { toggleMenu,closeMenu,openMenu } = appSlice.actions;
export default appSlice.reducer;
