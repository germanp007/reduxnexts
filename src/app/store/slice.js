import { createSlice } from "@reduxjs/toolkit";

export const miSlice = createSlice({
  name: "conteo",
  initialState: {
    value: 0,
  },
  reducers: {
    agregar: (state) => {
      state.value += 1;
    },
    quitar: (state) => {
      state.value -= 1;
    },
    input: (state, action) => {
      state.value += action.payload;
    },
    substract: (state, action) => {
      state.value -= action.payload;
    },
    restart: (state) => {
      state.value = 0;
    },
  },
});

export const { agregar, quitar, input, substract, restart } = miSlice.actions;
