import React from "react";
import photo2 from "../Assets/Images/photo2.JPG";

const Home = () => {
  return (
    <div className="home bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg max-w-2xl mx-auto">
        <h1 className="text-5xl font-extrabold text-blue-600 mb-6">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Hi, I'm Shobhit Jain, an aspiring software developer with expertise in
          building dynamic and responsive web applications. My portfolio
          showcases a selection of my projects, skills, addExperience
          experiences. Dive in to explore my journey and the work I've done.
        </p>
        <div className="mt-6">
          <img
            src={photo2}
            alt="Profile"
            className="mx-auto rounded-full shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
