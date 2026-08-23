import { useLanguage } from '../context/LanguageContext'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'
import ProjectsFilterBar from './ProjectsFilterBar'

export default function ProjectDetailPage({ onBack, onNavigate, activeFilter, image, copy }) {
  const { language } = useLanguage()
  const content = copy[language]

  return (
    <section className="projects-page project-detail-page">
      <PageHeader activePage="projects" onBack={onBack} onNavigate={onNavigate} />
      <ProjectsFilterBar activeFilter={activeFilter} />
      <div className="project-detail-layout">
        <div className="project-detail-visual">
          <img className="project-detail-image" src={image} alt={content.alt} />
        </div>
        <aside className="project-detail-sidebar">
          <h1>{content.title}</h1>
          <p className="project-detail-location">{content.location}</p>
          <div className="project-detail-copy">
            {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="project-detail-meta">
            <h2>{content.details}</h2>
            <div className="project-detail-facts">
              {content.facts.map((fact) => (
                <div key={fact.label} className="project-detail-fact">
                  <p className="project-detail-fact-label">{fact.label}</p>
                  {fact.href ? <a className="project-detail-fact-link" href={fact.href} target="_blank" rel="noreferrer">{fact.value}</a> : <p className="project-detail-fact-value">{fact.value}</p>}
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
