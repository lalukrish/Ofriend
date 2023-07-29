import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "../slices/userSlice"; // Import the reducer, not the async thunk

export const store = configureStore({
  reducer: { auth: userSliceReducer }, // Provide the userSliceReducer, not the async thunk
});
