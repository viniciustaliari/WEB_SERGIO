import { useState } from 'react'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'
import ProjectsFilterBar from './ProjectsFilterBar'

const projectParagraphs = [
  'HAZ LAMP es una lámpara pensada para acompañar, no para llamar la atención. Su luz indirecta crea una atmósfera cálida y tranquila, proyectando un haz suave a través de una de sus caras y filtrando la iluminación mediante un papel pergamino especial que aporta una sensación más uniforme y envolvente.',
  'Fabricada con madera, papel y cartón reciclados, combina sencillez formal y funcionalidad en un objeto ligero, desmontable y reutilizable. Un diseño honesto, sin artificios, que entiende la iluminación como una forma de crear espacio, calma y presencia.',
  'Próximamente a la venta.',
]

const projectFacts = [
  { label: 'Fecha', value: '2022' },
  { label: 'Estado', value: 'Construido / Prototipo' },
  { label: 'Equipo', value: 'Sergio de Isidro + José Luis de Isidro' },
]

export default function HazProjectPage({ onBack, onNavigate }) {
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
            src="/pages/proyectos/HAZ.svg"
            alt="Panel del proyecto Lámpara HAZ"
          />
        </div>

        <aside className="project-detail-sidebar">
          <h1>Lámpara HAZ</h1>
          <p className="project-detail-location">Segovia, España</p>

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
