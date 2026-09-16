import { useEffect, useState } from 'react'

function Sobre() {
    const [sobre, setSobre] = useState(null)
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState('')

    useEffect(() => {
        const carregarSobre = async () => {
            try {
                const resposta = await fetch('/api/sobre.json')

                if (!resposta.ok) {
                    throw new Error('Não foi possível carregar os dados da página.')
                }

                const dados = await resposta.json()
                setSobre(dados)
            } catch (error) {
                setErro(error.message)
            } finally {
                setCarregando(false)
            }
        }

        carregarSobre()
    }, [])

    if (carregando) {
        return (
            <main className="sobre-page">
                <p className="sobre-status">Carregando informações...</p>
            </main>
        )
    }

    if (erro) {
        return (
            <main className="sobre-page">
                <p className="sobre-status sobre-erro">{erro}</p>
            </main>
        )
    }

    return (
        <main className="sobre-page">
            <section className="sobre-hero">
                <div>
                    <span className="sobre-tag">SOBRE O PROJETO</span>
                    <h1>{sobre.title}</h1>
                    <p>{sobre.content}</p>
                </div>

                <div className="sobre-icon">⚛️</div>
            </section>

            <section className="sobre-grid">
                <article className="sobre-card">
                    <span className="card-icon">💡</span>
                    <h2>Objetivo</h2>
                    <p>
                        O objetivo do projeto é desenvolver uma interface moderna,
                        organizada e responsiva, aplicando conceitos aprendidos durante as
                        aulas.
                    </p>
                </article>

                <article className="sobre-card">
                    <span className="card-icon">⚛️</span>
                    <h2>React</h2>
                    <p>
                        A aplicação utiliza componentes React para organizar os elementos da
                        interface e facilitar a manutenção do código.
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

export default Sobre
