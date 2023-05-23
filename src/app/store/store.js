import { configureStore } from "@reduxjs/toolkit";
import { miSlice, filterSlice } from "./slice";
export const store = configureStore({
  reducer: {
    conteo: miSlice.reducer,
    filtered: filterSlice.reducer,
  },
});

/* PASOS PARA CONFIGURAR EL REDUX-TOOLKIT

1. Crear el store importando configureStore e importando los Slices(nombreSlice), adentro va la propiedad reducer: {},
adentro van los SLICE agregando en el reducer
nombreReducer: nombreSlice.reducer.
2. Crear los Slice importando createSlice, dentro van las siguientes propiedades
name: nombreReducer,
initialValue:{
  value:        ====> puede ser objeto, string, array, etc...
} 
reducer: {
  Todos los reducers con su logica ejemplo: 

  incrementar: (state) => {
      state.value += 1;
    },
    decrementar: (state) => {
      state.value -= 1;
    },
} 
Para exportar, se debe exportar los reducer { incrementar, decrementar} nombreSlice.actions
y el Slice que va importado al store, los reducer se usaran en los componentes que correspondan.
3. El provider en Next se debe crear en otro fichero, con import Provider. Se importa el store para contenerlo en el Provider, el componente debe tener un nombre diferente a Provider se returna el <nombreProvider store={nombreQueTengaElStore}>{children}</Provider>
El Provider sera importado en el coponente de mayor jerarquia para envolverlo compledo para que funcione el Redux en toda la app sin necesidad de pasar props 
*/
