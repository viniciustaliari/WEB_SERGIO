import { useState } from 'react'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'
import ProjectsFilterBar from './ProjectsFilterBar'

const projectParagraphs = [
  'CROSS es una silla baja diseñada en madera de chopo, construida a partir de ensamblajes machihembrados que refuerzan su carácter estructural y su sencillez formal. La geometría en forma de X define tanto el chasis como el respaldo, convirtiéndose en el elemento que da identidad a la pieza y le aporta un equilibrio entre ligereza y solidez.',
  'Más allá de su función, la estructura genera un interesante juego de luces y sombras que cambia según el punto de vista, aportando profundidad y dinamismo al objeto. El resultado es una pieza de líneas limpias y personalidad propia, donde la construcción y la forma trabajan juntas para crear una presencia serena, elegante y contemporánea.',
  'Próximamente a la venta.',
]

const projectFacts = [
  { label: 'Fecha', value: '2022' },
  { label: 'Estado', value: 'Construido / Prototipo' },
  { label: 'Equipo', value: 'Sergio de Isidro + José Luis de Isidro' },
]

export default function CrossProjectPage({ onBack, onNavigate }) {
  const [isSpanish, setIsSpanish] = useState(false)

  return (
    <section className="projects-page project-detail-page">
      <PageHeader
        activePage="projects"
        isSpanish={isSpanish}
        onBack={onBack}
        onNavigate={onNavigate}
        onSetSpanish={setIsSpanish}
      />

      <ProjectsFilterBar activeFilter="graphic" />

      <div className="project-detail-layout">
        <div className="project-detail-visual">
          <img
            className="project-detail-image"
            src="/pages/proyectos/cross.svg"
            alt="Panel del proyecto Silla CROSS"
          />
        </div>

        <aside className="project-detail-sidebar">
          <h1>Silla CROSS</h1>
          <p className="project-detail-location">Madrid, España</p>

          <div className="project-detail-copy">
            {projectParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="project-detail-meta">
            <h2>DATOS PROYECTO</h2>

            <div className="project-detail-facts">
              {projectFacts.map((fact) => (
                <div key={fact.label} className="project-detail-fact">
                  <p className="project-detail-fact-label">{fact.label}</p>
                  <p className="project-detail-fact-value">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <PageFooter />
    </section>
  )
}
