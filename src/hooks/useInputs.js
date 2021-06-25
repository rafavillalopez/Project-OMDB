import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { message } from "antd";

import { setLogginFalse, setLogginTrue } from "../store/authReducer";
import { loggin, register } from "../store/logRegReducer";
import { getMovies } from "../store/moviesReducer";
import { getUsers } from "../store/usersReducer";
import { NotEmpty } from "../utils/utils.global";

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

    if (NotEmpty({ email: value.email, password: value.password })) {
      dispatch(loggin(value)).then((data) => {
        if (data.payload && data.payload.id) {
          message.success(
            `Success login: welcome back ${data.payload.name}`,
            3
          );
          dispatch(setLogginTrue());
          history.push("/user");
        }
        if (data.error) {
          message.error(`Unauthorized, try again`, 3);
          dispatch(setLogginFalse());
        }
      });
    } else {
      message.error(`Not empty inputs`);
    }
    setValue({
      name: "",
      password: "",
      confirm: "",
      email: "",
    });
  };

  const signUp = (e) => {
    e.preventDefault();
    if (!NotEmpty({ email: value.email, password: value.password }))
      message.error(`Not empty inputs`);
    if (value.password === value.confirm) {
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
    } else {
      message.error(`Password and confirmation have to be equal, try again`);
    }

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
      dispatch(getMovies(value.name)).then(() => {
        history.push("/movies");
      });
    }
    setValue({
      name: "",
      password: "",
      confirm: "",
      email: "",
    });
  };

  const dbUsers = (e) => {
    e.preventDefault();
    if (value.name.length > 1) {
      dispatch(getUsers(value.name)).then(() => {
        history.push("/users");
      });
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

  return { value, onChange, loggIng, signUp, apiMovies, dbUsers };
};

export default useInputs;
