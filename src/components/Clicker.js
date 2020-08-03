import React, { useState } from "react";

function Clicker() {
  let [count, setCount] = useState(0);

  function countIncrease() {
    setCount(count + 1);
  }

  function countDecrease() {
    setCount(count - 1);
  }

  function countReset() {
    setCount((count = 0));
  }

  return (
    <div className="container center">
      <div className="card">{count}</div>
      <div className="btn-container">
        <button className="btn btn-danger" onClick={countDecrease}>
          <i className="fas fa-minus"></i>
        </button>
        <button className="btn btn-caution" onClick={countReset}>
          <i className="fas fa-sync-alt"></i>
        </button>
        <button className="btn btn-success" onClick={countIncrease}>
          <i className="fas fa-plus"></i>
        </button>
      </div>
    </div>
  );
}

export default Clicker;
