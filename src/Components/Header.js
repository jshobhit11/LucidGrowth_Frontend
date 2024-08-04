import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const onhandleClick = () => {
    // Clear token from local storage
    localStorage.removeItem("token");
    localStorage.removeItem("email");

    // Optionally, update global state or context here if needed

    // Redirect to home page or login page
    navigate("/");
  };

  // Check if token exists in local storage
  const token = localStorage.getItem("token");

  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/40"
            alt="Logo"
            className="w-10 h-10 rounded-full"
          />
          <h1 className="text-2xl font-bold">Shobhit Jain Portfolio</h1>
        </div>
        <ul className="hidden md:flex space-x-4 text-lg">
          <li>
            <Link to="/" className="hover:text-gray-400 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="hover:text-gray-400 transition-colors"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className="hover:text-gray-400 transition-colors"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/experience"
              className="hover:text-gray-400 transition-colors"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-gray-400 transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>

        <ul className="flex space-x-6">
          {!token ? (
            <>
              <li>
                <Link
                  to="/login"
                  className="text-blue-500 hover:text-blue-700 transition-colors text-lg font-medium py-2 px-4 rounded-lg border border-blue-500 hover:border-blue-700"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="text-blue-500 hover:text-blue-700 transition-colors text-lg font-medium py-2 px-4 rounded-lg border border-blue-500 hover:border-blue-700"
                >
                  Sign Up
                </Link>
              </li>
            </>
          ) : (
            <li>
              <button
                onClick={onhandleClick}
                className="text-blue-500 hover:text-blue-700 transition-colors text-lg font-medium py-2 px-4 rounded-lg border border-blue-500 hover:border-blue-700"
              >
                Log Out
              </button>
            </li>
          )}
        </ul>

        <button
          className="md:hidden text-2xl focus:outline-none"
          aria-label="Open Menu"
        >
          &#9776;
        </button>
      </nav>
    </header>
  );
};

export default Header;
