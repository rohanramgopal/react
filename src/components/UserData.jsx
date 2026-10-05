import React, { useEffect, useState } from "react";

export default function UserData() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch user data");
        setLoading(false);
      });
  }, []);

  return (
    <div className="user-section">

      <div className="section-heading">
        <h2>User Information</h2>
        
      </div>

      {loading && (
        <div className="loading">
          Loading user data...
        </div>
      )}

      {error && (
        <div className="error">
          {error}
        </div>
      )}

      {!loading && !error && (
        <div className="user-grid">
          {users.map((user) => (
            <div className="user-card" key={user.id}>

              <div className="user-number">
                {user.id}
              </div>

              <h3>{user.name}</h3>

              <p className="username">
                @{user.username}
              </p>

              <div className="user-details">

                <p>
                  <span></span>
                  {user.email}
                </p>

                <p>
                  <span></span>
                  {user.phone}
                </p>

                <p>
                  <span></span>
                  {user.website}
                </p>

              </div>

            </div>
          ))}
        </div>
      )}

    </div>
  );
}