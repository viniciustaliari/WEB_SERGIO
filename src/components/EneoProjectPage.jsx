import { useState } from 'react'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'
import ProjectsFilterBar from './ProjectsFilterBar'

const projectParagraphs = [
  'La marca nace con el objetivo de ofrecer una alimentación de alta calidad para conejos y pequeños roedores, poniendo el cuidado y el bienestar animal en el centro del proyecto. La identidad busca transmitir cercanía, confianza y atención al detalle, alejándose de una imagen genérica para construir una presencia más humana y reconocible.',
  'El logotipo se desarrolla a partir de una tipografía de caja baja, estrecha y sin serifas, dibujada a mano para reforzar la idea de trabajo artesanal, calidad y personalización. El ritmo variable entre las letras aporta dinamismo y equilibrio visual, mientras que las formas redondeadas suavizan el conjunto y le dan un carácter atemporal, moderno y elegante. El resultado es una identidad sencilla en apariencia, pero diseñada para comunicar calidad y permanecer vigente con el paso del tiempo.',
]

const projectFacts = [
  { label: 'Fecha', value: '2022' },
  { label: 'Estado', value: 'Realizado' },
  { label: 'Cliente', value: 'Eneo' },
  { label: 'Equipo', value: 'Sergio de Isidro' },
  {
    label: 'Launch Project',
    value: 'https://en30.com/pages/mision',
    href: 'https://en30.com/pages/mision',
  },
]

export default function EneoProjectPage({ onBack, onNavigate }) {
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
            src="/pages/proyectos/ENEO.svg"
            alt="Panel del proyecto Identidad Corporativa Eneo"
          />
        </div>

        <aside className="project-detail-sidebar">
          <h1>Identidad Corporativa Eneo</h1>
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
