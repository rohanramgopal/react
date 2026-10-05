import React, { useContext } from "react";
import { Pass } from "../App";

export default function Decrement() {
  const { dispatch } = useContext(Pass);

  return (
    <button
      className="decrement"
      onClick={() => dispatch({ type: "decrement" })}
    >
      − Decrement
    </button>
  );
}