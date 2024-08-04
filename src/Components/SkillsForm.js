import React, { useState } from "react";
import axios from "axios";

const API_URL = "https://lucidgrowth-project.onrender.com/skills"; // Adjust this to match your API endpoint
const email = localStorage.getItem("email");

const SkillsForm = ({ setSkills }) => {
  const [skill, setSkill] = useState("");
  const [level, setLevel] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleButtonClick = () => {
    if (email === "jshobhit3020@gmail.com") {
      setIsFormVisible(true);
    } else {
      alert("You are not authorized to add a skill.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_URL, { name: skill, level });
      setSkills((prevSkills) => [...prevSkills, response.data]);
      setSkill("");
      setLevel("");
      setIsFormVisible(false);
      alert("Skill added successfully");
    } catch (error) {
      console.error("Error adding skill:", error);
      alert("Failed to add skill");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {!isFormVisible && (
          <button
            onClick={handleButtonClick}
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Skill
          </button>
        )}

        {isFormVisible && (
          <>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="skill"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Skill Name
                </label>
                <input
                  type="text"
                  id="skill"
                  value={skill}
                  onChange={(e) => setSkill(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., JavaScript"
                />
              </div>
              <div>
                <label
                  htmlFor="level"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Proficiency Level
                </label>
                <select
                  id="level"
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="" disabled>
                    Select a level
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Add Skill
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default SkillsForm;
