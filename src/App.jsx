import React from "react";
import { Routes, Route } from "react-router-dom";

import Home1 from "./pages/Home1";
import UserDetails from "./components/UserDetails";

import "./App.css";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home1 />} />

        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </div>
  );
}