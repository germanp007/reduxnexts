"use client";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementar,
  decrementar,
  personalizado,
  restaPersonalizado,
} from "./store/slice";
import { useState } from "react";
const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.conteo.value);
  const [dato, setDato] = useState(0);

  return (
    <>
      <h1>Home</h1>
      <h2>{selector}</h2>
      <button onClick={() => dispatch(incrementar())}>+</button>
      <button onClick={() => dispatch(decrementar())}>-</button>
      <input
        type="number"
        value={dato}
        onChange={(e) => setDato(Number(e.target.value))}
      />
      <button onClick={() => dispatch(personalizado(dato))}>Agregar</button>
      <button onClick={() => dispatch(restaPersonalizado(dato))}>Restar</button>
    </>
  );
};

export default Home;
