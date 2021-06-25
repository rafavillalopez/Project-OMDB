import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk("REGISTER", async (user) => {
  try {
    const req = await axios.post(`/api/auth/register`, user);

    const createdUser = req.data;

    return createdUser;
  } catch (err) {
    throw err;
  }
});

export const loggin = createAsyncThunk("LOGGIN", async (user) => {
  const req = await axios.post(`/api/auth/login`, user);

  const createdUser = req.data;

  return createdUser;
});

export const logOut = createAsyncThunk("LOGOUT", async (user) => {
  const req = await axios.get(`/api/auth/logout`, user);

  const createdUser = req.data;

  return createdUser;
});

export const setUser = createAsyncThunk("SETUSER", async () => {
  const req = await axios.get(`/api/auth/me`);

  return req.data;
});
const logRegReducer = createReducer(
  {},
  {
    [register.pending]: (state, action) => {
      return { msg: "Signing up..." };
    },
    [register.fulfilled]: (state, action) => action.payload,
    [register.rejected]: (state, action) => {
      return {
        err: action.error,
      };
    },

    [loggin.pending]: (state, action) => {
      return { msg: "logging In..." };
    },
    [loggin.fulfilled]: (state, action) => action.payload,
    [loggin.rejected]: (state, action) => {
      return {
        err: action.error,
      };
    },

    [logOut.pending]: (state, action) => {
      return { msg: "logging Out..." };
    },
    [logOut.fulfilled]: (state, action) => action.payload,
    [logOut.rejected]: (state, action) => {
      return {
        err: action.error,
      };
    },
    [setUser.pending]: (state, action) => {
      return { msg: "No user found..." };
    },
    [setUser.fulfilled]: (state, action) => action.payload,
    [setUser.rejected]: (state, action) => {
      return {};
    },
  }
);

export default logRegReducer;
