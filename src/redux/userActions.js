import { setUser, clearUser, setLoading, setError } from "./userSlice";
import axios from "axios";

// Signup
export const signup = (userData, apiEndpoint) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post(
      `http://localhost:5000/api/v1/auth/signup/${apiEndpoint}`,
      userData,
      { withCredentials: true }
    );
    if (response.status === 201) {
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
export const login = (userData, apiEndpoint) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post(
      `http://localhost:5000/api/v1/auth/login/${apiEndpoint}`,
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
