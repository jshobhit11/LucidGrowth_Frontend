import axios from "axios";

const API_URL = "https://lucidgrowth-project.onrender.com/skills";

const getSkills = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addSkill = async (skill) => {
  const response = await axios.post(API_URL, skill);
  return response.data;
};

export const updateSkill = async (id, skill) => {
  const response = await axios.put(`${API_URL}/${id}`, skill);
  return response.data;
};

export const deleteSkill = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

export default {
  getSkills,
  addSkill,
  updateSkill,
  deleteSkill,
};
