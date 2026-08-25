import { useLayoutEffect, useState } from 'react'

export function useSceneSize(sceneShellRef, sceneRatio, isSceneMounted) {
  const [sceneStyle, setSceneStyle] = useState({})

  useLayoutEffect(() => {
    if (!isSceneMounted) return undefined

    const updateSceneSize = () => {
      const shell = sceneShellRef.current
      if (!shell) return

      const shellHeight = shell.clientHeight
      const safetyInset = 24
      const targetHeight = Math.max((shellHeight - safetyInset) * 1.02, 0)
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

    // The shell is created after the loader, so measure on the next frame too.
    updateSceneSize()
    const frameId = window.requestAnimationFrame(updateSceneSize)
    const resizeObserver = new ResizeObserver(updateSceneSize)
    const shell = sceneShellRef.current
    if (shell) resizeObserver.observe(shell)
    window.addEventListener('resize', updateSceneSize)

    return () => {
      window.cancelAnimationFrame(frameId)
      resizeObserver.disconnect()
      window.removeEventListener('resize', updateSceneSize)
    }
  }, [isSceneMounted, sceneRatio, sceneShellRef])

  return sceneStyle
}
