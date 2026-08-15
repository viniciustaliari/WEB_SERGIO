const projectFilters = [
  { id: 'all', label: 'TODOS' },
  { id: 'interiors', label: 'DISE\u00d1O DE INTERIORES' },
  { id: 'landscape', label: 'PAISAJISMO' },
  { id: 'scenography', label: 'ESCENOGRAF\u00cdA' },
  { id: 'graphic', label: 'DISE\u00d1O GR\u00c1FICO' },
  { id: 'art-direction', label: 'DIRECCI\u00d3N DE ARTE' },
  { id: 'academy', label: 'ACADEMIA' },
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
