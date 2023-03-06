import React, { createContext, useEffect, useState } from 'react'

interface props {
  projects: string | null
  setProjects: (val: string) => void
}
export const ProjectsContext = createContext<props>({} as any)

export default function AccountsProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [projects, setProjects] = useState<any>([])

  useEffect(() => {
    if (localStorage.getItem('storedAccounts')) {
      const storedDataRef = localStorage.getItem('storedAccounts')
      setProjects(JSON.parse(storedDataRef as string))
    }
  }, [])

  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  )
}
