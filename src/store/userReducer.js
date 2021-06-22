import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const register = createAsyncThunk("REGISTER", async (user) => {
  try {
    const createdUser = await axios
      .post(`/api/auth/register`, user)
      .then((res) => res.data);

    return createdUser;
  } catch (err) {
    throw err;
  }
});

export const loggin = createAsyncThunk("LOGGIN", async (user) => {
  try {
    const createdUser = await axios
      .post(`/api/auth/login`, user)
      .then((res) => res.data);

    return createdUser;
  } catch (err) {
    throw err;
  }
});
const userReducer = createReducer(
  {},
  {
    [register.pending]: (state, action) => "creating...",
    [register.fulfilled]: (state, action) => action.payload,
    [register.rejected]: (state, action) => ["No entries for this title"],

    [loggin.pending]: (state, action) => state,
    [loggin.fulfilled]: (state, action) => {

      return action.payload;
    },
    [loggin.rejected]: (state, action) => ["No entries for this title"],
  }
);

export default userReducer;
