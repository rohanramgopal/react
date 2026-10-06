import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function UserPagination() {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Rohan Sharma",
      email: "rohan@gmail.com",
      age: 23,
      city: "Bengaluru",
    },
    {
      id: 2,
      name: "Rahul Kumar",
      email: "rahul@gmail.com",
      age: 24,
      city: "Mumbai",
    },
    {
      id: 3,
      name: "Arjun Rao",
      email: "arjun@gmail.com",
      age: 22,
      city: "Chennai",
    },
    {
      id: 4,
      name: "Vikram Singh",
      email: "vikram@gmail.com",
      age: 25,
      city: "Delhi",
    },
    {
      id: 5,
      name: "Karan Patel",
      email: "karan@gmail.com",
      age: 26,
      city: "Ahmedabad",
    },
    {
      id: 6,
      name: "Aditya Verma",
      email: "aditya@gmail.com",
      age: 23,
      city: "Hyderabad",
    },
    {
      id: 7,
      name: "Akash Reddy",
      email: "akash@gmail.com",
      age: 24,
      city: "Hyderabad",
    },
    {
      id: 8,
      name: "Manish Gupta",
      email: "manish@gmail.com",
      age: 27,
      city: "Pune",
    },
    {
      id: 9,
      name: "Suresh Nair",
      email: "suresh@gmail.com",
      age: 25,
      city: "Kochi",
    },
    {
      id: 10,
      name: "Nikhil Das",
      email: "nikhil@gmail.com",
      age: 22,
      city: "Kolkata",
    },
    {
      id: 11,
      name: "Amit Joshi",
      email: "amit@gmail.com",
      age: 28,
      city: "Jaipur",
    },
    {
      id: 12,
      name: "Karthik Rao",
      email: "karthik@gmail.com",
      age: 23,
      city: "Bengaluru",
    },
    {
      id: 13,
      name: "Varun Mehta",
      email: "varun@gmail.com",
      age: 26,
      city: "Surat",
    },
    {
      id: 14,
      name: "Ravi Kumar",
      email: "ravi@gmail.com",
      age: 24,
      city: "Mysuru",
    },
    {
      id: 15,
      name: "Sanjay Shah",
      email: "sanjay@gmail.com",
      age: 27,
      city: "Mumbai",
    },
    {
      id: 16,
      name: "Deepak Rao",
      email: "deepak@gmail.com",
      age: 25,
      city: "Bengaluru",
    },
    {
      id: 17,
      name: "Pranav Iyer",
      email: "pranav@gmail.com",
      age: 22,
      city: "Chennai",
    },
    {
      id: 18,
      name: "Harish Babu",
      email: "harish@gmail.com",
      age: 29,
      city: "Hyderabad",
    },
    {
      id: 19,
      name: "Surya Kumar",
      email: "surya@gmail.com",
      age: 24,
      city: "Delhi",
    },
    {
      id: 20,
      name: "Abhishek Jain",
      email: "abhishek@gmail.com",
      age: 26,
      city: "Pune",
    },
  ]);

  const itemPerPage = 5;

  const totalPage = Math.ceil(users.length / itemPerPage);

  const startInd = (currentPage - 1) * itemPerPage;

  const endInd = startInd + itemPerPage;

  const currentUsers = users.slice(startInd, endInd);

  const previousPage = () => {
    if (currentPage > 1) {
      setSearchParams({ page: currentPage - 1 });
    }
  };

  const nextPage = () => {
    if (currentPage < totalPage) {
      setSearchParams({ page: currentPage + 1 });
    }
  };

  return (
    <div className="page">
      <h1>User Pagination</h1>

      <br></br>
      <div className="user-container">
        {currentUsers.map((user) => (
          <div className="user-card" key={user.id}>
            <h2>{user.name}</h2>

            <p>
              <strong>ID:</strong> {user.id}
            </p>

            <p>
              <strong>Email:</strong> {user.email}
            </p>

            <p>
              <strong>Age:</strong> {user.age}
            </p>

            <p>
              <strong>City:</strong> {user.city}
            </p>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button
          onClick={previousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span>
          Page {currentPage} of {totalPage}
        </span>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}