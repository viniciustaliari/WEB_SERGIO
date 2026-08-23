import { useState } from 'react'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'
import ProjectsFilterBar from './ProjectsFilterBar'

const projectParagraphs = [
  'Cartel diseñado para las fiestas locales de San Rafael 2024, concebido como una representación visual de la vida del pueblo durante esos días. El nombre de la localidad se convierte en el eje principal de la composición, alrededor del cual aparecen sus calles, tradiciones, actividades, paisajes y personas, transformando el cartel en un pequeño mapa emocional del lugar.',
  'La combinación de ilustración lineal y tipografía tridimensional aporta dinamismo y carácter festivo, permitiendo descubrir nuevos detalles en cada mirada. Música, peñas, deporte, naturaleza y encuentros cotidianos conviven en una pieza pensada no solo para anunciar unas fiestas, sino para reflejar la identidad y la energía de San Rafael.',
]

const projectFacts = [
  { label: 'Fecha', value: '2024' },
  { label: 'Estado', value: 'Realizado' },
  { label: 'Cliente', value: 'El Espinar-San Rafael' },
  { label: 'Equipo', value: 'Sergio de Isidro + José Luis de Isidro' },
  { label: 'Premios', value: 'Cartel seleccionado como finalista' },
]

export default function FiestasLocalesProjectPage({ onBack, onNavigate }) {
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
            src="/pages/proyectos/fiestas_locales.svg"
            alt="Panel del proyecto Cartel de Fiestas Locales"
          />
        </div>

        <aside className="project-detail-sidebar">
          <h1>Cartel de Fiestas Locales</h1>
          <p className="project-detail-location">San Rafael (Segovia), España</p>

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
