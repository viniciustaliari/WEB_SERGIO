import { useState } from 'react'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'
import ProjectsFilterBar from './ProjectsFilterBar'

const projectParagraphs = [
  'Proyecto de diseño editorial para un juego de cartas con una identidad visual propia y fácil de reconocer. La combinación de ilustración, tipografía y composición gráfica crea un universo dinámico y cercano, pensado para que la experiencia empiece antes incluso de abrir la caja.',
  'El sistema gráfico se apoya en un personaje ilustrado (inspirado en el cliente) y en referencias al cómic y a los juegos coleccionables, aportando personalidad, ritmo y un punto divertido. El resultado es un packaging que acompaña al juego, refuerza su carácter y hace que cada carta forme parte de una experiencia visual coherente y entretenida.',
]

const projectFacts = [
  { label: 'Fecha', value: '2024' },
  { label: 'Estado', value: 'Realizado' },
  { label: 'Cliente', value: 'Francisco Matorras' },
  { label: 'Equipo', value: 'Sergio de Isidro' },
]

export default function PackagingProjectPage({ onBack, onNavigate }) {
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
            src="/pages/proyectos/Packing.svg"
            alt="Panel del proyecto Diseño Editorial y Packaging"
          />
        </div>

        <aside className="project-detail-sidebar">
          <h1>Diseño Editorial y Packaging</h1>
          <p className="project-detail-location">Santander, España</p>

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
