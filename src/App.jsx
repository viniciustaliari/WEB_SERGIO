import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import SceneArtboard from './components/SceneArtboard'
import {
  arbolFrames,
  banquitoFrames,
  bibliotecarioFrames,
  birdFrames,
  columpioFrames,
  cuadroFrames,
  grafitiFrames,
  hombreSentadoFrames,
  humoFrames,
  jardineraFrames,
  jardineroFrames,
  lectorFrames,
  mujerSentadaFrames,
  ordenadorFrames,
  parejaFrames,
  personasSillasFrames,
  profeFrames,
  sofaFrames,
  telefonoFrames,
  vanFrames,
} from './data/sceneFrames'
import { useSceneSize } from './hooks/useSceneSize'

function showBubble(bubbleRef) {
  if (!bubbleRef.current) return

  gsap.to(bubbleRef.current, {
    autoAlpha: 1,
    y: 0,
    scale: 1,
    duration: 0.22,
    ease: 'back.out(1.5)',
    overwrite: true,
  })
}

function hideBubble(bubbleRef) {
  if (!bubbleRef.current) return

  gsap.to(bubbleRef.current, {
    autoAlpha: 0,
    y: 10,
    scale: 0.92,
    duration: 0.18,
    ease: 'power2.in',
    overwrite: true,
  })
}

function setBubbleInitialState(bubbleRef) {
  if (!bubbleRef.current) return

  gsap.set(bubbleRef.current, {
    autoAlpha: 0,
    y: 10,
    scale: 0.92,
    transformOrigin: '20% 100%',
  })
}

const staticSceneAssets = [
  '/fondo.jpg',
  '/Casa.png',
  '/Frames/imoviles/personaje_escaleras/persona_1.png',
  '/Frames/imoviles/personajes_fiesta/Fiesta.png',
  '/Frames/imoviles/personaje_microfono/personaje.png',
]

const sceneAssetUrls = [
  ...birdFrames,
  ...vanFrames,
  ...grafitiFrames,
  ...jardineroFrames,
  ...jardineraFrames,
  ...arbolFrames,
  ...ordenadorFrames,
  ...banquitoFrames,
  ...sofaFrames,
  ...bibliotecarioFrames,
  ...cuadroFrames,
  ...telefonoFrames,
  ...parejaFrames,
  ...personasSillasFrames,
  ...lectorFrames,
  ...columpioFrames,
  ...staticSceneAssets,
]

