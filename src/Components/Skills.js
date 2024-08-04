import React, { useState } from "react";
import axios from "axios";

const API_URL = "https://lucidgrowth-project.onrender.com/skills";

const Skills = ({ skills, setSkills }) => {
  const [editingSkill, setEditingSkill] = useState(null);
  const [updatedSkill, setUpdatedSkill] = useState({ name: "", level: "" });
  const email = localStorage.getItem("email");

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setSkills((prevSkills) => prevSkills.filter((skill) => skill._id !== id));
      alert("Skill deleted successfully");
    } catch (error) {
      console.error("Error deleting skill:", error);
      alert("Failed to delete skill");
    }
  };

  const handleUpdate = (id) => {
    const skill = skills.find((skill) => skill._id === id);
    setEditingSkill(id);
    setUpdatedSkill({ name: skill.name, level: skill.level });
  };

  const handleEditChange = (e) => {
    setUpdatedSkill({ ...updatedSkill, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting edit for:", editingSkill, updatedSkill);
    try {
      const response = await axios.put(
        `${API_URL}/${editingSkill}`,
        updatedSkill
      );
      setSkills((prevSkills) =>
        prevSkills.map((skill) =>
          skill._id === editingSkill ? response.data : skill
        )
      );
      console.log("Response from API:", response.data);
      setEditingSkill(null);
      alert("Skill updated successfully");
    } catch (error) {
      console.error("Error updating skill:", error);
      alert("Failed to update skill");
    }
  };

  return (
    <div className="skills-list p-4">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div
            key={skill._id}
            className="card bg-white p-4 shadow-md rounded-lg border border-gray-200"
          >
            <div className="card-body">
              {editingSkill === skill._id ? (
                <form onSubmit={handleEditSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-gray-700 text-sm font-medium mb-2"
                    >
                      Skill Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={updatedSkill.name}
                      onChange={handleEditChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="level"
                      className="block text-gray-700 text-sm font-medium mb-2"
                    >
                      Proficiency Level
                    </label>
                    <select
                      id="level"
                      name="level"
                      value={updatedSkill.level}
                      onChange={handleEditChange}
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
                  <div className="flex items-center justify-between">
                    <button
                      type="submit"
                      className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditingSkill(null)}
                      className="bg-gray-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                  <p className="text-gray-600 mb-4">Level: {skill.level}</p>

                  {email === "jshobhit3020@gmail.com" && (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleDelete(skill._id)}
                        className="bg-red-500 text-white font-semibold py-1 px-3 rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => handleUpdate(skill._id)}
                        className="bg-yellow-500 text-white font-semibold py-1 px-3 rounded-md shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      >
                        Edit
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
