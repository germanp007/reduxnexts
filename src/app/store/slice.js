import { createSlice } from "@reduxjs/toolkit";

export const miSlice = createSlice({
  name: "conteo",
  initialState: {
    value: 0,
  },
  reducers: {
    agregar: (state) => {
      console.log(state.value);
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

export const filterSlice = createSlice({
  name: "filtered",
  initialState: {
    range: {
      min: 0,
      max: 1000,
    },
    data: [
      {
        id: 1,
        name: "Laptop",
        price: 970,
      },
      {
        id: 2,
        name: "Web Cam",
        price: 15,
      },
      {
        id: 3,
        name: "Mouse",
        price: 25,
      },
      {
        id: 4,
        name: "Gamer Chair",
        price: 125,
      },
      {
        id: 5,
        name: "Drone",
        price: 1275,
      },
      {
        id: 6,
        name: "HD TV",
        price: 975,
      },

      {
        id: 7,
        name: "HD2 TV",
        price: 455,
      },
      {
        id: 8,
        name: "Notebook",
        price: 745,
      },
      {
        id: 9,
        name: "Alexa",
        price: 155,
      },
      {
        id: 10,
        name: "PlayStation",
        price: 570,
      },
      {
        id: 11,
        name: "Motorola g20",
        price: 275,
      },
    ],
  },
  reducers: {
    filterProduct: (state, action) => {
      state.range = action.payload;
    },
  },
});

export const { agregar, quitar, input, substract, restart } = miSlice.actions;
export const { filterProduct } = filterSlice.actions;
