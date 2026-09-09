import './Footer.css'

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section">
          <h2>{props.title}</h2>
          <p>
            Um projeto desenvolvido para praticar os conceitos
            de desenvolvimento web com React.
          </p>
        </div>

        <div className="footer-section">
          <h3>Redes Sociais</h3>

          <div className="social-links">
            <a href="#">Instagram</a>
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Contato</h3>
          <p>Email: contato@projeto.com</p>
          <p>São Paulo - SP</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 - Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer