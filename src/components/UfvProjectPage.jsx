import { useState } from 'react'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'
import ProjectsFilterBar from './ProjectsFilterBar'

const projectParagraphs = [
  'La propuesta escenográfica parte de una idea sencilla: sugerir los espacios sin necesidad de construirlos por completo. En lugar de utilizar grandes estructuras, cada escena se define mediante elementos reconocibles que permiten identificar el entorno de forma inmediata.',
  'Puertas, ventanas y mobiliario se convierten en las claves visuales de cada ambiente, dejando que sea el espectador quien complete el espacio con su propia imaginación. El resultado es una escenografía más ligera, flexible y centrada en la percepción.',
]

const projectFacts = [
  { label: 'Superficie', value: '70 m2' },
  { label: 'Fecha', value: '2023' },
  { label: 'Estado', value: 'Proyecto' },
  { label: 'Cliente', value: 'Universidad Francisco de Vitoria' },
  { label: 'Equipo', value: 'Sergio de Isidro' },
  {
    label: 'Premios',
    value: 'Propuesta finalista en el concurso de escenografía organizado por la UFV',
  },
]

export default function UfvProjectPage({ onBack, onNavigate }) {
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
            src="/pages/proyectos/UFG.svg"
            alt="Panel del proyecto Escenografía UFV"
          />
        </div>

        <aside className="project-detail-sidebar">
          <h1>Escenografía UFV</h1>
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
