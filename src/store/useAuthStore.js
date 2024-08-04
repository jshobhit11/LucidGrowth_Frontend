import { create } from "zustand";

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: (auth) => set({ isAuthenticated: auth }),
}));

export default useAuthStore;
