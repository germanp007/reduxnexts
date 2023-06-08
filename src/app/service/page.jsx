"use client";

import { useSelector, useDispatch } from "react-redux";
import { changeBack } from "../store/slice";
import { useState } from "react";

const page = () => {
  const [first, setFirst] = useState(0);
  const dispatch = useDispatch();
  const color = useSelector((state) => state.changeBackground.value);

  console.log(color);
  const handleColor = () => {
    first == color.length ? setFirst(0) : setFirst(first + 1);
  };

  return (
    <div
      style={{
        background: color[first],
        height: "75vh",
        width: "100vw",
      }}
    >
      <button onClick={() => handleColor()}>change Color</button>
    </div>
  );
};

export default page;
