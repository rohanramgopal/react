import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Services() {
  return (
    <div className="page">
      <h1>Our Services</h1>

      <p>
        Explore the services we provide for modern businesses.
      </p>

      <div className="service-links">
        <NavLink
          to="web-development"
          className={({ isActive }) =>
            isActive ? "service-link active-service" : "service-link"
          }
        >
          Web Development
        </NavLink>

        <NavLink
          to="app-development"
          className={({ isActive }) =>
            isActive ? "service-link active-service" : "service-link"
          }
        >
          App Development
        </NavLink>

        <NavLink
          to="ui-ux"
          className={({ isActive }) =>
            isActive ? "service-link active-service" : "service-link"
          }
        >
          UI/UX Design
        </NavLink>
      </div>

      <div className="nested-content">
        <Outlet />
      </div>
    </div>
  );
}