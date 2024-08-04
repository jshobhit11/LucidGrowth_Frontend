import React from "react";
import axios from "axios";

const Experience = ({ experiences, setExperiences }) => {
  const API_URL = "https://lucidgrowth-project.onrender.com/experiences";
  const email = localStorage.getItem("email");

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setExperiences((prevExperiences) =>
        prevExperiences.filter((experience) => experience._id !== id)
      );
      alert("Experience deleted successfully");
    } catch (error) {
      console.error("Error deleting experience:", error);
      alert("Failed to delete experience. Please try again.");
    }
  };

  return (
    <div className="experience-list p-4">
      <h2 className="text-3xl font-bold mb-4">Experience</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((exp) => (
          <div
            key={exp._id}
            className="card bg-white p-4 shadow-md rounded-lg border border-gray-200"
          >
            <div className="card-body">
              <h3 className="text-xl font-semibold mb-2">{exp.position}</h3>
              <p className="text-gray-600 mb-2">{exp.companyName}</p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Duration: </span>
                {exp.duration}
              </p>
              <p className="text-gray-600 mb-4">{exp.description}</p>
              {email === "jshobhit3020@gmail.com" && (
                <button
                  onClick={() => handleDelete(exp._id)}
                  className="bg-red-500 text-white font-semibold py-1 px-3 rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Delete Experience
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
