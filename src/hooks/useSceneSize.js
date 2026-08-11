import { useEffect, useState } from 'react'

export function useSceneSize(sceneShellRef, sceneRatio) {
  const [sceneStyle, setSceneStyle] = useState({})

  useEffect(() => {
    const updateSceneSize = () => {
      const shell = sceneShellRef.current
      if (!shell) return

      const shellWidth = shell.clientWidth
      const shellHeight = shell.clientHeight
      const safetyInset = 24
      const maxHeight = Math.max(shellHeight - safetyInset, 0)
      const height = maxHeight
      let width = height * sceneRatio

      if (width > shellWidth - safetyInset) {
        width = Math.max(shellWidth - safetyInset, 0)
      }

      width *= 0.97
      const adjustedHeight = width / sceneRatio

      setSceneStyle({
        width: `${Math.max(width, 0)}px`,
        height: `${Math.max(adjustedHeight, 0)}px`,
      })
    }

    updateSceneSize()
    window.addEventListener('resize', updateSceneSize)

    return () => window.removeEventListener('resize', updateSceneSize)
  }, [sceneRatio, sceneShellRef])

  return sceneStyle
}
