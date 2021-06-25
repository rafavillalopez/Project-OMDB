import React from "react";

import s from "./RegisterLogin.module.scss";
import useInputs from "../../hooks/useInputs";

export default function Loggin() {
  const { value, onChange, loggIng } = useInputs();

  return (
    <div className="container">
      <form className={s.form} onSubmit={loggIng}>
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
        <button className={"ant-btn ant-btn-primary " + s.submit}>
          Log In
        </button>
      </form>
    </div>
  );
}
