import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./componentes/Header";
import About from "./paginas/About";
import Home from "./paginas/Home";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/Post";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<PaginaPadrao />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="posts/:id" element={<Post />} />
        </Route>
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
      
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
