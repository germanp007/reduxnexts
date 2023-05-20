import { configureStore } from "@reduxjs/toolkit";
import { conteoSlice } from "./slice";

export const store = configureStore({
  reducer: {
    conteo: conteoSlice.reducer,
  },
});
