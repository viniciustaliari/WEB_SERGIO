import { useState } from 'react'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'
import ProjectsFilterBar from './ProjectsFilterBar'

const projectParagraphs = [
  'El proyecto parte de una reflexión sobre cómo reducir la arquitectura a su esencia, tomando como referencia la ramatectura, la cabaña primitiva de Vitruvio y las formas orgánicas presentes en la naturaleza. La propuesta entiende el espacio como un sistema de refugios ligeros y conectados, alejándose de la arquitectura pesada y dominante para explorar una relación más equilibrada entre construcción, paisaje y habitabilidad.',
  'La geometría se inspira en el fenómeno de la timidez botánica, donde las copas de ciertos árboles generan patrones naturales de vacíos y conexiones. A partir de esta lógica se desarrolla una red de pasarelas y cápsulas que organiza el espacio de forma orgánica y eficiente, creando una estructura capaz de integrarse en el entorno, favorecer la biodiversidad urbana y aportar una presencia más ligera, porosa y contemporánea.',
]

const projectFacts = [
  { label: 'Superficie', value: '920 m2' },
  { label: 'Fecha', value: '2022' },
  { label: 'Estado', value: 'Proyecto' },
  { label: 'Cliente', value: 'ETSAM' },
  { label: 'Equipo', value: 'Sergio de Isidro' },
  {
    label: 'Premios',
    value: 'Propuesta ganadora en el concurso interno de la Universidad',
  },
]

export default function ElBosqueProjectPage({ onBack, onNavigate }) {
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
            src="/pages/proyectos/el_bosque.svg"
            alt="Panel del proyecto Centro cultural El Bosque"
          />
        </div>

        <aside className="project-detail-sidebar">
          <h1>Centro cultural El Bosque</h1>
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
