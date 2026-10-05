import React, { useContext } from "react";
import { Pass } from "../App";
import Increment from "./Increment";
import Decrement from "./Decrement";
import Reset from "./Reset";

export default function Counter() {
  const { state } = useContext(Pass);

  return (
    <div className="counter-card">

      <div className="counter-heading">
        <h2>Counter</h2>
        <p>State shared using Context</p>
      </div>

      <div className="count">
        {state.count}
      </div>

      <div className="buttons">
        <Increment />
        <Decrement />
        <Reset />
      </div>

    </div>
  );
}