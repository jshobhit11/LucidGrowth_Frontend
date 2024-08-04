import axios from "axios";

const API_URL = "https://lucidgrowth-project.onrender.com/experiences";

const getExperiences = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const addExperience = async (experience) => {
  const response = await axios.post(API_URL, experience);
  return response.data;
};

const updateExperience = async (id, experience) => {
  const response = await axios.put(`${API_URL}/${id}`, experience);
  return response.data;
};

const deleteExperience = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

export default {
  getExperiences,
  addExperience,
  updateExperience,
  deleteExperience,
};
