import { useState } from 'react'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'

const contactGroups = [
  ['Calle Camarena 228 4\u00baC', '28047 Madrid', 'T. (+34) 633 878 755', 'info@228.es'],
  ['CV - Portfolios:', 'info@228.es'],
  ['Publicaciones y prensa:', 'info@228.es'],
]

export default function ContactPage({ activePage, onBack, onNavigate }) {
  const [isSpanish, setIsSpanish] = useState(false)

  return (
    <section className="projects-page contact-page">
      <PageHeader
        activePage={activePage}
        isSpanish={isSpanish}
        onBack={onBack}
        onNavigate={onNavigate}
        onSetSpanish={setIsSpanish}
      />

      <div className="contact-page-content">
        <img
          className="contact-page-image"
          src="/pages/img_contacto.png"
          alt=""
          aria-hidden="true"
        />

        <div className="contact-page-copy">
          <h1>Estudio 2 28</h1>

          <div className="contact-page-groups">
            {contactGroups.map((group, index) => (
              <div key={index} className="contact-page-group">
                {group.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <PageFooter />
    </section>
  )
}
