import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://lucidgrowth-project.onrender.com/projects/user/signup",
        data
      );

      // Save email to local storage
      localStorage.setItem("email", data.email);

      toast.success("Signup successful");
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
      setData({ ...data, password: "" }); // Clear password field
      toast.error(err.response?.data?.message || "Registration failed");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Register
        </h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="fullname"
              value={data.fullname}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
              placeholder="Enter your name"
            />
          </div>
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
              name="email"
              value={data.email}
              onChange={handleChange}
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
              name="password"
              value={data.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
