import { create } from "zustand";
import experienceService from "../services/experienceService";

const useExperienceStore = create((set) => ({
  experiences: [],
  fetchExperiences: async () => {
    const experiences = await experienceService.getExperiences();
    set({ experiences });
  },
  addExperience: async (experience) => {
    const newExperience = await experienceService.addExperience(experience);
    set((state) => ({ experiences: [...state.experiences, newExperience] }));
  },
  updateExperience: async (id, updatedExperience) => {
    const updated = await experienceService.updateExperience(
      id,
      updatedExperience
    );
    set((state) => ({
      experiences: state.experiences.map((experience) =>
        experience.id === id ? updated : experience
      ),
    }));
  },
  deleteExperience: async (id) => {
    await experienceService.deleteExperience(id);
    set((state) => ({
      experiences: state.experiences.filter(
        (experience) => experience.id !== id
      ),
    }));
  },
}));

export default useExperienceStore;
