import React from "react";

export default function About() {
  return (
    <div className="page">
      <h1>About Us</h1>

      <p>
        TechNova is a technology company focused on creating
        simple, reliable and modern digital solutions.
      </p>

      <div className="info-grid">
        <div className="info-card">
          <h3>Our Mission</h3>
          <p>
            Our mission is to help businesses build useful
            and modern digital products.
          </p>
        </div>

        <div className="info-card">
          <h3>Our Vision</h3>
          <p>
            Our vision is to create technology that makes
            everyday business easier.
          </p>
        </div>
      </div>
    </div>
  );
}