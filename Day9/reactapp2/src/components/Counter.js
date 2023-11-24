import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

export function Counter() {
  // Selecting the 'value' from the Redux store using the useSelector hook
  const count = useSelector((state) => state.counter.value);
  // Obtaining the dispatch function from the useDispatch hook
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          >
          Decrement
        </button>
        <br></br>
          <span>{count}</span>
      </div>
    </div>
  );
}