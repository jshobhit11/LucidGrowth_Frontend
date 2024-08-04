import React, { useState } from "react";
import axios from "axios";

const Project = ({ projects, setProjects }) => {
  const API_URL = "https://lucidgrowth-project.onrender.com/projects";
  const URL = "https://lucidgrowth-project.onrender.com";
  const email = localStorage.getItem("email");
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setProjects((prevProjects) =>
        prevProjects.filter((project) => project._id !== id)
      );
      alert("Project deleted successfully");
    } catch (error) {
      console.error("Error deleting project:", error);
      alert("Failed to delete project. Please try again.");
    }
  };

  return (
    <div className="project-list p-4">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project._id}
            className="card bg-white p-4 shadow-md rounded-lg border border-gray-200"
          >
            <div className="card-body">
              {
                <img
                  src={URL + "/images/" + project.image}
                  alt={`${project.title} thumbnail`}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
              }
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold">Technologies: </span>
                {project.technologies}
              </p>
              <div className="flex items-center justify-between mb-4">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline hover:text-blue-700"
                  >
                    View Demo
                  </a>
                )}
                {project.sourceCodeLink && (
                  <a
                    href={project.sourceCodeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline hover:text-blue-700"
                  >
                    Source Code
                  </a>
                )}
              </div>
              {email === "jshobhit3020@gmail.com" && (
                <button
                  onClick={() => handleDelete(project._id)}
                  className="bg-red-500 text-white font-semibold py-1 px-3 rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Delete Project
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
