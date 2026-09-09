import './Header.css'

const Header = ({ title, paginaAtual, onNavigate }) => {
  return (
    <header className="header">
      <div className="header-content">
        <button
          className="logo"
          onClick={() => onNavigate('inicio')}
          aria-label="Ir para o início"
        >
          <span className="logo-icon">🎮</span>
          <span>{title}</span>
        </button>

        <nav className="nav">
          <button
            className={paginaAtual === 'inicio' ? 'active' : ''}
            onClick={() => onNavigate('inicio')}
          >
            Início
          </button>

          <button
            className={paginaAtual === 'sobre' ? 'active' : ''}
            onClick={() => onNavigate('sobre')}
          >
            Sobre
          </button>

          <button
            className={paginaAtual === 'faq' ? 'active' : ''}
            onClick={() => onNavigate('faq')}
          >
            FAQ
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header