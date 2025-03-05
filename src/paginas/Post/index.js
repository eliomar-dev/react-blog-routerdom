import BannerTitulo from "componentes/BannerTitulo";
import "./Post.css";
import { Route, Routes, useParams } from "react-router";
import posts from "json/db.json";
import React from "react";
import ReactMarkdown from "react-markdown";
import NaoEncontrada from "paginas/NaoEncontrada";
import Header from "componentes/Header";
import Banner from "componentes/Banner";
import PaginaPadrao from "componentes/PaginaPadrao";

export default function Post() {
  const params = useParams();
  const post = posts.find((post) => post.id === Number(params.id));

  if (!post) {
    return <NaoEncontrada />;
  }

  return (

    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route
          index
          element={
            <section>
              <BannerTitulo
                titulo={post.titulo}
                imagemUrl={`/assets/posts/${post.id}/capa.png`}
              />
              <div className="post-markdown-container">
                <ReactMarkdown>{post.texto}</ReactMarkdown>
              </div>
            </section>
          }
        />
      </Route>
    </Routes>
  );
}
