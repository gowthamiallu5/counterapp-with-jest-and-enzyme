import React, { useState } from "react";
import "./App.css";

export default function Counter(props) {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((count) => count + 1);
  };

  const decreaseCount = () => {
    setCount((count) => count - 1);
  };
  return (
    <div>
      <h2>{props.name}</h2>
      <h2 className="Countvalue">{count}</h2>
      <button className="incrementbutton" onClick={increaseCount}>increase</button>
      <button className="decrementbutton" onClick={decreaseCount}>decrease</button>
    </div>
  );
}
