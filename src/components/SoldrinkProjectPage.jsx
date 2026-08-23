import { useState } from 'react'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'
import ProjectsFilterBar from './ProjectsFilterBar'

const projectParagraphs = [
  'SOLDRINK es una identidad creada para una marca de c\u00f3cteles embotellados que entiende la bebida como una experiencia social, espont\u00e1nea y llena de energ\u00eda. El proyecto busca transmitir juventud, diversi\u00f3n y una forma de disfrutar m\u00e1s libre y aut\u00e9ntica, inspirada en la esencia contempor\u00e1nea de la marca Espa\u00f1a y en su capacidad de conectar con personas de distintos lugares sin perder su car\u00e1cter propio.',
  'La identidad visual combina frescura y personalidad con una imagen cuidada y reconocible, apoyada en una est\u00e9tica din\u00e1mica y actual. La marca pone el foco en la calidad de los ingredientes, el origen nacional de sus productos y una actitud optimista y aventurera que acompa\u00f1a cada experiencia. El resultado es una identidad flexible y con car\u00e1cter, dise\u00f1ada para celebrar el disfrute compartido, proyectar una energ\u00eda positiva y mantener siempre el v\u00ednculo con sus ra\u00edces.',
]

const projectFacts = [
  { label: 'Fecha', value: '2025' },
  { label: 'Estado', value: 'Realizado' },
  { label: 'Cliente', value: 'Bodegas Conde de Alba S.A.' },
  { label: 'Equipo', value: 'Sergio de Isidro' },
  { label: 'Launch Project', value: 'soldrink.es', href: 'https://www.soldrink.es' },
]

export default function SoldrinkProjectPage({ onBack, onNavigate }) {
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
            src="/pages/proyectos/bodega.svg"
            alt="Panel del proyecto Branding y etiquetas bodega"
          />
        </div>

        <aside className="project-detail-sidebar">
          <h1>Branding y etiquetas bodega</h1>
          <p className="project-detail-location">{'Toledo, Espa\u00f1a'}</p>

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
                  {fact.href ? (
                    <a
                      className="project-detail-fact-link"
                      href={fact.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {fact.value}
                    </a>
                  ) : (
                    <p className="project-detail-fact-value">{fact.value}</p>
                  )}
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
