import Header from "./Components/Header"
import Nav from "./Components/Nav"
import Router from "./Router"
import "./global.css"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Router />
    </BrowserRouter>
  )
}

export default App