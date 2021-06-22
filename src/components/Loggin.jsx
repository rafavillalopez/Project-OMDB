import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { message } from "antd";

import { setLogginFalse, setLogginTrue } from "../store/authReducer";
import { loggin } from "../store/logRegReducer";

export default function Loggin() {
  const dispatch = useDispatch();

  //const { user } = useSelector((state) => state);
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

    dispatch(loggin(value)).then((data) => {
      if (data.payload && data.payload.id) {
        message.success(`Success login: welcome back ${data.payload.name}`, 3);
        return dispatch(setLogginTrue());
      }
      if (data.error) {
        message.error(`Unauthorized, try again`, 3);
        dispatch(setLogginFalse());
      }
    });

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
        <button>Log In</button>
      </form>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
}
