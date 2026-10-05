import React from "react";

export default function Home() {
  return (
    <div className="page home-page">
      <p className="small-title">WELCOME TO TECH123</p>

      <h1>Building Modern Digital Experiences</h1>

      <p>
        We create modern websites, mobile applications and
        digital solutions for businesses.
      </p>

      <div className="home-cards">
        <div className="info-card">
          <h3>Web Development</h3>
          <p>Modern and responsive websites for businesses.</p>
        </div>

        <div className="info-card">
          <h3>App Development</h3>
          <p>Useful and user-friendly mobile applications.</p>
        </div>

        <div className="info-card">
          <h3>UI/UX Design</h3>
          <p>Clean interfaces and simple user experiences.</p>
        </div>
      </div>
    </div>
  );
}