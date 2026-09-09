const Header = (props) => {
  const headerStyle = {
    backgroundColor: '#BEBEBE',
    padding: '20px',
    textAlign: 'center',
    borderBottom: '2px solid #696969',
  };

  const titleStyle = {
    fontSize: '24px',
    margin: '0',
    color: '#191970',
  };
  return (
    <header style={headerStyle} id="inicio">
      <h1 style={titleStyle}>{props.title}</h1>
      <nav>
        <a href="#count">Contador</a>{' '}
        <a href="#box">Boxes</a>{' '}
        <a href="#img-card">Imagem</a>{' '}
        <a href="#banner">Banner</a>{' '}
        <a href="#card">Card</a>{' '}
        <a href="#carro">Carro</a>{' '}
        <a href="#footer">Rodapé</a>
      </nav>
    </header>
  );
}

export default Header;
