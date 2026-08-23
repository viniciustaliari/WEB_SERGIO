import { useState } from 'react'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'
import ProjectsFilterBar from './ProjectsFilterBar'

const projectParagraphs = [
  'Proyecto de direcci\u00f3n de arte desarrollado para un \u00e1lbum musical, concebido como un universo visual completo que une portada, identidad gr\u00e1fica y dise\u00f1o de camiseta en una misma narrativa. La imagen parte de un paisaje rural intervenido con texturas envejecidas, sellos postales y una paleta c\u00e1lida que evoca memoria, origen y paso del tiempo. La escena, suspendida entre lo documental y lo emocional, convierte el entorno cotidiano en un relato visual cargado de simbolismo.',
  'La direcci\u00f3n de arte busca trasladar el tono del \u00e1lbum m\u00e1s all\u00e1 de la m\u00fasica, creando una identidad coherente que pueda habitar distintos soportes sin perder su fuerza. La portada y la camiseta comparten un mismo lenguaje visual basado en la nostalgia, la tierra y la transformaci\u00f3n personal, construyendo una est\u00e9tica reconocible y honesta. El resultado es un proyecto que no solo acompa\u00f1a al disco, sino que ampl\u00eda su historia y la convierte en una experiencia visual completa.',
]

const projectFacts = [
  { label: 'Fecha', value: '2025' },
  { label: 'Estado', value: 'Realizado' },
  { label: 'Cliente', value: '\u00c1lvaro Fern\u00e1ndez "Famas"' },
  { label: 'Equipo', value: 'Sergio de Isidro' },
  {
    label: 'Launch Project',
    value: 'Spotify',
    href: 'https://open.spotify.com/intl-es/artist/60ZzYsXDBpD2J6sDVW-qum?si=0uDe-R2ZSFmzVB9nPMV50A',
  },
]

export default function AlbumMusicalProjectPage({ onBack, onNavigate }) {
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
            src="/pages/proyectos/albun_musical.svg"
            alt="Panel del proyecto Direcci\u00f3n de arte \u00e1lbum musical"
          />
        </div>

        <aside className="project-detail-sidebar">
          <h1>{'Direcci\u00f3n de arte \u00e1lbum musical'}</h1>
          <p className="project-detail-location">{'Madrid, Espa\u00f1a'}</p>

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
