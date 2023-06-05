import React from "react";
import "./counter.css";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
  resetCounter,
} from "../action/action";

const counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(incrementCounter());
  };

  const handleReset = () => {
    dispatch(resetCounter());
  };

  const handleDecrement = () => {
    dispatch(decrementCounter());
  };
  return (
    <div className="counter">
      <div className="display">{count}</div>
      <div className="buttons">
        <button onClick={handleIncrement} className="btn plus">
          +
        </button>
        <button onClick={handleReset} className="btn reset">
          reset
        </button>
        <button onClick={handleDecrement} className="btn minus">
          -
        </button>
      </div>
    </div>
  );
};

export default counter;
