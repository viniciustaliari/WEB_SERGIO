const navItems = [
  { id: 'projects', label: 'PROYECTOS' },
  { id: 'studio', label: 'ESTUDIO' },
  { id: 'contact', label: 'CONTACTO' },
  { id: 'shop', label: 'TIENDA ONLINE' },
  { id: 'academy', label: 'ACADEMIA' },
]

export default function PageHeader({
  activePage,
  isSpanish,
  onBack,
  onNavigate,
  onSetSpanish,
}) {
  return (
    <header className="projects-page-header">
      <button type="button" className="projects-page-brand" onClick={onBack}>
        2 28
      </button>

      <div className="projects-page-nav-row">
        <nav className="projects-page-nav" aria-label="Secciones principales">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`projects-page-nav-link${activePage === item.id ? ' is-active' : ''}`}
              onClick={() => onNavigate?.(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="projects-page-lang-switch" role="group" aria-label="Idioma">
          <button
            type="button"
            className={`projects-page-lang${!isSpanish ? ' is-active' : ''}`}
            aria-pressed={!isSpanish}
            onClick={() => onSetSpanish(false)}
          >
            EN
          </button>
          <span className="projects-page-lang-separator">/</span>
          <button
            type="button"
            className={`projects-page-lang${isSpanish ? ' is-active' : ''}`}
            aria-pressed={isSpanish}
            onClick={() => onSetSpanish(true)}
          >
            ES
          </button>
        </div>
      </div>
    </header>
  )
}
