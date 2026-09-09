import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
    return (
        <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/sobre">Sobre</Link>
        </nav>
    );
}