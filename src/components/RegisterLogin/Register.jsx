import React from "react";

import s from "./RegisterLogin.module.scss";
import useInputs from "../../hooks/useInputs";

export default function Register() {
  const { value, onChange, signUp } = useInputs();

  return (
    <div className="container">
      <form className={s.form} onSubmit={signUp}>
        <label htmlFor="email">E-mail:</label>
        <input
          name="email"
          type="email"
          value={value.email}
          onChange={onChange}
          placeholder={"Email"}
        />
        <label htmlFor="password">Password:</label>
        <input
          name="password"
          type="password"
          value={value.password}
          onChange={onChange}
          placeholder={"Password"}
        />
        <label htmlFor="confirm">Confirm your Password:</label>
        <input
          name="confirm"
          type="password"
          value={value.confirm}
          onChange={onChange}
          placeholder={"Confirm your Password"}
        />
        <label htmlFor="name">Name:</label>
        <input
          name="name"
          type="text"
          value={value.name}
          onChange={onChange}
          placeholder={"Name"}
        />
        <button className={"ant-btn ant-btn-primary " + s.submit}>
          Register
        </button>
      </form>
    </div>
  );
}
