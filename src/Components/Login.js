import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic validation
    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }
    try {
      const response = await axios.post(
        "https://lucidgrowth-project.onrender.com/user/login",
        {
          email,
          password,
        }
      );
      localStorage.setItem("email", email);
      localStorage.setItem("token", response.data.token);
      toast.success("loggedIn successfully");
      // Redirect or update UI as needed
      navigate("/");
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Login failed";
      toast.error("Error: " + errorMessage);
      setError(errorMessage);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
