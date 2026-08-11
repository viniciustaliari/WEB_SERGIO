import SceneCharacter from './SceneCharacter'
import SceneMenu from './SceneMenu'

export default function SceneArtboard({
  backgroundSrc,
  bird,
  house,
  onBackgroundLoad,
  overlayCharacters,
  superTopCharacters = [],
  topCharacters = [],
  sceneStyle,
  van,
}) {
  return (
    <div
      data-animate="frame"
      className="scene-artboard relative overflow-hidden border-2 border-stone-500"
      style={sceneStyle}
    >
      <img
        src={backgroundSrc}
        alt="Fondo base de la composicion"
        onLoad={onBackgroundLoad}
        className="absolute inset-0 h-full w-full object-fill"
      />

      <div className="scene-status-tag">Web en desarrollo</div>

      <div className="absolute -right-[0.2%] top-0 z-[60]">
        <SceneMenu />
      </div>

      <div className="pointer-events-none absolute inset-0 z-30 overflow-hidden">
        <SceneCharacter {...van} />
      </div>

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <SceneCharacter {...bird} />
      </div>

      <div className="pointer-events-none absolute inset-0 z-50 overflow-visible">
        {superTopCharacters.map((character) => (
          <SceneCharacter key={character.id} {...character} />
        ))}
      </div>

      <div className="scene-overlay absolute inset-0">
        <div className="scene-inner absolute inset-0">
          <div className="absolute inset-0 z-0 overflow-hidden"></div>

          <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
            {overlayCharacters.map((character) => (
              <SceneCharacter key={character.id} {...character} />
            ))}
          </div>

          <div className="pointer-events-none absolute inset-0 z-40 overflow-visible">
            {topCharacters.map((character) => (
              <SceneCharacter key={character.id} {...character} />
            ))}
          </div>

          <div className="pointer-events-none absolute inset-0 z-10">
            <img
              src={house.src}
              alt={house.alt}
              className={house.className}
              style={house.style}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
