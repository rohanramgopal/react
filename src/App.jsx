import { useState } from "react";
import Counter from "./components/Counter";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";

export default function App() {

    const [dark, setDark] = useState(false);

    return (
        <div
            className="app"
            style={{
                backgroundColor: dark ? "#111827" : "#f1f5f9",
                color: dark ? "#ffffff" : "#1e293b"
            }}
        >

            <div className="header">
                <h1>React State Management</h1>


                <ThemeToggle
                    dark={dark}
                    setDark={setDark}
                />
            </div>

            <div className="content">

                <Counter dark={dark} />

            </div>

        </div>
    );
}