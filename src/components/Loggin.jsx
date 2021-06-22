import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { loggin } from "../store/userReducer";

export default function Loggin() {
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const onChange = ({ target }) => {
    setValue((state) => {
      return { ...state, [target.name]: target.value };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(loggin(value));
    setValue({
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          value={value.email}
          onChange={onChange}
          placeholder={"Email"}
        />
        <input
          name="password"
          type="password"
          value={value.password}
          onChange={onChange}
          placeholder={"Password"}
        />
        <button>Register</button>
      </form>
    </div>
  );
}
