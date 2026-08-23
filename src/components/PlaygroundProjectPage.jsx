import { useState } from 'react'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'
import ProjectsFilterBar from './ProjectsFilterBar'

const projectParagraphs = [
  'Pabellón efímero diseñado para hacer visible aquello que normalmente permanece oculto bajo tierra: la compleja red de túneles y conexiones de un hormiguero. El proyecto toma como referencia las estructuras orgánicas creadas por las hormigas y las transforma en una experiencia espacial abierta, permitiendo recorrer visualmente un sistema que suele permanecer invisible.',
  'La estructura se construye a partir de tubos transparentes que se entrelazan y superponen, generando un recorrido continuo de curvas, vacíos y sombras. Inspirado en las formas naturales y en los patrones de crecimiento de los sistemas vivos, el pabellón propone una mirada distinta sobre la relación entre naturaleza, estructura y movimiento, convirtiendo un fenómeno cotidiano en una experiencia visual y espacial más inmersiva.',
]

const projectFacts = [
  { label: 'Superficie', value: '23 m2' },
  { label: 'Fecha', value: '2022' },
  { label: 'Estado', value: 'Proyecto' },
  { label: 'Cliente', value: 'ETSAM' },
  { label: 'Equipo', value: 'Sergio de Isidro' },
  {
    label: 'Premios',
    value: 'Propuesta finalista en el concurso interno de la Universidad',
  },
]

export default function PlaygroundProjectPage({ onBack, onNavigate }) {
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

      <ProjectsFilterBar activeFilter="scenography" />

      <div className="project-detail-layout">
        <div className="project-detail-visual">
          <img
            className="project-detail-image"
            src="/pages/proyectos/playground.svg"
            alt="Panel del proyecto Vivienda experimental y Playground"
          />
        </div>

        <aside className="project-detail-sidebar">
          <h1>Vivienda experimental y Playground</h1>
          <p className="project-detail-location">Pontevedra, España</p>

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
