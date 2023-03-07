import React, { createContext, useEffect, useState } from 'react'
import { Project } from '../interfaces'

interface props {
  projects: Project[]
  setProjects: (val: Project[]) => void
}
export const ProjectsContext = createContext<props>({} as any)

export default function AccountsProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [projects, setProjects] = useState<Project[]>([])
  return (
    <ProjectsContext.Provider value={{ projects, setProjects } as any}>
      {children}
    </ProjectsContext.Provider>
  )
}
