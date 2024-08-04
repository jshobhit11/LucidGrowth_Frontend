import axios from "axios";

const API_URL = "https://lucidgrowth-project.onrender.com";

const AuthService = {
  login: async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  },
  register: async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/register`, userData);
      return response.data;
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  },
  logout: async () => {
    try {
      await axios.post(`${API_URL}/logout`);
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    }
  },
  checkAuth: async () => {
    try {
      const response = await axios.get(`${API_URL}/status`);
      return response.data;
    } catch (error) {
      console.error("Check auth error:", error);
      throw error;
    }
  },
};

export default AuthService;
