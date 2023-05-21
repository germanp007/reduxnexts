"use client";
import { useSelector, useDispatch } from "react-redux";
import { agregar, quitar, input, substract, restart } from "./store/slice";
import { useState } from "react";

const page = () => {
  const resultado = useSelector((state) => state.conteo.value);
  const dispatch = useDispatch();
  const [valor, setValor] = useState(0);

  const submitAdd = () => {
    dispatch(input(valor));
    setValor("");
  };
  const submitSub = () => {
    dispatch(substract(valor));
    setValor("");
  };
  return (
    <>
      <h1>Home</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontSize: "150px",
          }}
        >
          {resultado}
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          style={{
            width: "80px",
            height: "80px",
          }}
          onClick={() => dispatch(agregar())}
        >
          +
        </button>
        <button
          style={{
            width: "80px",
            height: "80px",
          }}
          onClick={() => dispatch(quitar())}
        >
          -
        </button>
        <input
          type="number"
          style={{
            width: "80px",
            height: "80px",
            fontSize: "50px",
          }}
          value={valor}
          onChange={(e) => setValor(Number(e.target.value))}
        />
        <button
          style={{
            width: "80px",
            height: "80px",
          }}
          onClick={submitAdd}
        >
          input add
        </button>
        <button
          style={{
            width: "80px",
            height: "80px",
          }}
          onClick={submitSub}
        >
          input subtract
        </button>
        <button
          style={{
            width: "80px",
            height: "80px",
          }}
          onClick={() => dispatch(restart())}
        >
          restart
        </button>
      </div>
    </>
  );
};

export default page;
