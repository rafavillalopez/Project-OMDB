import React from "react";
import { Link } from "react-router-dom";

import MovieForm from "../components/MovieForm";

export default function Main() {
  return (
    <>
      <MovieForm />
      <Link to="/register">
        <button>Register</button>
      </Link>
      <Link to="/loggin">
        <button>Log In</button>
      </Link>
    </>
  );
}
