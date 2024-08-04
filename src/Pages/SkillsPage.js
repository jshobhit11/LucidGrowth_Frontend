// import React, { useEffect } from "react";
// import useSkillStore from "../store/useSkillStore";
// import Skills from "../Components/Skills";
// import SkillsForm from "../Components/SkillsForm";

// const SkillsPage = () => {
//   const { skills, fetchSkills } = useSkillStore();

//   useEffect(() => {
//     fetchSkills();
//   }, [fetchSkills]);

//   return (
//     <div className="skills">
//       <Skills skills={skills} />
//       <SkillsForm />
//     </div>
//   );
// };

// export default SkillsPage;

// import React, { useState, useEffect } from 'react';
// import Skills from './Skills';

// const App = () => {
//   const [skills, setSkills] = useState([]);

//   useEffect(() => {
//     // Fetch skills from the server on component mount
//     axios.get('/skills').then((response) => setSkills(response.data));
//   }, []);

//   return <Skills skills={skills} setSkills={setSkills} />;
// };

// export default App;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Skills from "../Components/Skills";
// import SkillsForm from "../Components/SkillsForm";

// const API_URL = "http://localhost:4001/skills"; // Adjust the URL to match your API endpoint

// const SkillsPage = () => {
//   const [skills, setSkills] = useState([]);

//   useEffect(() => {
//     const fetchSkills = async () => {
//       try {
//         const response = await axios.get(API_URL);
//         setSkills(response.data);
//       } catch (error) {
//         console.error("Error fetching skills:", error);
//       }
//     };

//     fetchSkills();
//   }, []);

//   return (
//     <div className="skills">
//       <Skills skills={skills} setSkills={setSkills} />
//       <SkillsForm />
//     </div>
//   );
// };

// export default SkillsPage;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Skills from "../Components/Skills";
import SkillsForm from "../Components/SkillsForm";
//import "./SkillsPage.css"; // Assuming you have a CSS file for styling

const API_URL = "https://lucidgrowth-project.onrender.com/skills"; // Adjust the URL to match your API endpoint

const SkillsPage = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchSkills = async () => {
      setLoading(true);
      try {
        const response = await axios.get(API_URL);
        setSkills(response.data);
        setError(""); // Clear any previous errors on successful fetch
      } catch (error) {
        console.error("Error fetching skills:", error);
        setError("Failed to fetch skills"); // Set error message for UI
      }
      setLoading(false);
    };

    fetchSkills();

    const email = localStorage.getItem("email");
    if (email === "jshobhit3020@gmail.com") {
      setShowForm(true);
    } else {
      setShowForm(false);
    }
  }, []);

  return (
    <div className="skills-page-container">
      {loading && <div>Loading skills...</div>}
      {error && <div className="error-message">{error}</div>}
      <Skills skills={skills} setSkills={setSkills} />
      <SkillsForm setSkills={setSkills} />
    </div>
  );
};

export default SkillsPage;
