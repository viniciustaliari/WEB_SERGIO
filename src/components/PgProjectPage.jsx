import { useState } from 'react'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'
import ProjectsFilterBar from './ProjectsFilterBar'

const projectParagraphs = [
  'Permanent Growth es una identidad creada para una comunidad orientada al crecimiento personal, profesional y creativo. El proyecto parte de la idea de que evolucionar no es un destino, sino un proceso continuo construido a través de la conexión, el aprendizaje compartido y el apoyo entre personas que buscan avanzar juntas. La marca busca transmitir confianza, movimiento y una visión de progreso constante.',
  'El logotipo se construye a partir de las iniciales PG, transformadas en una mariposa abstracta cuyas alas simbolizan cambio, transformación y expansión. La geometría limpia y las líneas angulares aportan equilibrio y carácter contemporáneo, mientras que la composición sugiere apertura y evolución. El resultado es una identidad sólida, elegante y flexible, pensada para acompañar una comunidad que entiende el crecimiento como algo permanente.',
]

const projectFacts = [
  { label: 'Fecha', value: '2023' },
  { label: 'Estado', value: 'Realizado' },
  { label: 'Cliente', value: 'Permanent Growth' },
  { label: 'Equipo', value: 'Sergio de Isidro' },
  {
    label: 'Launch Project',
    value: 'https://www.instagram.com/permanentgrowth_/',
    href: 'https://www.instagram.com/permanentgrowth_/',
  },
]

export default function PgProjectPage({ onBack, onNavigate }) {
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
            src="/pages/proyectos/PG.svg"
            alt="Panel del proyecto Identidad Corporativa PG"
          />
        </div>

        <aside className="project-detail-sidebar">
          <h1>Identidad Corporativa PG</h1>
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
