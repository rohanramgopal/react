import { useState } from "react";

export default function Counter({ dark }) {

    const [count, setCount] = useState(0);

    return (
        <div
            className="counter-card"
            style={{
                backgroundColor: dark ? "#1f2937" : "#ffffff",
                color: dark ? "#ffffff" : "#1e293b"
            }}
        >
            <h2>Counter</h2>

            <div className="count">
                {count}
            </div>

            <div className="buttons">

                <button
                    className="increment"
                    onClick={() => setCount(count + 1)}
                >
                    Increment
                </button>

                <button
                    className="decrement"
                    onClick={() => setCount(count - 1)}
                >
                    Decrement
                </button>

                <button
                    className="reset"
                    onClick={() => setCount(0)}
                >
                    Reset
                </button>

            </div>
        </div>
    );
}