import { useState } from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import "./App.css";

export default function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const users = [
        {
            id: 1,
            name: "Rohan",
            email: "rohan@gmail.com",
            age: 23,
            city: "Bengaluru",
            role: "Full Stack Developer"
        },
        {
            id: 2,
            name: "Rahul",
            email: "rahul@gmail.com",
            age: 24,
            city: "Mumbai",
            role: "Frontend Developer"
        },
        {
            id: 3,
            name: "Ananya",
            email: "ananya@gmail.com",
            age: 22,
            city: "Delhi",
            role: "UI/UX Designer"
        },
        {
            id: 4,
            name: "Priya",
            email: "priya@gmail.com",
            age: 25,
            city: "Chennai",
            role: "Backend Developer"
        },
        {
            id: 5,
            name: "Arjun",
            email: "arjun@gmail.com",
            age: 23,
            city: "Hyderabad",
            role: "Software Engineer"
        }
    ];

    function handleLoginLogout() {
        setIsLoggedIn(!isLoggedIn);
    }

    return (
        <div className="app">

            <div className="header">
                <h1>User Dashboard</h1>

            </div>

            <div className="login-section">

                {isLoggedIn ? <Home /> : <Login />}

                <button onClick={handleLoginLogout}>
                    {isLoggedIn ? "Logout" : "Login"}
                </button>

            </div>

            <div className="users-section">

                <h2>User Details</h2>

                <div className="user-container">

                    {users.map((user) => (
                        <div className="user-card" key={user.id}>

                            <div className="user-image">
                                {user.name.charAt(0)}
                            </div>

                            <h3>{user.name}</h3>

                            <p>
                                <span>Email:</span> {user.email}
                            </p>

                            <p>
                                <span>Age:</span> {user.age}
                            </p>

                            <p>
                                <span>City:</span> {user.city}
                            </p>

                            <p>
                                <span>Role:</span> {user.role}
                            </p>

                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
}