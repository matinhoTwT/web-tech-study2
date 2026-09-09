import { useState } from "react";
import "./faq.css";

const perguntas = [
    ["O que é esta aplicação?", "É uma aplicação feita com React."],
    ["A aplicação é responsiva?", "Sim, ela pode ser usada em diferentes telas."],
    ["Onde os dados ficam salvos?", "Os dados desta página são exemplos fixos."],
];

export default function Faq() {
    const [aberta, setAberta] = useState(null);

    return (
        <main className="faq-container">
            <h1>Perguntas frequentes</h1>
            {perguntas.map(([pergunta, resposta], index) => (
                <section className="faq-item" key={pergunta}>
                    <button type="button" onClick={() => setAberta(aberta === index ? null : index)}>
                        {pergunta}
                    </button>
                    {aberta === index && <p>{resposta}</p>}
                </section>
            ))}
        </main>
    );
}