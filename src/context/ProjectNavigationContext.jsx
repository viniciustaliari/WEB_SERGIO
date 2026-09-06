import { createContext, useCallback, useContext, useRef } from 'react'

const ProjectNavigationContext = createContext(null)

export function ProjectNavigationProvider({ children }) {
  const navigateRef = useRef(null)

  const registerNavigate = useCallback((navigate) => {
    navigateRef.current = navigate
  }, [])

  const navigateToProjects = useCallback((filterId) => {
    navigateRef.current?.({ pageId: 'projects', filterId })
  }, [])

  const navigateToPage = useCallback((pageId) => {
    navigateRef.current?.(pageId)
  }, [])

  return (
    <ProjectNavigationContext.Provider value={{ navigateToPage, navigateToProjects, registerNavigate }}>
      {children}
    </ProjectNavigationContext.Provider>
  )
}

export function useProjectNavigation() {
  const context = useContext(ProjectNavigationContext)

  if (!context) {
    throw new Error('useProjectNavigation must be used within ProjectNavigationProvider')
  }

  return context
}
