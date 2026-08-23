import { useLanguage } from '../context/LanguageContext'

export default function PageFooter() {
  const { language } = useLanguage()
  const copy = language === 'es' ? { location: '28047, Madrid, Espa\u00f1a', legal: 'Aviso legal', privacy: 'Pol\u00edtica de privacidad', cookies: 'Pol\u00edtica de cookies' } : { location: '28047, Madrid, Spain', legal: 'Legal notice', privacy: 'Privacy policy', cookies: 'Cookie policy' }
  return <footer className="projects-page-footer"><div className="projects-page-footer-left"><p className="projects-page-footer-title">ESTUDIO 2 28</p><p>{copy.location}</p><p>(+34) 633 878 755</p></div><div className="projects-page-footer-right"><button type="button" className="projects-page-footer-link">Instagram</button><button type="button" className="projects-page-footer-link">Linkedin</button><button type="button" className="projects-page-footer-link is-muted">{copy.legal}</button><button type="button" className="projects-page-footer-link is-muted">{copy.privacy}</button><button type="button" className="projects-page-footer-link is-muted">{copy.cookies}</button></div></footer>
}
