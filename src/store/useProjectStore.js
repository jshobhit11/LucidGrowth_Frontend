import { create } from "zustand";
import projectService from "../services/ProjectService";
const useProjectStore = create((set) => ({
  projects: [],
  fetchProjects: async () => {
    const projects = await projectService.getProjects();
    set({ projects });
  },
  addProject: async (project) => {
    const newProject = await projectService.addProject(project);
    set((state) => ({ projects: [...state.projects, newProject] }));
  },
  updateProject: async (id, updatedProject) => {
    const updated = await projectService.updateProject(id, updatedProject);
    set((state) => ({
      projects: state.projects.map((project) =>
        project.id === id ? updated : project
      ),
    }));
  },
  deleteProject: async (id) => {
    await projectService.deleteProject(id);
    set((state) => ({
      projects: state.projects.filter((project) => project.id !== id),
    }));
  },
}));

export default useProjectStore;
