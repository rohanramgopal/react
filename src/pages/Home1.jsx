import React from "react";
import UserList from "../components/UserList";

export default function Home1() {
  return (
    <div>
      <h1>User List</h1>
      <p>Click on a user to view their details.</p>

      <UserList />
    </div>
  );
}