import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./componentes/Header";
import About from "./paginas/About";
import Home from "./paginas/Home";


function AppRoutes() {
  return (
  
    <BrowserRouter >
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
      
    </BrowserRouter>
  
  );
}

export default AppRoutes;
