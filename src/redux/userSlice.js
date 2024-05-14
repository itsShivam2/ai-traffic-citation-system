import { createSlice } from "@reduxjs/toolkit";

function saveLocalStore(state) {
  localStorage.setItem("auth", JSON.stringify(state));
}

const initialState = localStorage.getItem("auth")
  ? JSON.parse(localStorage.getItem("auth"))
  : {
      isAuthenticated: false,
      role: null,
      loading: false,
      error: null,
    };

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isAuthenticated = true;
      state.role = action.payload.role;
      state.loading = false;
      state.error = null;
      saveLocalStore(state);
    },
    clearUser: (state) => {
      state.isAuthenticated = false;
      state.role = null;
      state.loading = false;
      state.error = null;
      saveLocalStore(state);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
      saveLocalStore(state);
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      saveLocalStore(state);
    },
  },
});

export const { setUser, clearUser, setLoading, setError } = userSlice.actions;

export default userSlice.reducer;
