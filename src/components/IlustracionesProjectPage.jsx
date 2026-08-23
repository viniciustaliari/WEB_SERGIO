import { useState } from 'react'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'
import ProjectsFilterBar from './ProjectsFilterBar'

const projectParagraphs = [
  'Proyecto de ilustración desarrollado para el catálogo de Plantae, una empresa especializada en soluciones tecnológicas para la monitorización y gestión de cultivos. El trabajo busca traducir procesos complejos de captación de datos, conectividad y análisis agrícola en un lenguaje visual claro, accesible y coherente con la identidad de la marca.',
  'Las ilustraciones combinan síntesis gráfica, formas sencillas y una paleta reducida para explicar sensores, estaciones meteorológicas, comunicación inalámbrica y herramientas de gestión de forma intuitiva y fácil de entender. El resultado es un sistema visual limpio y reconocible que acompaña al catálogo, refuerza la identidad de Plantae y acerca la tecnología al entorno agrícola de una manera más humana y cercana.',
]

const projectFacts = [
  { label: 'Fecha', value: '2025' },
  { label: 'Estado', value: 'Realizado' },
  { label: 'Cliente', value: 'Plantae' },
  { label: 'Equipo', value: 'Sergio de Isidro' },
]

export default function IlustracionesProjectPage({ onBack, onNavigate }) {
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
            src="/pages/proyectos/ilustraciones.svg"
            alt="Panel del proyecto Colección de Ilustraciones"
          />
        </div>

        <aside className="project-detail-sidebar">
          <h1>Colección de Ilustraciones</h1>
          <p className="project-detail-location">Villaviciosa (Madrid), España</p>

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
