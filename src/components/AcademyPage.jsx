import { useState } from 'react'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'

export default function AcademyPage({ activePage, onBack, onNavigate }) {
  const [isSpanish, setIsSpanish] = useState(false)

  return (
    <section className="projects-page academy-page">
      <PageHeader
        activePage={activePage}
        isSpanish={isSpanish}
        onBack={onBack}
        onNavigate={onNavigate}
        onSetSpanish={setIsSpanish}
      />

      <div className="academy-page-stage">
        <div className="academy-page-message">Coming soon...</div>
      </div>

      <PageFooter />
    </section>
  )
}
