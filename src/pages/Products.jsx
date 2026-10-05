import React from "react";

export default function Products() {
  return (
    <div className="page">
      <h1>Our Products</h1>

      <p>
        Explore some of the digital products created by our team.
      </p>

      <div className="product-grid">
        <div className="product-card">
          <h2>Business Manager</h2>
          <p>
            A platform for managing everyday business operations.
          </p>
        </div>

        <div className="product-card">
          <h2>Learning Platform</h2>
          <p>
            A digital platform designed for online learning.
          </p>
        </div>

        <div className="product-card">
          <h2>AI Assistant</h2>
          <p>
            An intelligent assistant designed to improve productivity.
          </p>
        </div>
      </div>
    </div>
  );
}