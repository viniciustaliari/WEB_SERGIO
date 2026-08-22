const projectFilters = [
  { id: 'all', label: 'TODOS' },
  { id: 'interiors', label: 'DISEÑO DE INTERIORES' },
  { id: 'landscape', label: 'PAISAJISMO' },
  { id: 'scenography', label: 'ESCENOGRAFÍA' },
  { id: 'graphic', label: 'DISEÑO GRÁFICO' },
  { id: 'art-direction', label: 'DIRECCIÓN DE ARTE' },
]

export default function ProjectsFilterBar({
  activeFilter = 'all',
  onFilterChange,
}) {
  return (
    <div className="projects-page-filters">
      {projectFilters.map((filter) => (
        <button
          key={filter.id}
          type="button"
          className={`projects-page-filter${activeFilter === filter.id ? ' is-active' : ''}`}
          onClick={() => onFilterChange?.(filter.id)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}
