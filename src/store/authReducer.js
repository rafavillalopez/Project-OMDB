import { createAction, createReducer } from "@reduxjs/toolkit";

export const toggleLoggIn = createAction("TOGGLE_LOGGIN");

const authReducer = createReducer(false, {
  [toggleLoggIn]: (state, action) => !state.isLoggedIn,
});

export default authReducer;
