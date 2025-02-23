import { BrowserRouter, Link, Route, Routes } from "react-router";
import Home from "./paginas/Home";
import About from "./paginas/About";

function AppRoutes() {
  return (
    <BrowserRouter>
      <div>Header</div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
      <div>Footer</div>
    </BrowserRouter>
  );
}

export default AppRoutes;
