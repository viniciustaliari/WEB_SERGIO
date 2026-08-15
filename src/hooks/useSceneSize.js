import { useEffect, useState } from 'react'

export function useSceneSize(sceneShellRef, sceneRatio) {
  const [sceneStyle, setSceneStyle] = useState({})

  useEffect(() => {
    const updateSceneSize = () => {
      const shell = sceneShellRef.current
      if (!shell) return

      const shellHeight = shell.clientHeight
      const safetyInset = 24
      const targetHeight = Math.max((shellHeight - safetyInset) * 0.97, 0)
      const roundedHeight = Math.round(targetHeight)
      const roundedWidth = Math.round(
        Math.max(800, roundedHeight * sceneRatio, 0),
      )

      setSceneStyle({
        width: `${roundedWidth}px`,
        height: `${roundedHeight}px`,
        marginInline: 'auto',
      })
    }

    updateSceneSize()
    window.addEventListener('resize', updateSceneSize)

    return () => window.removeEventListener('resize', updateSceneSize)
  }, [sceneRatio, sceneShellRef])

  return sceneStyle
}
