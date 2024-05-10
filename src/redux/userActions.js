import { setUser, clearUser, setLoading, setError } from "./userSlice";
import axios from "axios";

// Signup
export const signup = (userData) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post(
      "http://localhost:5000/api/auth/signup",
      userData,
      { withCredentials: true }
    );
    if (response.status === 200) {
      dispatch(
        setUser({
          isAuthenticated: true,
        })
      );
      dispatch(setLoading(false));
      return { success: true };
    }
  } catch (error) {
    dispatch(setError(error.response.data.message));
    return { success: false };
  }
};

// Login
export const login = (userData) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post(
      "http://localhost:5000/api/auth/login",
      userData,
      {
        withCredentials: true,
      }
    );
    if (response.status === 200) {
      dispatch(
        setUser({
          isAuthenticated: true,
        })
      );
      dispatch(setLoading(false));
      return { success: true };
    }
  } catch (error) {
    dispatch(setError(error.response.data.message));
    return { success: false };
  }
};

// Logout
export const logout = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post(
      "http://localhost:5000/api/auth/logout",
      null,
      { withCredentials: true }
    );
    if (response.status === 200) {
      dispatch(clearUser());
    }
  } catch (error) {
    dispatch(setError(error.response.data.message));
  }
};
