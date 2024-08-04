import { create } from "zustand";
import skillService from "../services/skillService";

const useSkillStore = create((set) => ({
  skills: [],
  fetchSkills: async () => {
    const skills = await skillService.getSkills();
    set({ skills });
  },
  addSkill: async ({ skill }) => {
    const newSkill = await skillService.addSkill(skill);
    set((state) => ({ skills: [...state.skills, newSkill] }));
  },
  updateSkill: async (id, updatedSkill) => {
    const updated = await skillService.updateSkill(id, updatedSkill);
    set((state) => ({
      skills: state.skills.map((skill) => (skill.id === id ? updated : skill)),
    }));
  },
  deleteSkill: async (id) => {
    await skillService.deleteSkill(id);
    set((state) => ({
      skills: state.skills.filter((skill) => skill.id !== id),
    }));
  },
}));

export default useSkillStore;
