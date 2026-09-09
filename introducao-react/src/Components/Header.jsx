import './Header.css'

const Header = (props) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <span className="logo-icon">🎮</span>
          <span>{props.title}</span>
        </div>

        <nav className="nav">
          <a href="#inicio">Início</a>
          <a href="#jogos">Jogos</a>
          <a href="#carros">Carros</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>
    </header>
  )
}

export default Header