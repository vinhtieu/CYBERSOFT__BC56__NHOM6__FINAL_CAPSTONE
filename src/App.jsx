import React from "react";

import "./App.css";
import { increment, decrement } from "./lib/redux/slices/counterSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const num = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="h-screen w-screen flex flex-col place-items-center items-center justify-center">
      <span className="text-4xl mb-16">{num}</span>
      <div className="space-x-8">
        <button
          onClick={() => {
            dispatch(increment());
          }}
          className="px-6 py-4 rounded-md border border-white bg-black text-white text-3xl">
          +
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
          className="px-6 py-4 rounded-md border border-white bg-black text-white text-3xl">
          -
        </button>
      </div>
    </div>
  );
}

export default App;
