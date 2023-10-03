import React from 'react'
import './Count.css'
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  const multiply = () => {
    setCount(count * 5);
  };

  return (
    <>
      <div className="wrap">
        <h3> Count App</h3>
        <p>{count}</p>
        <div className='mt-10'>
          <button type="button" onClick={increment} className="btn btn-success btn-lg btn3d">Increment</button>
          <button type="button" onClick={decrement} className="btn btn-warning btn-lg btn3d">
            Decrement
          </button>
          <button type="button" onClick={reset} className="btn btn-danger btn-lg btn3d">Reset</button>
          <button type="button" onClick={multiply} className={count === 0 ? "btn btn-warning btn-lg disbaledBTN " : "btn btn-warning btn-lg btn3d"} >
            *5
          </button>
        </div>
      </div>
    </>
  )
};










export default Counter