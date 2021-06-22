import React, { useState } from "react";

export default function SearchInput() {
  const [value, setValue] = useState({
    name: "",
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
    console.log(value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="name"
          type="text"
          value={value.name}
          onChange={onChange}
          placeholder={"Name"}
        />
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
