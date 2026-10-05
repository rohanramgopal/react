import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function UserList() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading users...</h2>;
  }

  return (
    <div className="user-container">
      {user.map((person) => (
        <div className="user-card" key={person.id}>
          <h2>{person.name}</h2>

          <p>
            <strong>ID:</strong> {person.id}
          </p>

          <p>
            <strong>Username:</strong> {person.username}
          </p>

          <p>
            <strong>Email:</strong> {person.email}
          </p>

          <p>
            <strong>City:</strong> {person.address.city}
          </p>

          <Link
            className="details-button"
            to={`/users/${person.id}`}
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}