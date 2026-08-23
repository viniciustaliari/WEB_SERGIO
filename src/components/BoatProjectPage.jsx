import { useState } from 'react'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'
import ProjectsFilterBar from './ProjectsFilterBar'

const projectParagraphs = [
  'Boat es una escultura que simplifica la forma del catamarán hasta reducirla a su esencia más reconocible. El proyecto busca despertar una mirada libre de prejuicios, recuperando la capacidad de imaginar y jugar que solemos tener en la infancia. La pieza no pretende representar un barco de forma literal, sino evocar la idea del viaje, la exploración y la curiosidad.',
  'Inspirada en el pensamiento de Bruno Munari, la propuesta utiliza una geometría sencilla para sugerir mucho más de lo que muestra. La referencia al pequeño barco de papel funciona como un vínculo con nuestros recuerdos y con una manera más intuitiva de entender el diseño. El resultado es una pieza ligera, abierta y evocadora, que convierte la simplicidad en una herramienta para conectar con la imaginación y con nuestros propios orígenes.',
  'Próximamente a la venta.',
]

const projectFacts = [
  { label: 'Fecha', value: '2021' },
  { label: 'Estado', value: 'Construido / Prototipo' },
  { label: 'Equipo', value: 'Sergio de Isidro' },
]

export default function BoatProjectPage({ onBack, onNavigate }) {
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
            src="/pages/proyectos/boat.svg"
            alt="Panel del proyecto Escultura Boat"
          />
        </div>

        <aside className="project-detail-sidebar">
          <h1>Escultura Boat</h1>
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
