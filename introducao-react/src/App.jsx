import { useState } from 'react'
import Header from './Components/Header.jsx'
import Card from './Components/Card.jsx'
import Banner from './Components/Banner.jsx'
import Footer from './Components/footer.jsx'
import ImgCard from './Components/ImgCard.jsx'
import GameCard from './Components/GameCard.jsx'
import CarroCard from './Components/CarroCard.jsx'
import './App.css'

function App() {
  const [pagina, setPagina] = useState('inicio')

  const perguntas = [
    {
      pergunta: 'O que é este projeto?',
      resposta:
        'Este projeto foi desenvolvido em React para praticar conceitos de desenvolvimento web, componentes, organização de páginas e interação com o usuário.',
    },
    {
      pergunta: 'Quais tecnologias foram utilizadas?',
      resposta:
        'A aplicação utiliza React, JavaScript, HTML e CSS. O projeto também utiliza Vite para facilitar o desenvolvimento e execução da aplicação.',
    },
    {
      pergunta: 'O que posso encontrar no site?',
      resposta:
        'O site apresenta conteúdos relacionados a jogos, carros e desenvolvimento web, além de uma página Sobre e uma seção de perguntas frequentes.',
    },
    {
      pergunta: 'O site funciona em celulares?',
      resposta:
        'Sim. A interface foi desenvolvida de forma responsiva para se adaptar a computadores, tablets e celulares.',
    },
    {
      pergunta: 'Para que serve o FAQ?',
      resposta:
        'O FAQ reúne as principais dúvidas sobre a aplicação. As perguntas podem ser pesquisadas e abertas individualmente para visualizar suas respostas.',
    },
  ]

  const [busca, setBusca] = useState('')
  const [aberta, setAberta] = useState(null)

  const perguntasFiltradas = perguntas.filter((item) =>
    item.pergunta.toLowerCase().includes(busca.toLowerCase())
  )

  const renderConteudo = () => {
    if (pagina === 'sobre') {
      return (
        <main className="sobre-page">
          <section className="sobre-hero">
            <div>
              <span className="sobre-tag">SOBRE O PROJETO</span>
              <h1>Conheça o nosso projeto</h1>
              <p>
                Uma aplicação desenvolvida para colocar em prática os
                principais conceitos do desenvolvimento web com React.
              </p>
            </div>

            <div className="sobre-icon">⚛️</div>
          </section>

          <section className="sobre-grid">
            <article className="sobre-card">
              <span className="card-icon">💡</span>
              <h2>Objetivo</h2>
              <p>
                O objetivo do projeto é desenvolver uma interface moderna,
                organizada e responsiva, aplicando conceitos aprendidos
                durante as aulas.
              </p>
            </article>

            <article className="sobre-card">
              <span className="card-icon">⚛️</span>
              <h2>React</h2>
              <p>
                A aplicação utiliza componentes React para organizar os
                elementos da interface e facilitar a manutenção do código.
              </p>
            </article>

            <article className="sobre-card">
              <span className="card-icon">📱</span>
              <h2>Responsividade</h2>
              <p>
                O layout foi pensado para funcionar corretamente em diferentes
                tamanhos de tela, incluindo computadores, tablets e celulares.
              </p>
            </article>
          </section>

          <section className="sobre-tecnologias">
            <h2>Tecnologias utilizadas</h2>

            <div className="tech-list">
              <span>React</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Vite</span>
            </div>
          </section>
        </main>
      )
    }

    if (pagina === 'faq') {
      return (
        <main className="faq-page">
          <section className="faq-header">
            <span className="sobre-tag">CENTRAL DE AJUDA</span>
            <h1>Perguntas Frequentes</h1>
            <p>
              Pesquise e encontre respostas para as principais dúvidas sobre
              nossa aplicação.
            </p>

            <div className="faq-search">
              <span>🔍</span>
              <input
                type="text"
                placeholder="Pesquisar uma dúvida..."
                value={busca}
                onChange={(event) => setBusca(event.target.value)}
              />
            </div>
          </section>

          <section className="faq-list">
            {perguntasFiltradas.length > 0 ? (
              perguntasFiltradas.map((item, index) => (
                <article
                  className={`faq-item ${
                    aberta === index ? 'faq-aberta' : ''
                  }`}
                  key={item.pergunta}
                >
                  <button
                    className="faq-question"
                    onClick={() =>
                      setAberta(aberta === index ? null : index)
                    }
                  >
                    <span>{item.pergunta}</span>
                    <span className="faq-arrow">
                      {aberta === index ? '−' : '+'}
                    </span>
                  </button>

                  {aberta === index && (
                    <div className="faq-answer">
                      <p>{item.resposta}</p>
                    </div>
                  )}
                </article>
              ))
            ) : (
              <div className="faq-empty">
                <span>🔎</span>
                <h2>Nenhuma pergunta encontrada</h2>
                <p>Tente pesquisar utilizando outras palavras.</p>
              </div>
            )}
          </section>
        </main>
      )
    }

    return (
      <>
        <ImgCard caption="Explore nosso conteúdo" />

        <Banner>
          <h1>Bem-Vindo ao meu site</h1>
          <p>Aqui você encontrará conteúdos sobre desenvolvimento web.</p>
        </Banner>

        <Card />

        <GameCard name="Fortnite" genre="Battle Royale">
          <p>
            Um jogo de batalha onde você pode explorar, construir e lutar para
            ser o último sobrevivente.
          </p>
        </GameCard>

        <CarroCard />
      </>
    )
  }

  return (
    <>
      <Header
        title="Meu Projeto React"
        paginaAtual={pagina}
        onNavigate={setPagina}
      />

      {renderConteudo()}

      <Footer title="Meu Projeto React" />
    </>
  )
}

export default App