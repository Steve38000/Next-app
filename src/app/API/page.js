"use client";

import React, { useEffect, useState } from "react";

export default function Page() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        setUsers(data.users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>API</h1>
      {users.map((item) => (
        <h3 key={item.id}>
          Name:{item.firstName}
          <br />
          lastname:{item.lastname}
          age:{item.age}
          <br />
          email:{item.email}
        </h3>
      ))}
    </div>
  );
}
