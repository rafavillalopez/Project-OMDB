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



const logRegReducer = createReducer(
  {},
  {
    [register.pending]: (state, action) => {
      return { msg: "creating..." };
    },
    [register.fulfilled]: (state, action) => {
      return action.payload;
    },
    [register.rejected]: (state, action) => {
      return {
        err: action.error,
      };
    },

    [loggin.pending]: (state, action) => {
      return { msg: "logging..." };
    },

    [loggin.fulfilled]: (state, action) => action.payload,
    [loggin.rejected]: (state, action) => {
      return {
        err: action.error,
      };
    },
  }
);

export default logRegReducer;
