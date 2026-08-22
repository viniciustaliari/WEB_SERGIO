import SceneCharacter from './SceneCharacter'
import SceneHotspot from './SceneHotspot'
import SceneMenu from './SceneMenu'

export default function SceneArtboard({
  backgroundSrc,
  bird,
  cartela,
  house,
  onNavigate,
  onBackgroundLoad,
  overlayCharacters,
  hotspots = [],
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
        className="scene-background absolute inset-0 h-full w-full object-fill"
      />

      <div className="pointer-events-none absolute inset-0 z-[110]">
        <SceneMenu onNavigate={onNavigate} />
      </div>

      <div className="scene-character-layer pointer-events-none absolute inset-0 z-30 overflow-hidden">
        <SceneCharacter {...van} />
      </div>

      <div className="scene-character-layer pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <SceneCharacter {...bird} />
      </div>

      <div className="scene-character-layer pointer-events-none absolute inset-0 z-50 overflow-visible">
        {superTopCharacters.map((character) => (
          <SceneCharacter key={character.id} {...character} />
        ))}
      </div>

      {cartela ? (
        <div className="pointer-events-none absolute inset-0 z-[55] overflow-visible">
          <img
            src={cartela.src}
            alt={cartela.alt}
            className={cartela.className}
            style={cartela.style}
          />
        </div>
      ) : null}

      <div className="scene-hotspots-layer absolute inset-0">
        {hotspots.map((hotspot) => (
          <SceneHotspot key={hotspot.id} {...hotspot} />
        ))}
      </div>

      <div className="scene-overlay absolute inset-0">
        <div className="scene-inner absolute inset-0">
          <div className="absolute inset-0 z-0 overflow-hidden"></div>

          <div className="scene-character-layer pointer-events-none absolute inset-0 z-20 overflow-hidden">
            {overlayCharacters.map((character) => (
              <SceneCharacter key={character.id} {...character} />
            ))}
          </div>

          <div className="scene-character-layer pointer-events-none absolute inset-0 z-40 overflow-visible">
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
