export default function PageFooter() {
  return (
    <footer className="projects-page-footer">
      <div className="projects-page-footer-left">
        <p className="projects-page-footer-title">ESTUDIO 2 28</p>
        <p>28047, Madrid, España</p>
        <p>(+34) 633 878 755</p>
      </div>

      <div className="projects-page-footer-right">
        <button type="button" className="projects-page-footer-link">
          Instagram
        </button>
        <button type="button" className="projects-page-footer-link">
          Linkedin
        </button>
        <button type="button" className="projects-page-footer-link is-muted">
          Aviso legal
        </button>
        <button type="button" className="projects-page-footer-link is-muted">
          Política de privacidad
        </button>
        <button type="button" className="projects-page-footer-link is-muted">
          Política de cookies
        </button>
      </div>
    </footer>
  )
}
