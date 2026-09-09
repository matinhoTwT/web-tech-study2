import "./carro.css";

function Carro() {
  const carro = {
    nome: "Nissan Skyline GT-R R34",
    ano: 1999,
    motor: "2.6L Biturbo",
    potencia: "280 cv",
    categoria: "Esportivo"
  };

  return (
    <section className="carro">
      <h2>{carro.nome}</h2>

      <div className="carro-info">
        <div>
          <span>Ano</span>
          <strong>{carro.ano}</strong>
        </div>

        <div>
          <span>Motor</span>
          <strong>{carro.motor}</strong>
        </div>

        <div>
          <span>Potência</span>
          <strong>{carro.potencia}</strong>
        </div>

        <div>
          <span>Categoria</span>
          <strong>{carro.categoria}</strong>
        </div>
      </div>
    </section>
  );
}

export default Carro;
