import React from "react";
import { useSelector } from "react-redux";
import UserCard from "./UserCard/UserCard";

export default function Uers() {
  const { users } = useSelector((state) => state);

  if (!users.length) {
    return (
      <div className="container">
        <UserCard.Loading />
      </div>
    );
  }

  return (
    <div className="container">
      {users?.map((user, i) => {
        return <UserCard key={i} user={user} />;
      })}
    </div>
  );
}

