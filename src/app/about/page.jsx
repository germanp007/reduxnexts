"use client";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterProduct } from "../store/slice";
const page = () => {
  const [price, setPrice] = useState(0);
  const selector = useSelector((state) => state.filtered.data);
  console.log(selector);
  const dispatcher = useDispatch();
  const handleChange = (e) => {
    setPrice(e.target.value);

    dispatcher(filterProduct({ min: 0, max: parseInt(e.target.value) }));
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
        {selector
          .filter((e) => e.price >= price)
          .map((e, i) => {
            return (
              <div key={i}>
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
