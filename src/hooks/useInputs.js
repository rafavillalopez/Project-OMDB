import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { message } from "antd";

import { setLogginFalse, setLogginTrue } from "../store/authReducer";
import { loggin, register } from "../store/logRegReducer";
import { getMovies } from "../store/moviesReducer";

const useInputs = () => {
  const [value, setValue] = useState({
    name: "",
    password: "",
    confirm: "",
    email: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const loggIng = (e) => {
    e.preventDefault();

    dispatch(loggin(value)).then((data) => {
      if (data.payload && data.payload.id) {
        message.success(`Success login: welcome back ${data.payload.name}`, 3);
        dispatch(setLogginTrue());
        history.push("/user");
      }
      if (data.error) {
        message.error(`Unauthorized, try again`, 3);
        dispatch(setLogginFalse());
      }
    });
    setValue({
      name: "",
      password: "",
      confirm: "",
      email: "",
    });
  };

  const signUp = (e) => {
    e.preventDefault();
    dispatch(register(value)).then((data) => {
      if (data.payload && data.payload.id) {
        message.success(`Success: welcome ${data.payload.name}`, 3);
        dispatch(setLogginTrue());
        history.push("/user");
      }
      if (data.error) {
        message.error(`Not valid email or password, try again`, 3);
        dispatch(setLogginFalse());
      }
    });
    setValue({
      name: "",
      password: "",
      confirm: "",
      email: "",
    });
  };

  const apiMovies = (e) => {
    e.preventDefault();
    if (value.name.length > 1) {
      dispatch(getMovies(value.name));
      history.push("/movies");
    }
    setValue({
      name: "",
      password: "",
      confirm: "",
      email: "",
    });
  };

  const onChange = ({ target }) => {
    setValue((state) => {
      return {
        ...state,
        [target.name]: target.value,
      };
    });
  };

  return { value, onChange, loggIng, signUp, apiMovies };
};

export default useInputs;
