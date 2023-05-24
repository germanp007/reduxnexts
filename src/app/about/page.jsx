"use client";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterProduct } from "../store/slice";
const page = () => {
  const [price, setPrice] = useState(0);
  const selector = useSelector((state) => state.filtered.data);

  const dispatcher = useDispatch();
  const handleChange = (e) => {
    setPrice(e.target.value);
    const rango = { min: 0, max: parseInt(e.target.value) };
    dispatcher(filterProduct(rango));
  };

  return (
    <>
      <h1>About</h1>
      <label htmlFor="prices">Prices</label>
      <input
        id="prices"
        type="range"
        min="0"
        max="1000"
        onChange={handleChange}
      />
      <p>{price}</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          height: "auto",
        }}
      >
        {/* {selector.data
          .filter((e) => e.price >= price)
          .map((e) => {
            return (
              <div key={e.id}>
                <h1>{e.name}</h1>
                <p>{e.price}</p>
              </div>
            );
          })} */}
        {/* {selector.map((e) => {
          return (
            <div key={e.id}>
              <h1>{e.name}</h1>
              <p>{e.price}</p>
            </div>
          );
        })} */}
        {selector.data.filter((e) => e.price >= rango)}
      </div>
    </>
  );
};

export default page;
