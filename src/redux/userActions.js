import { setUser, clearUser, setLoading, setError } from "./userSlice";
import axios from "axios";

// Signup
export const signup = (userData, apiEndpoint) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post(
      `/api/v1/auth/signup/${apiEndpoint}`,
      userData,
      { withCredentials: true }
    );
    if (response.status === 201) {
      const { role } = response.data;
      dispatch(
        setUser({
          isAuthenticated: true,
          role: role,
        })
      );
      console.log("User created successfully:", response.data);
      dispatch(setLoading(false));
      return { success: true, role };
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
      `/api/v1/auth/login/${apiEndpoint}`,
      userData,
      {
        withCredentials: true,
      }
    );
    if (response.status === 200) {
      const { role } = response.data;
      dispatch(
        setUser({
          isAuthenticated: true,
          role: role,
        })
      );
      dispatch(setLoading(false));
      return { success: true, role };
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
    const response = await axios.delete("/api/v1/auth/logout", {
      withCredentials: true,
    });
    if (response.status === 200) {
      dispatch(clearUser());
      return { success: true };
    }
  } catch (error) {
    dispatch(setError(error.response.data.message));
  }
};
