import { useState } from 'react'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'
import ProjectsFilterBar from './ProjectsFilterBar'

const projectParagraphs = [
  'Este proyecto est\u00e1 basado en el concepto del Metabolismo japon\u00e9s de Kisho Kurokawa (la arquitectura como organismo vivo, formado por c\u00e1psulas independientes que se pueden montar, sustituir o combinar sin depender de una estructura fija) y en las utop\u00edas de Archigram, como la Plug-in City, donde el edificio deja de ser un bloque cerrado para convertirse en un sistema de piezas intercambiables donde los trabajadores puedan interactuar de una forma m\u00e1s libre.',
  'De ah\u00ed surge la idea de los cubos flotantes: en vez de una oficina pesada y compacta, se propone un conjunto de m\u00f3dulos ligeros que parecen desprenderse del edificio y flotar sobre una plataforma elevada, dejando que el aire, la vegetaci\u00f3n y la luz entren entre ellos.',
  'Con esto se busca romper con la oficina tradicional, cerrada y monol\u00edtica, y proponer un espacio de trabajo m\u00e1s flexible, ligero y permeable con su entorno.',
]

const projectFacts = [
  { label: 'Superficie', value: '530 m2' },
  { label: 'Fecha', value: '2022' },
  { label: 'Estado', value: 'Proyecto' },
  { label: 'Cliente', value: 'Steelcase+ETSAM' },
  { label: 'Equipo', value: 'Sergio de Isidro' },
]

export default function TelefonicaProjectPage({ onBack, onNavigate }) {
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

      <ProjectsFilterBar activeFilter="interiors" />

      <div className="project-detail-layout">
        <div className="project-detail-visual">
          <img
            className="project-detail-image"
            src="/pages/proyectos/telefonica.png"
            alt="Panel del proyecto Oficinas en Edificio Telef\u00f3nica"
          />
        </div>

        <aside className="project-detail-sidebar">
          <h1>Oficinas en Edificio Telef\u00f3nica</h1>
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
