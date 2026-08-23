import { useState } from 'react'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'
import ProjectsFilterBar from './ProjectsFilterBar'

const projectParagraphs = [
  'Marea es una propuesta espacial inspirada en la idea del anillo verde que rodea Madrid y en la forma en que un recorrido puede activar un lugar sin fragmentarlo. El proyecto introduce una estructura continua que atraviesa el espacio y conecta diferentes actividades, generando una experiencia abierta, fluida y cambiante para quien la recorre.',
  'La geometr\u00eda ondulante y el juego de alturas crean un movimiento constante dentro de la planta, permitiendo m\u00faltiples formas de uso y de circulaci\u00f3n. M\u00e1s que un elemento aislado, la intervenci\u00f3n funciona como un paisaje interior que organiza el espacio a trav\u00e9s del ritmo, la continuidad y la relaci\u00f3n entre las personas y el entorno, aportando una presencia ligera, din\u00e1mica y contempor\u00e1nea.',
]

const projectFacts = [
  { label: 'Superficie', value: '250 m2' },
  { label: 'Fecha', value: '2023' },
  { label: 'Estado', value: 'Proyecto' },
  { label: 'Cliente', value: 'MITECO' },
  { label: 'Equipo', value: 'Sergio de Isidro' },
]

export default function MitecoProjectPage({ onBack, onNavigate }) {
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

      <ProjectsFilterBar activeFilter="landscape" />

      <div className="project-detail-layout">
        <div className="project-detail-visual">
          <img
            className="project-detail-image"
            src="/pages/proyectos/MITECO.svg"
            alt="Panel del proyecto Ajardinamiento MITECO"
          />
        </div>

        <aside className="project-detail-sidebar">
          <h1>Proyecto Ajardinamiento MITECO</h1>
          <p className="project-detail-location">{'Madrid, Espa\u00f1a'}</p>

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
