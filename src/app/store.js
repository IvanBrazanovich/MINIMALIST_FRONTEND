import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/login/loginSlice";
import createPageSlice from "../features/app/createPageSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    createPage: createPageSlice,
  },
});
