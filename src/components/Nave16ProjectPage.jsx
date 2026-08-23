import { useState } from 'react'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'
import ProjectsFilterBar from './ProjectsFilterBar'

const projectParagraphs = [
  'El Rastro es una propuesta para Matadero Madrid que transforma la nave en una ciudad interior para artistas, inspirada en la memoria productiva del lugar y en la vida de los antiguos mercados y plazas del casco histórico. El proyecto recupera la idea de comunidad, intercambio y creación compartida, entendiendo que lo que da identidad a un espacio no son solo sus edificios, sino las relaciones, recorridos y experiencias que ocurren dentro de él.',
  'La intervención organiza talleres, viviendas, espacios expositivos y lugares de encuentro para pintores, escultores, escritores y cineastas a través de una trama aparentemente caótica que favorece el cruce constante entre disciplinas. La iluminación aprovecha la estructura existente, los materiales dialogan con el carácter industrial de Matadero y los antiguos raíles se reinterpretan como un sistema que conecta todos los espacios entre sí.',
  'El resultado es un entorno vivo, ruidoso, luminoso y cambiante, donde residentes y visitantes comparten calles, plazas y procesos creativos, construyendo una identidad común entre arte, arquitectura y ciudad.',
]

const projectFacts = [
  { label: 'Superficie', value: '3000 m2' },
  { label: 'Fecha', value: '2024' },
  { label: 'Estado', value: 'Proyecto' },
  { label: 'Cliente', value: 'Matadero Madrid' },
  { label: 'Equipo', value: 'Sergio de Isidro + José Luis de Isidro' },
]

export default function Nave16ProjectPage({ onBack, onNavigate }) {
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
            src="/pages/proyectos/nave_16.svg"
            alt="Panel del proyecto Residencia artística en Nave 16"
          />
        </div>

        <aside className="project-detail-sidebar">
          <h1>Residencia artística en Nave 16</h1>
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
