import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../featuers/userSlice";

export const store = configureStore({
	reducer: userReducer,
})