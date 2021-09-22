import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDaily: false,
  isWeekly: false,
  isMontly: false,
};

export const typeSlice = createSlice({
  name: "type",
  initialState,
  reducers: {
    setDaily: (state) => {
      state.isDaily = true;
      state.isWeekly = false;
      state.isMontly = false;
    },
    setWeekly: (state) => {
      state.isDaily = false;
      state.isWeekly = true;
      state.isMontly = false;
    },
    setMontly: (state) => {
      state.isDaily = false;
      state.isWeekly = false;
      state.isMontly = true;
    },
  },
});

// Actions
export const { setDaily, setWeekly, setMontly } = typeSlice.actions;

export default typeSlice.reducer;
