import { useState } from 'react'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'
import ProjectsFilterBar from './ProjectsFilterBar'

const projectParagraphs = [
  "FLYT'S AÇAÍ es una identidad creada para una marca que busca acercar la energía y el carácter del Amazonas a una experiencia de consumo actual. El proyecto combina salud, sabor y movimiento en una propuesta pensada para quienes quieren cuidarse sin renunciar al disfrute. La marca transmite frescura, naturalidad y una conexión auténtica con el origen del fruto, reconocido desde hace siglos por sus propiedades nutricionales y su riqueza en antioxidantes, proteínas y minerales.",
  'La experiencia visual y espacial se apoya en materiales cálidos, formas esenciales y una atmósfera que evoca refugio, naturaleza y cercanía. El stand se concibe como un lugar de pausa dentro del ritmo cotidiano, mientras que el servicio de delivery refuerza la idea de disfrutar un producto saludable en cualquier momento y en cualquier lugar. El resultado es una identidad fresca, reconocible y contemporánea, diseñada para que bienestar y sabor formen parte de la misma experiencia.',
]

const projectFacts = [
  { label: 'Superficie', value: '20 m2' },
  { label: 'Fecha', value: '2023' },
  { label: 'Estado', value: 'Proyecto' },
  { label: 'Cliente', value: "Flyt's Açaí" },
  { label: 'Equipo', value: 'Sergio de Isidro + José Luis de Isidro' },
]

export default function EfimeroProjectPage({ onBack, onNavigate }) {
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
            src="/pages/proyectos/stand_efimero.svg"
            alt="Panel del proyecto Stand efímero de venta"
          />
        </div>

        <aside className="project-detail-sidebar">
          <h1>Stand efímero de venta</h1>
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
