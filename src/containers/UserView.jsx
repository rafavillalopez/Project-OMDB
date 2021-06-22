import React from "react";
import { useSelector } from "react-redux";
import { Favorites } from "./Forites";

export default function UserView() {
  const { user } = useSelector((state) => state);

  return (
    <div>
      <h3>{user.name}</h3>
      <Favorites />
    </div>
  );
}
