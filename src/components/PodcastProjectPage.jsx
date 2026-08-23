import { useState } from 'react'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'
import ProjectsFilterBar from './ProjectsFilterBar'

const projectParagraphs = [
  'X-RAIL es una identidad creada para un pódcast que habla de liderazgo, superación y dirección personal. El proyecto nace de una idea sencilla: todos nos hemos sentido perdidos alguna vez, y a veces lo que más necesitamos es una voz cercana que nos ayude a avanzar. A partir de esa inspiración se desarrolló una imagen corporativa capaz de transmitir fuerza, claridad y confianza, convirtiendo la marca en un punto de apoyo más que en un simple canal de contenido. El logotipo se construye a partir de líneas simbolizando caminos que se cruzan entre sí para formar las letras, una metáfora visual de las decisiones, conexiones y trayectorias que dan forma a cualquier proceso de crecimiento.',
  'La identidad combina transparencia y elegancia para construir una presencia sólida y reconocible. Cada elemento de la marca está pensado para comunicar inspiración sin artificios, mantener la cercanía con la audiencia y proyectar una sensación de movimiento constante. El resultado es una marca flexible, contemporánea y con carácter, diseñada para generar identificación, crear vínculo y acompañar un proyecto que mira siempre hacia el siguiente paso.',
]

const projectFacts = [
  { label: 'Fecha', value: '2022' },
  { label: 'Estado', value: 'Realizado' },
  { label: 'Cliente', value: 'XRail' },
  { label: 'Equipo', value: 'Sergio de Isidro' },
  { label: 'Launch Project', value: 'https://xrail.es/', href: 'https://xrail.es/' },
]

export default function PodcastProjectPage({ onBack, onNavigate }) {
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
            src="/pages/proyectos/podcast.svg"
            alt="Panel del proyecto Identidad Corporativa Podcast"
          />
        </div>

        <aside className="project-detail-sidebar">
          <h1>Identidad Corporativa Podcast</h1>
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
