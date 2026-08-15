const projectFilters = [
  'TODOS',
  'DISEÑO DE INTERIORES',
  'PAISAJISMO',
  'ESCENOGRAFÍA',
  'DISEÑO GRÁFICO',
  'DIRECCIÓN DE ARTE',
  'ACADEMIA',
]

const projectItems = [
  {
    title: 'Juguete de construcción El Círculo',
    location: 'Madrid, España',
  },
  {
    title: 'Cartel de teatro Los intereses creados',
    location: 'Madrid, España',
  },
  {
    title: 'Identidad Corporativa El Rastro',
    location: 'Madrid, España',
  },
  {
    title: 'Tipografía Hargok',
    location: 'Madrid, España',
  },
  {
    title: 'Lámpara HAZ',
    location: 'Segovia, España',
  },
  {
    title: 'Escenografía UFV',
    location: 'Madrid, España',
  },
]

function ProjectCard({ title, location }) {
  return (
    <article className="projects-card">
      <div className="projects-card-media">
        <div className="projects-card-icon">
          <span></span>
        </div>
        <div className="projects-card-image"></div>
      </div>
      <h3>{title}</h3>
      <p>{location}</p>
    </article>
  )
}

export default function ProjectsPage({ onBack }) {
  return (
    <section className="projects-page">
      <header className="projects-page-header">
        <button type="button" className="projects-page-brand" onClick={onBack}>
          228
        </button>

        <nav className="projects-page-nav" aria-label="Secciones principales">
          <button type="button" className="projects-page-nav-link is-active">
            PROYECTOS
          </button>
          <button type="button" className="projects-page-nav-link">
            ESTUDIO
          </button>
          <button type="button" className="projects-page-nav-link">
            CONTACTO
          </button>
          <button type="button" className="projects-page-nav-link">
            TIENDA ONLINE
          </button>
        </nav>
      </header>

      <div className="projects-page-filters">
        {projectFilters.map((filter, index) => (
          <button
            key={filter}
            type="button"
            className={`projects-page-filter${index === 0 ? ' is-active' : ''}`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="projects-page-grid">
        {projectItems.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            location={project.location}
          />
        ))}
      </div>
    </section>
  )
}
