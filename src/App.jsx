import React from "react";
import { Routes, Route } from "react-router-dom";
import UserPagination from "./components/UserPagination";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/users" element={<UserPagination />} />
      <Route path="/" element={<UserPagination />} />
    </Routes>
  );
}