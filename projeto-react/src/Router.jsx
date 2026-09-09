import { Route, Routes } from "react-router-dom";
import Faq from "./Pages/Faq";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Sobre from "./Pages/Sobre";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}