import { useState } from 'react'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'
import ProjectsFilterBar from './ProjectsFilterBar'

const projectParagraphs = [
  'Este proyecto está basado en el concepto del Metabolismo japonés de Kisho Kurokawa (la arquitectura como organismo vivo, formado por cápsulas independientes que se pueden montar, sustituir o combinar sin depender de una estructura fija) y en las utopías de Archigram, como la Plug-in City, donde el edificio deja de ser un bloque cerrado para convertirse en un sistema de piezas intercambiables donde los trabajadores puedan interactuar de una forma más libre.',
  'De ahí surge la idea de los cubos flotantes: en vez de una oficina pesada y compacta, se propone un conjunto de módulos ligeros que parecen desprenderse del edificio y flotar sobre una plataforma elevada, dejando que el aire, la vegetación y la luz entren entre ellos.',
  'Con esto se busca romper con la oficina tradicional, cerrada y monolítica, y proponer un espacio de trabajo más flexible, ligero y permeable con su entorno.',
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
            alt="Panel del proyecto Oficinas en Edificio Telefónica"
          />
        </div>

        <aside className="project-detail-sidebar">
          <h1>Oficinas en Edificio Telefónica</h1>
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
