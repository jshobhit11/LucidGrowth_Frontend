import React, { useState } from "react";
import useExperienceStore from "../store/useExperienceStore";
import axios from "axios";
const API_URL = "https://lucidgrowth-project.onrender.com/experiences";
const email = localStorage.getItem("email");
const ExperienceForm = () => {
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const { addExperience } = useExperienceStore();
  const [error, setError] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_URL, {
        companyName,
        position,
        duration,
        description,
      });
      console.log("Experience added:", response.data);

      // addExperience({ companyName, position, duration, description });
      // Reset form fields
      setCompanyName("");
      setPosition("");
      setDuration("");
      setDescription("");
      setError("");
    } catch (err) {
      setError("Failed to add experience");
      console.error("Error adding experience:", err);
    }
  };
  const handleButtonClick = () => {
    if (email === "jshobhit3020@gmail.com") {
      setIsFormVisible(true);
    } else {
      alert("You are not authorized to add a project.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        {!isFormVisible && (
          <button
            onClick={handleButtonClick}
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Experience
          </button>
        )}

        {isFormVisible && (
          <>
            <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
              Add New Experience
            </h2>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="companyName"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="position"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Position
                </label>
                <input
                  type="text"
                  id="position"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="duration"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Duration
                </label>
                <input
                  type="text"
                  id="duration"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  rows="4"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-700"
                >
                  Add Experience
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ExperienceForm;
