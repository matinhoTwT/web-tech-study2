import Header from './Components/Header.jsx'
import Card from './Components/Card.jsx'
import Banner from './Components/Banner.jsx'
import Footer from './Components/footer.jsx'
import ImgCard from './Components/ImgCard.jsx'
import './Components/Img.css'
import GameCard from './Components/GameCard.jsx'
import CarroCard from './Components/CarroCard.jsx'

function App() {
  return (
    <>
      <Header title="Meu Projeto React" />

      <ImgCard caption="Lorem ipsum dolor sit amet," />

      <Banner>
        <h1>Bem-Vindo ao meu site</h1>
        <p>Aqui você encontrará conteúdos sobre desenvolvimento web.</p>
      </Banner>

      <Card />

      <GameCard name="Fortnite" genre="Battle Royale">
        <p>
          Um jogo de batalha onde você pode explorar, construir e lutar
          para ser o último sobrevivente.
        </p>
      </GameCard>

      <CarroCard />

      <Footer title="Meu Projeto React" />
    </>
  )
}

export default App