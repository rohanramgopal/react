import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UserDetails() {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const page = useNavigate();

  useEffect(() => {
    setLoading(true);
    setError(false);

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("User not found");
        }

        return res.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h2>Loading user...</h2>;
  }

  if (error) {
    return (
      <div className="details-page">
        <h2>User Not Found</h2>

        <button onClick={() => page("/")}>
          Back to Users
        </button>
      </div>
    );
  }

  return (
    <div className="details-page">
      <h1>User Details</h1>

      <div className="details-card">
        <h2>{user.name}</h2>

        <p>
          <strong>ID:</strong> {user.id}
        </p>

        <p>
          <strong>Username:</strong> {user.username}
        </p>

        <p>
          <strong>Email:</strong> {user.email}
        </p>

        <p>
          <strong>Phone:</strong> {user.phone}
        </p>

        <p>
          <strong>Website:</strong> {user.website}
        </p>

        <p>
          <strong>City:</strong> {user.address.city}
        </p>
      </div>

      <button onClick={() => page("/")}>
        Back to Users
      </button>
    </div>
  );
}