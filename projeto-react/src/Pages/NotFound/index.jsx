import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <main className="container">
            <h1>Página não encontrada</h1>
            <Link to="/">Voltar para a Home</Link>
        </main>
    );
}