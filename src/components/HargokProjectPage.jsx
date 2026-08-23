import { useState } from 'react'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'
import ProjectsFilterBar from './ProjectsFilterBar'

const projectParagraphs = [
  'Diseño de dos tipografías sans serif de creación propia, desarrolladas en colaboración con otro diseñador a partir de una idea común: reducir la letra a su mínima expresión sin perder su identidad. Inspiradas en la síntesis del cuerpo humano, ambas propuestas trabajan con líneas rectas, diagonales y formas geométricas que eliminan lo accesorio para quedarse únicamente con lo esencial.',
  'Más que tipografías convencionales, el proyecto funciona como un ejercicio de percepción visual. Algunas letras se completan en la mente del lector, generando un equilibrio entre orden y ausencia, estructura e intuición. Las composiciones tipográficas exploran esa tensión entre lo legible y lo abstracto, convirtiendo la letra en imagen y haciendo que el diseño no solo se lea, sino que también se interprete.',
]

const projectFacts = [
  { label: 'Fecha', value: '2021' },
  { label: 'Estado', value: 'Proyecto' },
  { label: 'Equipo', value: 'Sergio de Isidro + Javier Mª Alonso' },
]

export default function HargokProjectPage({ onBack, onNavigate }) {
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
            src="/pages/proyectos/hagok.svg"
            alt="Panel del proyecto Tipografía Hargok"
          />
        </div>

        <aside className="project-detail-sidebar">
          <h1>Tipografía Hargok</h1>
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
