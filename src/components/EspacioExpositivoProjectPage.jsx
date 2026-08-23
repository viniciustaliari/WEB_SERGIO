import { useState } from 'react'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'
import ProjectsFilterBar from './ProjectsFilterBar'

const projectParagraphs = [
  'Mangle es una propuesta de diseño inspirada en la estructura orgánica de los manglares y en la forma en que sus raíces se entrelazan para crear sistemas flexibles, resistentes y en constante crecimiento. El proyecto explora la repetición modular y el equilibrio entre orden y aparente caos, transformando una geometría sencilla en una pieza de fuerte presencia escultórica.',
  'La composición circular y la superposición de planos generan una sensación de movimiento continuo, como si la estructura estuviera expandiéndose desde el interior. Más que un objeto cerrado, Mangle se plantea como un estudio sobre conexión, ritmo y transformación, donde cada elemento depende de los demás para construir un conjunto ligero, dinámico y visualmente cambiante según el punto de vista.',
]

const projectFacts = [
  { label: 'Superficie', value: '20 m2' },
  { label: 'Fecha', value: '2021' },
  { label: 'Estado', value: 'Proyecto' },
  { label: 'Cliente', value: 'ETSAM' },
  { label: 'Equipo', value: 'Sergio de Isidro' },
]

export default function EspacioExpositivoProjectPage({ onBack, onNavigate }) {
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
            src="/pages/proyectos/espacio_expositivo.svg"
            alt="Panel del proyecto Espacio expositivo temporal 2021"
          />
        </div>

        <aside className="project-detail-sidebar">
          <h1>Espacio expositivo temporal 2021</h1>
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
