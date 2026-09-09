import Box from '../../Components/Box';
import Img1 from "../../assets/img/box-1.jpg";
import Img2 from "../../assets/img/box-2.jpg";

const boxes = [
  {
    title: "Primeiro card",
    description: "Um exemplo simples de componente em React.",
    imagem: Img1,
  },
  {
    title: "Segundo card",
    description: "Os dados podem ser organizados em uma lista.",
    imagem: Img2,
  },
];

export default function Home() {
  return (
    <main className="container">
      <h1>Minha página inicial</h1>
      <section className="d-flex">
        {boxes.map((box) => (
          <Box key={box.title} {...box} />
        ))}
      </section>
    </main>
  );
}
