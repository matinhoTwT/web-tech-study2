import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Banner from "./Components/Banner/Banner";
import Count from "./Components/Count";
import Box from "./Components/Box";
import ImgCard from "./Components/ImgCard";
import Card from "./Components/Card";
import Carro from "./Components/Carro";

function App() {
  return (
    <>
      <Header title="Meu site" />

      <Count />

      <Box />

      <ImgCard caption="Lorem ipsum dolor sit amet," />

      <Banner>
        <h1>Bem-Vindo ao meu site</h1>
        <p>Aqui você encontrará conteúdos sobre desenvolvimento web.</p>
      </Banner>

      <Card />

      <Carro />

      <Footer title="new Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
    </>
  );
}

export default App;
