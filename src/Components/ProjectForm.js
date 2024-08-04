import React, { useState } from "react";
import axios from "axios";

const ProjectForm = ({ setProjects }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [demoLink, setDemoLink] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [sourceCodeLink, setSourceCodeLink] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

  const API_URL = "https://lucidgrowth-project.onrender.com/projects";
  const email = localStorage.getItem("email");

  const handleButtonClick = () => {
    if (email === "jshobhit3020@gmail.com") {
      setIsFormVisible(true);
    } else {
      alert("You are not authorized to add a project.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("demoLink", demoLink);
    formData.append("technologies", technologies);
    formData.append("sourceCodeLink", sourceCodeLink);
    if (image) formData.append("image", image);

    try {
      const response = await axios.post(API_URL, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setProjects((prevProjects) => [...prevProjects, response.data]);
      setTitle("");
      setDescription("");
      setDemoLink("");
      setTechnologies("");
      setSourceCodeLink("");
      setImage(null);
      setError("");

      alert("Project added successfully");
    } catch (error) {
      console.error("Error adding project:", error);
      alert("Failed to add project");
    }
  };
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
        {!isFormVisible && (
          <button
            onClick={handleButtonClick}
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md
            shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2
            focus:ring-blue-500"
          >
            Add Project
          </button>
        )}

        {isFormVisible && (
          <>
            {/* <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
              Add New Project
            </h2> */}
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="title"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Project Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter project title"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="description"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter project description"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="technologies"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Technologies (comma-separated)
                </label>
                <input
                  type="text"
                  id="technologies"
                  value={technologies}
                  onChange={(e) => setTechnologies(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., React, Node.js, CSS"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="demoLink"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Demo Link
                </label>
                <input
                  type="text"
                  id="demoLink"
                  value={demoLink}
                  onChange={(e) => setDemoLink(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter demo URL"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="sourceCodeLink"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Source Code Link
                </label>
                <input
                  type="text"
                  id="sourceCodeLink"
                  value={sourceCodeLink}
                  onChange={(e) => setSourceCodeLink(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter source code URL"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="image"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Image
                </label>
                <input
                  type="file"
                  id="image"
                  onChange={handleImageChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Upload Image"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-3 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Add Project
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectForm;
