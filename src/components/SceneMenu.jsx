import { useState } from 'react'

const primaryItems = [
  { label: '1. DISENO DE INTERIORES' },
  { label: '2. PAISAJISMO' },
  { label: '3. ESCENOGRAFIA' },
  { label: '4. DISENO GRAFICO' },
  { label: '5. DIRECCION DE ARTE' },
  { label: '6. ACADEMIA' },
  { label: 'PROYECTOS', pageId: 'projects' },
  { label: 'TIENDA ONLINE', pageId: 'shop' },
]

const secondaryItems = [
  { label: 'PROYECTOS', pageId: 'projects' },
  { label: 'CONTACTO', pageId: 'contact' },
  { label: 'ESTUDIO', pageId: 'studio' },
]

export default function SceneMenu({ onNavigate }) {
  const [isOpen, setIsOpen] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(false)
  const [isSpanish, setIsSpanish] = useState(false)

  return (
    <div className="scene-menu">
      <button
        type="button"
        className={`scene-menu-button${isOpen ? ' is-open' : ''}`}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Cerrar menu' : 'Abrir menu'}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {isOpen ? (
        <div className="scene-menu-panel">
          <button
            type="button"
            className="scene-menu-close"
            aria-label="Cerrar menu"
            onClick={() => setIsOpen(false)}
          >
            <span></span>
            <span></span>
          </button>

          <div className="scene-menu-group scene-menu-group-primary">
            {primaryItems.map((item) => (
              <button
                key={item.label}
                type="button"
                className="scene-menu-item"
                onClick={() => {
                  if (item.pageId) {
                    onNavigate?.(item.pageId)
                    setIsOpen(false)
                  }
                }}
              >
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="scene-menu-group scene-menu-group-secondary">
            {secondaryItems.map((item) => (
              <button
                key={item.label}
                type="button"
                className="scene-menu-item"
                onClick={() => {
                  if (item.pageId) {
                    onNavigate?.(item.pageId)
                    setIsOpen(false)
                  }
                }}
              >
                <span>{item.label}</span>
              </button>
            ))}

            <div className="scene-menu-switch-row">
              <span className="scene-menu-switch-label">SONIDO</span>
              <div className="scene-menu-switch" role="group" aria-label="Sonido">
                <button
                  type="button"
                  className={`scene-menu-switch-option${soundEnabled ? ' is-active' : ''}`}
                  aria-pressed={soundEnabled}
                  onClick={() => setSoundEnabled(true)}
                >
                  SI
                </button>
                <span className="scene-menu-switch-separator">/</span>
                <button
                  type="button"
                  className={`scene-menu-switch-option${!soundEnabled ? ' is-active' : ''}`}
                  aria-pressed={!soundEnabled}
                  onClick={() => setSoundEnabled(false)}
                >
                  NO
                </button>
              </div>
            </div>
          </div>

          <div className="scene-menu-footer">
            <div className="scene-menu-socials">
              <span aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.94 8.5H3.56V19.5H6.94V8.5ZM5.25 3C4.17 3 3.5 3.72 3.5 4.66C3.5 5.58 4.15 6.31 5.21 6.31H5.23C6.34 6.31 7.02 5.58 7.02 4.66C7 3.72 6.34 3 5.25 3ZM20.5 13.19C20.5 9.81 18.69 8.24 16.28 8.24C14.34 8.24 13.47 9.31 12.98 10.06V8.5H9.6C9.64 9.53 9.6 19.5 9.6 19.5H12.98V13.36C12.98 13.03 13 12.7 13.1 12.47C13.36 11.81 13.95 11.13 14.95 11.13C16.25 11.13 16.77 12.12 16.77 13.58V19.5H20.15V13.19H20.5Z" />
                </svg>
              </span>
              <span aria-label="Instagram">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7.75 3H16.25C18.87 3 21 5.13 21 7.75V16.25C21 18.87 18.87 21 16.25 21H7.75C5.13 21 3 18.87 3 16.25V7.75C3 5.13 5.13 3 7.75 3ZM7.6 4.8C6.06 4.8 4.8 6.06 4.8 7.6V16.4C4.8 17.94 6.06 19.2 7.6 19.2H16.4C17.94 19.2 19.2 17.94 19.2 16.4V7.6C19.2 6.06 17.94 4.8 16.4 4.8H7.6ZM16.95 6.15C17.46 6.15 17.85 6.54 17.85 7.05C17.85 7.56 17.46 7.95 16.95 7.95C16.44 7.95 16.05 7.56 16.05 7.05C16.05 6.54 16.44 6.15 16.95 6.15ZM12 7.5C14.49 7.5 16.5 9.51 16.5 12C16.5 14.49 14.49 16.5 12 16.5C9.51 16.5 7.5 14.49 7.5 12C7.5 9.51 9.51 7.5 12 7.5ZM12 9.3C10.51 9.3 9.3 10.51 9.3 12C9.3 13.49 10.51 14.7 12 14.7C13.49 14.7 14.7 13.49 14.7 12C14.7 10.51 13.49 9.3 12 9.3Z" />
                </svg>
              </span>
              <div
                className="scene-menu-switch scene-menu-footer-switch"
                role="group"
                aria-label="Idioma"
              >
                <button
                  type="button"
                  className={`scene-menu-switch-option${!isSpanish ? ' is-active' : ''}`}
                  aria-pressed={!isSpanish}
                  onClick={() => setIsSpanish(false)}
                >
                  EN
                </button>
                <span className="scene-menu-switch-separator">/</span>
                <button
                  type="button"
                  className={`scene-menu-switch-option${isSpanish ? ' is-active' : ''}`}
                  aria-pressed={isSpanish}
                  onClick={() => setIsSpanish(true)}
                >
                  ES
                </button>
              </div>
            </div>
            <span className="scene-menu-code">228</span>
          </div>
        </div>
      ) : null}
    </div>
  )
}
