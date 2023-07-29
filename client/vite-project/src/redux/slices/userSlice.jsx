import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signupUser = createAsyncThunk(
  "auth/signup",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `http://localhost:7000/user/signup`,
        userData,
        {
          headers: {
            accept: "application/json",
          },
        }
      );
      return response.data; // Return the data from the response for fulfilled state
    } catch (error) {
      // Handle the error and return it for rejected state
      // You can also console.log the error for debugging purposes
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  data: null,
  loading: false,
  // Other properties if any
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add the reducers for the async thunk actions
    builder
      .addCase(signupUser.pending, (state) => {
        // Handle the pending state if needed (optional)
        // This state will be triggered when the API request is ongoing
        state.loading = true;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        // Handle the fulfilled state when the API request is successful
        // You can access the response data in action.payload
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        // Handle the rejected state when the API request fails
        // You can access the error in action.error
        // Handle error cases and display error messages if needed
        state.loading = false;
        // You can also handle the error here, e.g., state.error = action.error;
      });
  },
});

export default userSlice.reducer;
