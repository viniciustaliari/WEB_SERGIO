import { useState } from 'react'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'
import ProjectsFilterBar from './ProjectsFilterBar'

const projectParagraphs = [
  'El Rastro es una identidad visual diseñada para una residencia artística vinculada a la memoria urbana de Madrid. El nombre nace del propio origen del término matadero y de su conexión histórica con el barrio de Puerta de Toledo, donde el rastro que dejaban los animales terminó dando nombre a uno de los lugares más reconocibles y vivos de la ciudad. El proyecto busca recuperar esa carga histórica sin caer en la nostalgia, transformándola en una imagen gráfica más actual, abierta y cultural.',
  'El logotipo se construye a partir de líneas rectas y proporciones arquitectónicas que evocan la esquina de un edificio y sus fachadas vistas desde la calle que las conecta. La tipografía se integra en la estructura como si fueran ventanas y puertas, convirtiendo el nombre en parte del propio espacio urbano. El resultado es una identidad que mira al pasado, pero habla en presente: sólida, reconocible y pensada para un lugar donde la creación contemporánea deja un nuevo rastro en la ciudad.',
]

const projectFacts = [
  { label: 'Superficie', value: '3000 m2' },
  { label: 'Fecha', value: '2024' },
  { label: 'Estado', value: 'Proyecto' },
  { label: 'Cliente', value: 'Matadero Madrid' },
  { label: 'Equipo', value: 'Sergio de Isidro' },
]

export default function ElRastroProjectPage({ onBack, onNavigate }) {
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
            src="/pages/proyectos/el_rastro.svg"
            alt="Panel del proyecto Identidad Corporativa El Rastro"
          />
        </div>

        <aside className="project-detail-sidebar">
          <h1>Identidad Corporativa El Rastro</h1>
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
