import React, { useEffect, useState } from "react";
import useExperienceStore from "../store/useExperienceStore";
import Experience from "../Components/Experience";
import ExperienceForm from "../Components/ExperienceForm";
import axios from "axios";
const API_URL = "https://lucidgrowth-project.onrender.com/experiences";

const ExperiencePage = () => {
  // const { experiences, fetchExperiences } = useExperienceStore();
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchExperiences = async () => {
      setLoading(true);
      try {
        const response = await axios.get(API_URL);
        setExperiences(response.data);
        setError(""); // Clear any previous errors on successful fetch
      } catch (error) {
        console.error("Error fetching experiences:", error);
        setError("Failed to fetch experiences"); // Set error message for UI
      }
      setLoading(false);
    };

    fetchExperiences();

    const email = localStorage.getItem("email");
    if (email === "jshobhit3020@gmail.com") {
      setShowForm(true);
    } else {
      setShowForm(false);
    }
  }, []);

  return (
    <div className="experiences-page-container">
      {loading && <div>Loading skills...</div>}
      {error && <div className="error-message">{error}</div>}
      <Experience experiences={experiences} setExperiences={setExperiences} />
      <ExperienceForm setExperiences={setExperiences} />
    </div>
  );
};

export default ExperiencePage;
