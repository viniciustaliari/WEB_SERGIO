import { useState } from 'react'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'
import ProjectsFilterBar from './ProjectsFilterBar'

const projectParagraphs = [
  'Viciosa Racing es una identidad creada para una marca vinculada al mundo del motor y a la cultura que lo rodea. El proyecto busca transmitir velocidad, car\u00e1cter y pasi\u00f3n por la competici\u00f3n, manteniendo una conexi\u00f3n real con quienes viven las carreras desde dentro y desde la grada. La marca nace con la intenci\u00f3n de reflejar no solo el rendimiento en pista, sino tambi\u00e9n la cercan\u00eda de un equipo que comparte con su comunidad los mismos productos, referencias y esp\u00edritu que utiliza en competici\u00f3n.',
  'La identidad visual combina un lenguaje gr\u00e1fico actual con referencias a la est\u00e9tica cl\u00e1sica de la denominada "Marca Espa\u00f1a", reinterpretando elementos del pasado desde una mirada m\u00e1s contempor\u00e1nea. Pensada para convivir entre el motorsport, la moda y otros soportes, la marca mantiene una personalidad coherente y reconocible incluso cuando se adapta a diferentes contextos. El resultado es una identidad s\u00f3lida, flexible y con car\u00e1cter propio, capaz de conectar tradici\u00f3n y presente sin perder autenticidad.',
]

const projectFacts = [
  { label: 'Fecha', value: '2023' },
  { label: 'Estado', value: 'Realizado' },
  { label: 'Cliente', value: 'Viciosa Racing' },
  { label: 'Equipo', value: 'Sergio de Isidro' },
  {
    label: 'Launch Project',
    value: 'Instagram',
    href: 'https://www.instagram.com/viciosa.racing?utm_source=ig_web_button_share_sheet&igsh=ZDNIZDc0MzIxNw==',
  },
]

export default function VKartingProjectPage({ onBack, onNavigate }) {
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
            src="/pages/proyectos/vkarting.svg"
            alt="Panel del proyecto Dise\u00f1o Logotipo y Livery V.Karting"
          />
        </div>

        <aside className="project-detail-sidebar">
          <h1>{'Dise\u00f1o Logotipo y Livery V.Karting'}</h1>
          <p className="project-detail-location">{'Villaviciosa (Madrid), Espa\u00f1a'}</p>

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
