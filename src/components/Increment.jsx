import React, { useContext } from "react";
import { Pass } from "../App";

export default function Increment() {
  const { dispatch } = useContext(Pass);

  return (
    <button
      className="increment"
      onClick={() => dispatch({ type: "increment" })}
    >
      + Increment
    </button>
  );
}