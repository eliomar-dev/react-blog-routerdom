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

      <Routes>
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
