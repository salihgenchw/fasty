import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/UserSlice";

const rootReducer = combineReducers({
  userReducer,
});

export const store = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