export default function App() {
  const [sceneRatio, setSceneRatio] = useState(2048 / 1152)
  const [isAssetsReady, setIsAssetsReady] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const rootRef = useRef(null)
  const sceneShellRef = useRef(null)

  const birdRef = useRef(null)
  const birdImageRef = useRef(null)

  const vanRef = useRef(null)
  const vanImageRef = useRef(null)
  const vanBubbleRef = useRef(null)
  const vanMoveTweenRef = useRef(null)
  const vanFramesTweenRef = useRef(null)

  const grafitiRef = useRef(null)
  const grafitiImageRef = useRef(null)

  const jardineroRef = useRef(null)
  const jardineroImageRef = useRef(null)
  const jardineroBubbleRef = useRef(null)
  const jardineroTweenRef = useRef(null)

  const jardineraRef = useRef(null)
  const jardineraImageRef = useRef(null)
  const jardineraBubbleRef = useRef(null)
  const jardineraTweenRef = useRef(null)

  const arbolRef = useRef(null)
  const arbolImageRef = useRef(null)
  const arbolTweenRef = useRef(null)

  const ordenadorRef = useRef(null)
  const ordenadorImageRef = useRef(null)
  const ordenadorTweenRef = useRef(null)
  const ordenadorBubbleRef = useRef(null)

  const banquitoRef = useRef(null)
  const banquitoImageRef = useRef(null)
  const banquitoTweenRef = useRef(null)
  const banquitoBubbleRef = useRef(null)

  const sofaRef = useRef(null)
  const sofaImageRef = useRef(null)
  const sofaTweenRef = useRef(null)

  const bibliotecarioRef = useRef(null)
  const bibliotecarioImageRef = useRef(null)
  const bibliotecarioTweenRef = useRef(null)
  const cuadroRef = useRef(null)
  const cuadroImageRef = useRef(null)
  const cuadroTweenRef = useRef(null)
  const telefonoRef = useRef(null)
  const telefonoImageRef = useRef(null)
  const telefonoTweenRef = useRef(null)
  const telefonoMoveTweenRef = useRef(null)
  const telefonoBubbleRef = useRef(null)
  const parejaRef = useRef(null)
  const parejaImageRef = useRef(null)
  const parejaTweenRef = useRef(null)
  const personasSillasRef = useRef(null)
  const personasSillasImageRef = useRef(null)
  const personasSillasTweenRef = useRef(null)
  const lectorRef = useRef(null)
  const lectorImageRef = useRef(null)
  const lectorTweenRef = useRef(null)
  const humoRef = useRef(null)
  const humoImageRef = useRef(null)
  const humoTweenRef = useRef(null)
  const hombreSentadoRef = useRef(null)
  const hombreSentadoImageRef = useRef(null)
  const hombreSentadoTweenRef = useRef(null)
  const hombreSentadoBubbleRef = useRef(null)
  const mujerSentadaRef = useRef(null)
  const mujerSentadaImageRef = useRef(null)
  const mujerSentadaTweenRef = useRef(null)
  const mujerSentadaBubbleRef = useRef(null)
  const profeRef = useRef(null)
  const profeImageRef = useRef(null)
  const profeTweenRef = useRef(null)
  const profeBubbleRef = useRef(null)
  const columpioRef = useRef(null)
  const columpioImageRef = useRef(null)
  const columpioTweenRef = useRef(null)
  const columpioBubbleRef = useRef(null)

  const sceneStyle = useSceneSize(sceneShellRef, sceneRatio)

  const handleVanEnter = () => {
    vanFramesTweenRef.current?.pause()
    vanMoveTweenRef.current?.pause()
    showBubble(vanBubbleRef)
  }

  const handleVanLeave = () => {
    vanFramesTweenRef.current?.resume()
    vanMoveTweenRef.current?.resume()
    hideBubble(vanBubbleRef)
  }

  const handleJardineroEnter = () => {
    jardineroTweenRef.current?.pause()
    showBubble(jardineroBubbleRef)
  }

  const handleJardineroLeave = () => {
    jardineroTweenRef.current?.resume()
    hideBubble(jardineroBubbleRef)
  }

  const handleJardineraEnter = () => {
    jardineraTweenRef.current?.pause()
    showBubble(jardineraBubbleRef)
  }

  const handleJardineraLeave = () => {
    jardineraTweenRef.current?.resume()
    hideBubble(jardineraBubbleRef)
  }

  const handleOrdenadorEnter = () => {
    ordenadorTweenRef.current?.pause()
    showBubble(ordenadorBubbleRef)
  }

  const handleOrdenadorLeave = () => {
    ordenadorTweenRef.current?.resume()
    hideBubble(ordenadorBubbleRef)
  }

  const handleBanquitoEnter = () => {
    banquitoTweenRef.current?.pause()
    showBubble(banquitoBubbleRef)
  }

  const handleBanquitoLeave = () => {
    banquitoTweenRef.current?.resume()
    hideBubble(banquitoBubbleRef)
  }

  const handleTelefonoEnter = () => {
    telefonoTweenRef.current?.pause()
    telefonoMoveTweenRef.current?.pause()
    showBubble(telefonoBubbleRef)
  }

  const handleTelefonoLeave = () => {
    telefonoTweenRef.current?.resume()
    telefonoMoveTweenRef.current?.resume()
    hideBubble(telefonoBubbleRef)
  }

  const handleColumpioEnter = () => {
    columpioTweenRef.current?.pause()
    showBubble(columpioBubbleRef)
  }

  const handleColumpioLeave = () => {
    columpioTweenRef.current?.resume()
    hideBubble(columpioBubbleRef)
  }

  const handleHombreSentadoEnter = () => {
    hombreSentadoTweenRef.current?.pause()
    showBubble(hombreSentadoBubbleRef)
  }

  const handleHombreSentadoLeave = () => {
    hombreSentadoTweenRef.current?.resume()
    hideBubble(hombreSentadoBubbleRef)
  }

  const handleMujerSentadaEnter = () => {
    mujerSentadaTweenRef.current?.pause()
    showBubble(mujerSentadaBubbleRef)
  }

  const handleMujerSentadaLeave = () => {
    mujerSentadaTweenRef.current?.resume()
    hideBubble(mujerSentadaBubbleRef)
  }

  const handleProfeEnter = () => {
    profeTweenRef.current?.pause()
    showBubble(profeBubbleRef)
  }

  const handleProfeLeave = () => {
    profeTweenRef.current?.resume()
    hideBubble(profeBubbleRef)
  }

  const handleBackgroundLoad = (event) => {
    const { naturalWidth, naturalHeight } = event.currentTarget

    if (naturalWidth && naturalHeight) {
      setSceneRatio(naturalWidth / naturalHeight)
    }
  }

  useEffect(() => {
    let isCancelled = false
    const uniqueAssets = [...new Set(sceneAssetUrls)]

    const preloadAssets = async () => {
      let loadedAssets = 0

      const markAssetLoaded = () => {
        loadedAssets += 1

        if (!isCancelled) {
          setLoadingProgress(
            Math.min(
              100,
              Math.round((loadedAssets / uniqueAssets.length) * 100),
            ),
          )
        }
      }

      await Promise.all(
        uniqueAssets.map(
          (src) =>
            new Promise((resolve) => {
              const image = new Image()
              image.onload = () => {
                if (src === '/fondo.jpg' && image.naturalWidth && image.naturalHeight) {
                  setSceneRatio(image.naturalWidth / image.naturalHeight)
                }

                markAssetLoaded()
                resolve()
              }
              image.onerror = () => {
                markAssetLoaded()
                resolve()
              }
              image.src = src

              if (image.complete) {
                if (src === '/fondo.jpg' && image.naturalWidth && image.naturalHeight) {
                  setSceneRatio(image.naturalWidth / image.naturalHeight)
                }

                markAssetLoaded()
                resolve()
              }
            }),
        ),
      )

      if (!isCancelled) {
        setIsAssetsReady(true)
      }
    }

    preloadAssets()

    return () => {
      isCancelled = true
    }
  }, [])

  useEffect(() => {
    if (!isAssetsReady) return

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: 'power2.out' },
      })

      timeline.from('[data-animate="frame"]', {
        opacity: 0,
        scale: 0.985,
        duration: 0.9,
      })

      if (birdRef.current && birdImageRef.current) {
        const birdState = { frame: 0 }
        const totalFrames = birdFrames.length
        const frameDuration = totalFrames / 18

        gsap.set(birdRef.current, {
          xPercent: -100,
          yPercent: -50,
          willChange: 'transform',
        })

        gsap.from(birdRef.current, {
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out',
          delay: 0.2,
        })

        gsap.to(birdState, {
          frame: totalFrames - 1,
          duration: frameDuration,
          ease: `steps(${totalFrames - 1})`,
          repeat: -1,
          onUpdate: () => {
            const frameIndex = Math.round(birdState.frame)
            birdImageRef.current.src = birdFrames[frameIndex]
          },
        })

        gsap.to(birdRef.current, {
          left: '124%',
          duration: 11,
          ease: 'none',
          repeat: -1,
          repeatDelay: 20,
        })

        gsap.to(birdRef.current, {
          yPercent: -54,
          duration: 1.8,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        })
      }

      if (vanRef.current && vanImageRef.current) {
        const vanState = { frame: 0 }
        const totalFrames = vanFrames.length
        const frameDuration = totalFrames / 18

        gsap.set(vanRef.current, {
          xPercent: -50,
          yPercent: -50,
          willChange: 'transform',
        })

        setBubbleInitialState(vanBubbleRef)

        vanFramesTweenRef.current = gsap.to(vanState, {
          frame: totalFrames - 1,
          duration: frameDuration,
          ease: `steps(${totalFrames - 1})`,
          repeat: -1,
          onUpdate: () => {
            const frameIndex = Math.round(vanState.frame)
            vanImageRef.current.src = vanFrames[frameIndex]
          },
        })

        gsap.from(vanRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.out',
          delay: 0.35,
        })

        vanMoveTweenRef.current = gsap.to(vanRef.current, {
          left: '-8%',
          duration: 4.2,
          ease: 'power1.inOut',
          repeat: -1,
          yoyo: true,
          repeatDelay: 3,
        })
      }

      if (grafitiRef.current && grafitiImageRef.current) {
        const grafitiState = { frame: 0 }
        const totalFrames = grafitiFrames.length
        const frameDuration = totalFrames / 4

        gsap.set(grafitiRef.current, {
          xPercent: -50,
          yPercent: -50,
          willChange: 'transform',
        })

        gsap.from(grafitiRef.current, {
          opacity: 0,
          duration: 0.55,
          ease: 'power2.out',
          delay: 0.25,
        })

        gsap.to(grafitiState, {
          frame: totalFrames - 1,
          duration: frameDuration,
          ease: `steps(${totalFrames - 1})`,
          repeat: -1,
          yoyo: true,
          onUpdate: () => {
            const frameIndex = Math.round(grafitiState.frame)
            grafitiImageRef.current.src = grafitiFrames[frameIndex]
          },
        })
      }

      if (jardineroRef.current && jardineroImageRef.current) {
        const jardineroState = { frame: 0 }
        const totalFrames = jardineroFrames.length
        const frameDuration = totalFrames / 6

        gsap.set(jardineroRef.current, {
          xPercent: -50,
          yPercent: -50,
          willChange: 'transform',
        })

        gsap.from(jardineroRef.current, {
          opacity: 0,
          duration: 0.55,
          ease: 'power2.out',
          delay: 0.3,
        })

        setBubbleInitialState(jardineroBubbleRef)

        jardineroTweenRef.current = gsap.to(jardineroState, {
          frame: totalFrames - 1,
          duration: frameDuration,
          ease: `steps(${totalFrames - 1})`,
          repeat: -1,
          yoyo: true,
          onUpdate: () => {
            const frameIndex = Math.round(jardineroState.frame)
            jardineroImageRef.current.src = jardineroFrames[frameIndex]
          },
        })
      }

      if (jardineraRef.current && jardineraImageRef.current) {
        const jardineraState = { frame: 0 }
        const totalFrames = jardineraFrames.length
        const frameDuration = totalFrames / 4

        gsap.set(jardineraRef.current, {
          xPercent: -50,
          yPercent: -50,
          willChange: 'transform',
        })

        gsap.from(jardineraRef.current, {
          opacity: 0,
          duration: 0.55,
          ease: 'power2.out',
          delay: 0.34,
        })

        setBubbleInitialState(jardineraBubbleRef)

        jardineraTweenRef.current = gsap.to(jardineraState, {
          frame: totalFrames - 1,
          duration: frameDuration,
          ease: `steps(${totalFrames - 1})`,
          repeat: -1,
          yoyo: true,
          onUpdate: () => {
            const frameIndex = Math.round(jardineraState.frame)
            jardineraImageRef.current.src = jardineraFrames[frameIndex]
          },
        })
      }

      if (arbolRef.current && arbolImageRef.current) {
        const arbolState = { frame: 0 }
        const totalFrames = arbolFrames.length
        const frameDuration = totalFrames / 2

        gsap.set(arbolRef.current, {
          xPercent: -50,
          yPercent: -50,
          willChange: 'transform',
        })

        gsap.from(arbolRef.current, {
          opacity: 0,
          duration: 0.55,
          ease: 'power2.out',
          delay: 0.22,
        })

        arbolTweenRef.current = gsap.to(arbolState, {
          frame: totalFrames - 1,
          duration: frameDuration,
          ease: `steps(${totalFrames - 1})`,
          repeat: -1,
          yoyo: true,
          onUpdate: () => {
            const frameIndex = Math.round(arbolState.frame)
            arbolImageRef.current.src = arbolFrames[frameIndex]
          },
        })
      }

      if (ordenadorRef.current && ordenadorImageRef.current) {
        const ordenadorState = { frame: 0 }
        const totalFrames = ordenadorFrames.length
        const frameDuration = totalFrames / 3

        gsap.set(ordenadorRef.current, {
          xPercent: -50,
          yPercent: -50,
          willChange: 'transform',
        })

        gsap.from(ordenadorRef.current, {
          opacity: 0,
          duration: 0.55,
          ease: 'power2.out',
          delay: 0.24,
        })

        setBubbleInitialState(ordenadorBubbleRef)

        ordenadorTweenRef.current = gsap.to(ordenadorState, {
          frame: totalFrames - 1,
          duration: frameDuration,
          ease: `steps(${totalFrames - 1})`,
          repeat: -1,
          yoyo: true,
          onUpdate: () => {
            const frameIndex = Math.round(ordenadorState.frame)
            ordenadorImageRef.current.src = ordenadorFrames[frameIndex]
          },
        })
      }

      if (banquitoRef.current && banquitoImageRef.current) {
        const banquitoState = { frame: 0 }
        const totalFrames = banquitoFrames.length
        const frameDuration = totalFrames / 4

        gsap.set(banquitoRef.current, {
          xPercent: -50,
          yPercent: -50,
          willChange: 'transform',
        })

        gsap.from(banquitoRef.current, {
          opacity: 0,
          duration: 0.55,
          ease: 'power2.out',
          delay: 0.26,
        })

        setBubbleInitialState(banquitoBubbleRef)

        banquitoTweenRef.current = gsap.to(banquitoState, {
          frame: totalFrames - 1,
          duration: frameDuration,
          ease: `steps(${totalFrames - 1})`,
          repeat: -1,
          yoyo: true,
          onUpdate: () => {
            const frameIndex = Math.round(banquitoState.frame)
            banquitoImageRef.current.src = banquitoFrames[frameIndex]
          },
        })
      }

      if (sofaRef.current && sofaImageRef.current) {
        const sofaState = { frame: 0 }
        const totalFrames = sofaFrames.length
        const frameDuration = totalFrames / 3

        gsap.set(sofaRef.current, {
          xPercent: -50,
          yPercent: -50,
          willChange: 'transform',
        })

        gsap.from(sofaRef.current, {
          opacity: 0,
          duration: 0.55,
          ease: 'power2.out',
          delay: 0.28,
        })

        sofaTweenRef.current = gsap.to(sofaState, {
          frame: totalFrames - 1,
          duration: frameDuration,
          ease: `steps(${totalFrames - 1})`,
          repeat: -1,
          yoyo: true,
          onUpdate: () => {
            const frameIndex = Math.round(sofaState.frame)
            sofaImageRef.current.src = sofaFrames[frameIndex]
          },
        })
      }

      if (bibliotecarioRef.current && bibliotecarioImageRef.current) {
        const bibliotecarioState = { frame: 0 }
        const totalFrames = bibliotecarioFrames.length
        const frameDuration = totalFrames / 3

        gsap.set(bibliotecarioRef.current, {
          xPercent: -50,
          yPercent: -50,
          willChange: 'transform',
        })

        gsap.from(bibliotecarioRef.current, {
          opacity: 0,
          duration: 0.55,
          ease: 'power2.out',
          delay: 0.3,
        })

        bibliotecarioTweenRef.current = gsap.to(bibliotecarioState, {
          frame: totalFrames - 1,
          duration: frameDuration,
          ease: `steps(${totalFrames - 1})`,
          repeat: -1,
          yoyo: true,
          onUpdate: () => {
            const frameIndex = Math.round(bibliotecarioState.frame)
            bibliotecarioImageRef.current.src =
              bibliotecarioFrames[frameIndex]
          },
        })
      }

      if (cuadroRef.current && cuadroImageRef.current) {
        const cuadroState = { frame: 0 }
        const totalFrames = cuadroFrames.length
        const frameDuration = totalFrames / 4

        gsap.set(cuadroRef.current, {
          xPercent: -50,
          yPercent: -50,
          willChange: 'transform',
        })

        gsap.from(cuadroRef.current, {
          opacity: 0,
          duration: 0.55,
          ease: 'power2.out',
          delay: 0.32,
        })

        cuadroTweenRef.current = gsap.to(cuadroState, {
          frame: totalFrames - 1,
          duration: frameDuration,
          ease: `steps(${totalFrames - 1})`,
          repeat: -1,
          yoyo: true,
          onUpdate: () => {
            const frameIndex = Math.round(cuadroState.frame)
            cuadroImageRef.current.src = cuadroFrames[frameIndex]
          },
        })
      }

      if (telefonoRef.current && telefonoImageRef.current) {
        const telefonoState = { frame: 0 }
        const totalFrames = telefonoFrames.length
        const frameDuration = totalFrames / 4

        gsap.set(telefonoRef.current, {
          xPercent: -50,
          yPercent: -50,
          willChange: 'transform',
        })

        gsap.from(telefonoRef.current, {
          opacity: 0,
          duration: 0.55,
          ease: 'power2.out',
          delay: 0.34,
        })

        setBubbleInitialState(telefonoBubbleRef)

        telefonoTweenRef.current = gsap.to(telefonoState, {
          frame: totalFrames - 1,
          duration: frameDuration,
          ease: `steps(${totalFrames - 1})`,
          repeat: -1,
          yoyo: true,
          onUpdate: () => {
            const frameIndex = Math.round(telefonoState.frame)
            telefonoImageRef.current.src = telefonoFrames[frameIndex]
          },
        })

        telefonoMoveTweenRef.current = gsap.to(telefonoRef.current, {
          yPercent: -54,
          xPercent: -48.5,
          duration: 0.42,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          repeatDelay: 10,
        })
      }

      if (parejaRef.current && parejaImageRef.current) {
        const parejaState = { frame: 0 }
        const totalFrames = parejaFrames.length
        const frameDuration = totalFrames / 3

        gsap.set(parejaRef.current, {
          xPercent: -50,
          yPercent: -50,
          willChange: 'transform',
        })

        gsap.from(parejaRef.current, {
          opacity: 0,
          duration: 0.55,
          ease: 'power2.out',
          delay: 0.36,
        })

        parejaTweenRef.current = gsap.to(parejaState, {
          frame: totalFrames - 1,
          duration: frameDuration,
          ease: `steps(${totalFrames - 1})`,
          repeat: -1,
          yoyo: true,
          onUpdate: () => {
            const frameIndex = Math.round(parejaState.frame)
            parejaImageRef.current.src = parejaFrames[frameIndex]
          },
        })
      }

      if (personasSillasRef.current && personasSillasImageRef.current) {
        const personasSillasState = { frame: 0 }
        const totalFrames = personasSillasFrames.length
        const frameDuration = totalFrames / 6

        gsap.set(personasSillasRef.current, {
          xPercent: -50,
          yPercent: -50,
          willChange: 'transform',
        })

        gsap.from(personasSillasRef.current, {
          opacity: 0,
          duration: 0.55,
          ease: 'power2.out',
          delay: 0.38,
        })

        personasSillasTweenRef.current = gsap.to(personasSillasState, {
          frame: totalFrames - 1,
          duration: frameDuration,
          ease: `steps(${totalFrames - 1})`,
          repeat: -1,
          yoyo: true,
          onUpdate: () => {
            const frameIndex = Math.round(personasSillasState.frame)
            personasSillasImageRef.current.src =
              personasSillasFrames[frameIndex]
          },
        })
      }

      if (lectorRef.current && lectorImageRef.current) {
        const lectorState = { frame: 0 }
        const totalFrames = lectorFrames.length
        const frameDuration = totalFrames / 1

        gsap.set(lectorRef.current, {
          xPercent: -50,
          yPercent: -50,
          willChange: 'transform',
        })

        gsap.from(lectorRef.current, {
          opacity: 0,
          duration: 0.55,
          ease: 'power2.out',
          delay: 0.4,
        })

        lectorTweenRef.current = gsap.to(lectorState, {
          frame: totalFrames - 1,
          duration: frameDuration,
          ease: `steps(${totalFrames - 1})`,
          repeat: -1,
          yoyo: true,
          onUpdate: () => {
            const frameIndex = Math.round(lectorState.frame)
            lectorImageRef.current.src = lectorFrames[frameIndex]
          },
        })
      }

      if (humoRef.current && humoImageRef.current) {
        const humoState = { frame: 0 }
        const totalFrames = humoFrames.length
        const frameDuration = totalFrames / 4

        gsap.set(humoRef.current, {
          xPercent: -50,
          yPercent: -50,
          willChange: 'transform',
        })

        gsap.from(humoRef.current, {
          opacity: 0,
          duration: 0.55,
          ease: 'power2.out',
          delay: 0.403,
        })

        humoTweenRef.current = gsap.to(humoState, {
          frame: totalFrames - 1,
          duration: frameDuration,
          ease: `steps(${totalFrames - 1})`,
          repeat: -1,
          onUpdate: () => {
            const frameIndex = Math.round(humoState.frame)
            humoImageRef.current.src = humoFrames[frameIndex]
          },
        })
      }

      if (hombreSentadoRef.current && hombreSentadoImageRef.current) {
        const hombreSentadoState = { frame: 0 }
        const totalFrames = hombreSentadoFrames.length
        const frameDuration = totalFrames / 3

        gsap.set(hombreSentadoRef.current, {
          xPercent: -50,
          yPercent: -50,
          willChange: 'transform',
        })

        gsap.from(hombreSentadoRef.current, {
          opacity: 0,
          duration: 0.55,
          ease: 'power2.out',
          delay: 0.405,
        })

        setBubbleInitialState(hombreSentadoBubbleRef)

        hombreSentadoTweenRef.current = gsap.to(hombreSentadoState, {
          frame: totalFrames - 1,
          duration: frameDuration,
          ease: `steps(${totalFrames - 1})`,
          repeat: -1,
          yoyo: true,
          onUpdate: () => {
            const frameIndex = Math.round(hombreSentadoState.frame)
            hombreSentadoImageRef.current.src =
              hombreSentadoFrames[frameIndex]
          },
        })
      }

      if (mujerSentadaRef.current && mujerSentadaImageRef.current) {
        const mujerSentadaState = { frame: 0 }
        const totalFrames = mujerSentadaFrames.length
        const frameDuration = totalFrames / 4

        gsap.set(mujerSentadaRef.current, {
          xPercent: -50,
          yPercent: -50,
          willChange: 'transform',
        })

        gsap.from(mujerSentadaRef.current, {
          opacity: 0,
          duration: 0.55,
          ease: 'power2.out',
          delay: 0.408,
        })

        setBubbleInitialState(mujerSentadaBubbleRef)

        mujerSentadaTweenRef.current = gsap.to(mujerSentadaState, {
          frame: totalFrames - 1,
          duration: frameDuration,
          ease: `steps(${totalFrames - 1})`,
          repeat: -1,
          yoyo: true,
          onUpdate: () => {
            const frameIndex = Math.round(mujerSentadaState.frame)
            mujerSentadaImageRef.current.src =
              mujerSentadaFrames[frameIndex]
          },
        })
      }

      if (profeRef.current && profeImageRef.current) {
        const profeState = { frame: 0 }
        const totalFrames = profeFrames.length
        const frameDuration = totalFrames / 4

        gsap.set(profeRef.current, {
          xPercent: -50,
          yPercent: -50,
          willChange: 'transform',
        })

        gsap.from(profeRef.current, {
          opacity: 0,
          duration: 0.55,
          ease: 'power2.out',
          delay: 0.41,
        })

        setBubbleInitialState(profeBubbleRef)

        profeTweenRef.current = gsap.to(profeState, {
          frame: totalFrames - 1,
          duration: frameDuration,
          ease: `steps(${totalFrames - 1})`,
          repeat: -1,
          yoyo: true,
          onUpdate: () => {
            const frameIndex = Math.round(profeState.frame)
            profeImageRef.current.src = profeFrames[frameIndex]
          },
        })
      }

      if (columpioRef.current && columpioImageRef.current) {
        const columpioState = { frame: 0 }
        const totalFrames = columpioFrames.length
        const frameDuration = totalFrames / 5

        gsap.set(columpioRef.current, {
          xPercent: -50,
          yPercent: -50,
          willChange: 'transform',
        })

        gsap.from(columpioRef.current, {
          opacity: 0,
          duration: 0.55,
          ease: 'power2.out',
          delay: 0.42,
        })

        setBubbleInitialState(columpioBubbleRef)

        columpioTweenRef.current = gsap.to(columpioState, {
          frame: totalFrames - 1,
          duration: frameDuration,
          ease: `steps(${totalFrames - 1})`,
          repeat: -1,
          yoyo: true,
          onUpdate: () => {
            const frameIndex = Math.round(columpioState.frame)
            columpioImageRef.current.src = columpioFrames[frameIndex]
          },
        })
      }
    }, rootRef)

    return () => {
      vanMoveTweenRef.current = null
      vanFramesTweenRef.current = null
      jardineroTweenRef.current = null
      jardineraTweenRef.current = null
      arbolTweenRef.current = null
      ordenadorTweenRef.current = null
      banquitoTweenRef.current = null
      sofaTweenRef.current = null
      bibliotecarioTweenRef.current = null
      cuadroTweenRef.current = null
      telefonoTweenRef.current = null
      telefonoMoveTweenRef.current = null
      parejaTweenRef.current = null
      personasSillasTweenRef.current = null
      lectorTweenRef.current = null
      humoTweenRef.current = null
      hombreSentadoTweenRef.current = null
      mujerSentadaTweenRef.current = null
      profeTweenRef.current = null
      columpioTweenRef.current = null
      ctx.revert()
    }
  }, [isAssetsReady])

  const bubbleInteriorText = 'Dise\u00f1o de interiores'

  const overlayCharacters = [
    {
      id: 'banquito',
      ref: banquitoRef,
      anchorClassName: 'banquito-anchor',
      bubbleRef: banquitoBubbleRef,
      bubbleText: bubbleInteriorText,
      imageClassName: 'banquito-frame',
      imageRef: banquitoImageRef,
      interactive: true,
      onPointerEnter: handleBanquitoEnter,
      onPointerLeave: handleBanquitoLeave,
      src: banquitoFrames[0],
      alt: 'Banquito animado',
      style: { left: '63%', top: '52.5%', width: '6.6%' },
    },
    {
      id: 'ordenador',
      ref: ordenadorRef,
      anchorClassName: 'ordenador-anchor',
      bubbleRef: ordenadorBubbleRef,
      bubbleText: bubbleInteriorText,
      imageClassName: 'ordenador-frame',
      imageRef: ordenadorImageRef,
      interactive: true,
      onPointerEnter: handleOrdenadorEnter,
      onPointerLeave: handleOrdenadorLeave,
      src: ordenadorFrames[0],
      alt: 'Ordenador animado',
      style: { left: '57%', top: '52.5%', width: '6.5%' },
    },
    {
      id: 'arbol',
      ref: arbolRef,
      anchorClassName: 'arbol-anchor',
      imageClassName: 'arbol-frame',
      imageRef: arbolImageRef,
      src: arbolFrames[0],
      alt: 'Arbol animado',
      style: { left: '89%', top: '67%', width: '24%' },
    },
    {
      id: 'grafiti',
      ref: grafitiRef,
      anchorClassName: 'grafiti-anchor',
      imageClassName: 'grafiti-frame',
      imageRef: grafitiImageRef,
      src: grafitiFrames[0],
      alt: 'Grafiti animado',
      style: { left: '44%', top: '16.9%', width: '5.8%' },
    },
    {
      id: 'bibliotecario',
      ref: bibliotecarioRef,
      anchorClassName: 'bibliotecario-anchor',
      imageClassName: 'bibliotecario-frame',
      imageRef: bibliotecarioImageRef,
      src: bibliotecarioFrames[0],
      alt: 'Bibliotecario animado',
      style: { left: '42.8%', top: '40.1%', width: '8.5%' },
    },
    {
      id: 'cuadro',
      ref: cuadroRef,
      anchorClassName: 'cuadro-anchor',
      imageClassName: 'cuadro-frame',
      imageRef: cuadroImageRef,
      src: cuadroFrames[0],
      alt: 'Cuadro animado',
      style: { left: '48%', top: '44%', width: '10%' },
    },
    {
      id: 'sofa',
      ref: sofaRef,
      anchorClassName: 'sofa-anchor',
      imageClassName: 'sofa-frame',
      imageRef: sofaImageRef,
      src: sofaFrames[0],
      alt: 'Sofa animado',
      style: { left: '42%', top: '56.1%', width: '10%' },
    },
    {
      id: 'jardinero',
      ref: jardineroRef,
      anchorClassName: 'jardinero-anchor',
      bubbleRef: jardineroBubbleRef,
      bubbleText: 'Paisajismo y ajardinamiento',
      imageClassName: 'jardinero-frame',
      imageRef: jardineroImageRef,
      interactive: true,
      onPointerEnter: handleJardineroEnter,
      onPointerLeave: handleJardineroLeave,
      src: jardineroFrames[0],
      alt: 'Jardinero animado',
      style: { left: '64.5%', top: '24%', width: '12.8%' },
    },
    {
      id: 'jardinera',
      ref: jardineraRef,
      anchorClassName: 'jardinera-anchor',
      bubbleRef: jardineraBubbleRef,
      bubbleText: 'Paisajismo y ajardinamiento',
      imageClassName: 'jardinera-frame',
      imageRef: jardineraImageRef,
      interactive: true,
      onPointerEnter: handleJardineraEnter,
      onPointerLeave: handleJardineraLeave,
      src: jardineraFrames[0],
      alt: 'Jardinera animada',
      style: { left: '58%', top: '28.9%', width: '6.9%' },
    },
  ]

  const topCharacters = [
    {
      id: 'persona-escaleras',
      anchorClassName: 'persona-escaleras-anchor',
      imageClassName: 'persona-escaleras-frame',
      src: '/Frames/imoviles/personaje_escaleras/persona_1.png',
      alt: 'Persona en las escaleras',
      style: { left: '67.3%', top: '94%', width: '4%' },
    },
    {
      id: 'personajes-fiesta',
      anchorClassName: 'personajes-fiesta-anchor',
      imageClassName: 'personajes-fiesta-frame',
      src: '/Frames/imoviles/personajes_fiesta/Fiesta.png',
      alt: 'Personajes de fiesta',
      style: { left: '29%', top: '64.5%', width: '7%' },
    },
    {
      id: 'maleta',
      anchorClassName: 'maleta-anchor',
      imageClassName: 'maleta-frame',
      src: '/Frames/imoviles/maleta/maleta.png',
      alt: 'Maleta',
      style: { left: '25.5%', top: '73.5%', width: '3.1%' },
    },
    {
      id: 'fumador',
      anchorClassName: 'fumador-anchor',
      imageClassName: 'fumador-frame',
      src: '/Frames/imoviles/fumador/fumador.png',
      alt: 'Fumador',
      style: { left: '29%', top: '28.5%', width: '4%' },
    },
    {
      id: 'telefono',
      ref: telefonoRef,
      anchorClassName: 'telefono-anchor',
      bubbleRef: telefonoBubbleRef,
      bubbleText: 'Contactar',
      imageClassName: 'telefono-frame',
      imageRef: telefonoImageRef,
      interactive: true,
      onPointerEnter: handleTelefonoEnter,
      onPointerLeave: handleTelefonoLeave,
      src: telefonoFrames[0],
      alt: 'Telefono animado',
      style: { left: '66.2%', top: '99.5%', width: '2.7%' },
    },
  ]

  const superTopCharacters = [
    {
      id: 'pareja',
      ref: parejaRef,
      anchorClassName: 'pareja-anchor',
      imageClassName: 'pareja-frame',
      imageRef: parejaImageRef,
      src: parejaFrames[0],
      alt: 'Pareja animada',
      style: { left: '65.5%', top: '67%', width: '8%' },
    },
    {
      id: 'personaje-microfono',
      anchorClassName: 'personaje-microfono-anchor',
      imageClassName: 'personaje-microfono-frame',
      src: '/Frames/imoviles/personaje_microfono/personaje.png',
      alt: 'Personaje con microfono',
      style: { left: '54.4%', top: '59.8%', width: '5.5%' },
    },
    {
      id: 'tablero',
      anchorClassName: 'tablero-anchor',
      imageClassName: 'tablero-frame',
      src: '/Frames/imoviles/tablero/tablero.png',
      alt: 'Tablero',
      style: { left: '33.4%', top: '72.2%', width: '4.8%', zIndex: 120 },
    },
    {
      id: 'humo',
      ref: humoRef,
      anchorClassName: 'humo-anchor',
      imageClassName: 'humo-frame',
      imageRef: humoImageRef,
      src: humoFrames[0],
      alt: 'Humo animado',
      style: { left: '35%', top: '27%', width: '3%' },
    },
    {
      id: 'personas-sillas',
      ref: personasSillasRef,
      anchorClassName: 'personas-sillas-anchor',
      imageClassName: 'personas-sillas-frame',
      imageRef: personasSillasImageRef,
      src: personasSillasFrames[0],
      alt: 'Personas en sillas animadas',
      style: { left: '56%', top: '70.2%', width: '6%' },
    },
    {
      id: 'lector',
      ref: lectorRef,
      anchorClassName: 'lector-anchor',
      imageClassName: 'lector-frame',
      imageRef: lectorImageRef,
      src: lectorFrames[0],
      alt: 'Lector animado',
      style: { left: '46%', top: '66%', width: '5.2%' },
    },
    {
      id: 'hombre-sentado',
      ref: hombreSentadoRef,
      anchorClassName: 'hombre-sentado-anchor',
      bubbleRef: hombreSentadoBubbleRef,
      bubbleText: 'Academia',
      imageClassName: 'hombre-sentado-frame',
      imageRef: hombreSentadoImageRef,
      interactive: true,
      onPointerEnter: handleHombreSentadoEnter,
      onPointerLeave: handleHombreSentadoLeave,
      src: hombreSentadoFrames[0],
      alt: 'Hombre sentado animado',
      style: { left: '38%', top: '78.2%', width: '6.6%' },
    },
    {
      id: 'mujer-sentada',
      ref: mujerSentadaRef,
      anchorClassName: 'mujer-sentada-anchor',
      bubbleRef: mujerSentadaBubbleRef,
      bubbleText: 'Academia',
      imageClassName: 'mujer-sentada-frame',
      imageRef: mujerSentadaImageRef,
      interactive: true,
      onPointerEnter: handleMujerSentadaEnter,
      onPointerLeave: handleMujerSentadaLeave,
      src: mujerSentadaFrames[0],
      alt: 'Mujer sentada animada',
      style: { left: '34%', top: '79%', width: '5.7%', zIndex: 130 },
    },
    {
      id: 'profe',
      ref: profeRef,
      anchorClassName: 'profe-anchor',
      bubbleRef: profeBubbleRef,
      bubbleText: 'Academia',
      imageClassName: 'profe-frame',
      imageRef: profeImageRef,
      interactive: true,
      onPointerEnter: handleProfeEnter,
      onPointerLeave: handleProfeLeave,
      src: profeFrames[0],
      alt: 'Profe animado',
      style: { left: '46%', top: '77.8%', width: '7%' },
    },
    {
      id: 'columpio',
      ref: columpioRef,
      anchorClassName: 'columpio-anchor',
      bubbleRef: columpioBubbleRef,
      bubbleText: 'Escenografía',
      imageClassName: 'columpio-frame',
      imageRef: columpioImageRef,
      interactive: true,
      onPointerEnter: handleColumpioEnter,
      onPointerLeave: handleColumpioLeave,
      src: columpioFrames[0],
      alt: 'Columpio animado',
      style: { left: '70%', top: '52.2%', width: '19.8%' },
    },
  ]

  const vanCharacter = {
    ref: vanRef,
    anchorClassName: 'van-anchor',
    bubbleClassName: 'van-dialogue',
    bubbleRef: vanBubbleRef,
    bubbleText: 'direccion de arte',
    imageClassName: 'van-frame',
    imageRef: vanImageRef,
    interactive: true,
    onPointerEnter: handleVanEnter,
    onPointerLeave: handleVanLeave,
    src: vanFrames[0],
    alt: 'Furgo animada',
    style: { left: '20%', top: '77.5%', width: '16%' },
  }

  const birdCharacter = {
    ref: birdRef,
    anchorClassName: 'bird-anchor',
    imageClassName: 'bird-frame',
    imageRef: birdImageRef,
    src: birdFrames[0],
    alt: 'Pajaro animado',
    style: { left: '-16%', top: '28%', width: '20%' },
  }

  const houseLayer = {
    src: '/Casa.png',
    alt: 'Capa central de la casa',
    className: 'absolute left-1/2 top-1/2 w-full object-contain',
    style: {
      left: '50%',
      top: '57.4%',
      width: '100%',
      transform: 'translate(-50%, -50%) scale(1.17)',
    },
  }

  return (
    <main
      ref={rootRef}
      className="flex h-screen items-center justify-center overflow-hidden bg-white p-8"
    >
      {isAssetsReady ? (
        <section ref={sceneShellRef} className="scene-shell">
          <SceneArtboard
            backgroundSrc="/fondo.jpg"
            bird={birdCharacter}
            house={houseLayer}
            onBackgroundLoad={handleBackgroundLoad}
            overlayCharacters={overlayCharacters}
            sceneStyle={sceneStyle}
            superTopCharacters={superTopCharacters}
            topCharacters={topCharacters}
            van={vanCharacter}
          />
        </section>
      ) : (
        <div className="scene-loader" aria-live="polite">
          <div className="scene-loader-frame">
            <p className="scene-loader-kicker">Loading scene</p>
            <div className="scene-loader-number">
              {String(loadingProgress).padStart(2, '0')}
            </div>
            <div className="scene-loader-track">
              <div
                className="scene-loader-bar"
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
            <p className="scene-loader-text">Web en desarrollo</p>
          </div>
        </div>
      )}
    </main>
  )
}
