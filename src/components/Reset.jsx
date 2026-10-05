import React, { useContext } from "react";
import { Pass } from "../App";

export default function Reset() {
  const { dispatch } = useContext(Pass);

  return (
    <button
      className="reset"
      onClick={() => dispatch({ type: "reset" })}
    >
      ↻ Reset
    </button>
  );
}