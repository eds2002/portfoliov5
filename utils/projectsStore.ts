import { create } from 'zustand'

export const useProjectsStore = create((set) => ({
  projects: [],
  setProjects: (projects: any) => set(() => ({ projects: [...projects] })),
  selectedProject: 'Home',
  setSelectedProject: (project: string) =>
    set(() => ({ selectedProject: project })),
}))
