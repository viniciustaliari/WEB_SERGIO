import { useState } from 'react'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'
import ProjectsFilterBar from './ProjectsFilterBar'

const projectParagraphs = [
  'Cartel seleccionado por la Universidad Francisco de Vitoria como imagen oficial de la representación de Los intereses creados de Jacinto Benavente. El proyecto parte de una reinterpretación visual de la obra, utilizando las manos y los hilos como símbolo de la manipulación, las apariencias y los vínculos invisibles que mueven a los personajes.',
  'La mezcla de dibujo gestual y acuarela busca alejarse del cartel teatral tradicional y aportar una lectura más contemporánea, emocional y directa. Una pieza pensada no solo para anunciar una función, sino para despertar curiosidad antes de que se abra el telón.',
]

const projectFacts = [
  { label: 'Fecha', value: '2023' },
  { label: 'Estado', value: 'Realizado' },
  { label: 'Equipo', value: 'Sergio de Isidro' },
  {
    label: 'Premios',
    value:
      'Cartel seleccionado como propuesta ganadora del concurso de cartelería de la UFV para representar su obra teatral.',
  },
]

export default function CartelTeatroProjectPage({ onBack, onNavigate }) {
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
            src="/pages/proyectos/cartel_de_teatro.svg"
            alt="Panel del proyecto Cartel de teatro"
          />
        </div>

        <aside className="project-detail-sidebar">
          <h1>Cartel de teatro</h1>
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
