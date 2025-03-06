import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./componentes/Header";
import About from "./paginas/About";
import Home from "./paginas/Home";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontrada from "paginas/NaoEncontrada";
import ScrollToTop from "componentes/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />

      {/* Routes é semelhante ao Switch da versão 5 do React Router */}
      <Routes>
        {/* Rotas aninhadas em uma rota pai
        O componente PaginaPadrao será renderizado em todas as rotas filhas
        O componente Home será o primeiro renderizado junto com o pai PaginaPadrao
        O componente About será renderizado somente quando a rota for /about, mas apenas junto com o pai PaginaPadrao */}
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>

        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
