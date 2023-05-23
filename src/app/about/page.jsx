"use client";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterProduct } from "../store/slice";
const page = () => {
  const [price, setPrice] = useState(0);
  const selector = useSelector((state) => state.filtered);
  console.log(selector);
  const dispatcher = useDispatch();
  const handleChange = (e) => {
    const newPrice = parseInt(e.target.value);
    setPrice(newPrice);
    dispatcher(filterProduct(price)); // Envía el nuevo precio al dispatch
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
        value={price}
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
        {/* {selector
          .filter((e) => e.price >= price)
          .map((e) => {
            return (
              <div key={e.id}>
                <h1>{e.name}</h1>
                <p>{e.price}</p>
              </div>
            );
          })} */}
        {selector.map((e) => {
          return (
            <div key={e.id}>
              <h1>{e.name}</h1>
              <p>{e.price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default page;
