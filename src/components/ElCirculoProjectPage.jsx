import { useState } from 'react'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'
import ProjectsFilterBar from './ProjectsFilterBar'

const projectParagraphs = [
  'The Circle es un juego de construcción en madera que transforma la geometría en un lenguaje creativo. Inspirado en el espíritu experimental de la Bauhaus, explora la modularidad, el volumen y la composición a través de piezas diseñadas para construir desde arquitecturas icónicas y tipografías hasta esculturas abstractas. Un objeto pensado para aprender jugando, pero también para cuestionar la forma en la que entendemos el diseño.',
  'Gracias a las proporciones y ángulos de cada pieza, las combinaciones son prácticamente infinitas: puedes crear ciudades, reinterpretar arquitecturas contemporáneas o convertir palabras en estructuras tridimensionales. The Circle no entiende de edades ni de fronteras; es un objeto atemporal, divertido y sorprendentemente adictivo, fabricado además con madera procedente de bosques gestionados de forma sostenible.',
  'Próximamente a la venta.',
]

const projectFacts = [
  { label: 'Fecha', value: '2020' },
  { label: 'Estado', value: 'Construido / Prototipo' },
  { label: 'Equipo', value: 'Sergio de Isidro + José Luis de Isidro' },
]

export default function ElCirculoProjectPage({ onBack, onNavigate }) {
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
            src="/pages/proyectos/el_circulo.svg"
            alt="Panel del proyecto Juguete de construcción El Círculo"
          />
        </div>

        <aside className="project-detail-sidebar">
          <h1>Juguete de construcción El Círculo</h1>
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
