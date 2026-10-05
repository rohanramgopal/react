import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Tech123</div>

      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Services
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Products
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}