import { createSlice } from "@reduxjs/toolkit";

export const conteoSlice = createSlice({
  name: "conteo",
  initialState: {
    value: 0,
  },
  reducers: {
    incrementar: (state) => {
      state.value += 1;
    },
    decrementar: (state) => {
      state.value -= 1;
    },
    personalizado: (state, action) => {
      state.value += action.payload;
    },
    restaPersonalizado: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { incrementar, decrementar, personalizado, restaPersonalizado } =
  conteoSlice.actions;
