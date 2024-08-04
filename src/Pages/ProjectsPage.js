import React, { useEffect, useState } from "react";
import Project from "../Components/Project";
import ProjectForm from "../Components/ProjectForm";
import axios from "axios";

const API_URL = "https://lucidgrowth-project.onrender.com/projects";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const response = await axios.get(API_URL);
        setProjects(response.data);
        setError(""); // Clear any previous errors on successful fetch
      } catch (error) {
        console.error("Error fetching projects:", error);
        setError("Failed to fetch projects"); // Set error message for UI
      }
      setLoading(false);
    };

    fetchProjects();

    // Check local storage for email and set the showForm state accordingly
    const email = localStorage.getItem("email");
    if (email === "jshobhit3020@gmail.com") {
      setShowForm(true);
    } else {
      setShowForm(false);
    }
  }, []);

  return (
    <div className="projects">
      {loading && <div>Loading Projects...</div>}
      {error && <div className="error-message">{error}</div>}

      <Project projects={projects} setProjects={setProjects} />
      {showForm && <ProjectForm setProjects={setProjects} />}
    </div>
  );
};

export default ProjectsPage;
