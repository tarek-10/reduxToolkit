import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: {
      name: "",
      email: "",
    },
    loading: false,
    error: false,
  },
  reducers: {
    addUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },

    //start calling

    userStart: (state) => {
      state.loading = true;
    },
    userSuccess: (state, action) => {
      state.userData = action.payload;
      state.loading = false;
    },
    userEror: (state) => {
      state.error = true;
      state.loading = false;
    },
    //end start calling
  },
});

export const { addUser, userStart, userSuccess, userEror } = userSlice.actions;
export default userSlice.reducer;
