import { useState } from 'react'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'
import ProjectsFilterBar from './ProjectsFilterBar'

const projectParagraphs = [
  'Proyecto de intervención para la capilla de la ETSAM-UPM, concebido como un espacio de recogimiento y silencio dentro del entorno universitario. La propuesta busca generar una atmósfera acogedora y protegida, donde quien entre pueda aislarse del exterior y encontrar un lugar íntimo para la oración, la reflexión y la pausa.',
  'La intervención actúa con el mínimo gesto posible, apoyándose en los elementos existentes y en los materiales del proyecto original para transformar el espacio a través de la luz. La nueva atmósfera se inspira en la idea de una gruta: un refugio sereno donde la iluminación indirecta, filtrada entre las lamas de madera, sugiere profundidad y trascendencia, aportando al conjunto un carácter más cálido, espiritual y contemplativo.',
]

const projectFacts = [
  { label: 'Superficie', value: '40 m2' },
  { label: 'Fecha', value: '2024' },
  { label: 'Estado', value: 'Proyecto' },
  { label: 'Cliente', value: 'UPM' },
  { label: 'Equipo', value: 'Sergio de Isidro + Javier Mª Alonso' },
  {
    label: 'Premios',
    value: 'Propuesta ganadora en el concurso interno de la Universidad',
  },
]

export default function CapillaProjectPage({ onBack, onNavigate }) {
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

      <ProjectsFilterBar activeFilter="interiors" />

      <div className="project-detail-layout">
        <div className="project-detail-visual">
          <img
            className="project-detail-image"
            src="/pages/proyectos/capilla.svg"
            alt="Panel del proyecto Diseño e iluminación Capilla"
          />
        </div>

        <aside className="project-detail-sidebar">
          <h1>Diseño e iluminación Capilla</h1>
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
