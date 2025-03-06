import BannerTitulo from "componentes/BannerTitulo";
import Card from "componentes/Card";
import PaginaPadrao from "componentes/PaginaPadrao";
import posts from "json/db.json";
import NaoEncontrada from "paginas/NaoEncontrada";
import ReactMarkdown from "react-markdown";
import { Route, Routes, useParams } from "react-router";
import "./Post.css";
import { useEffect } from "react";

export default function Post() {
  const params = useParams();
  const post = posts.find((post) => post.id === Number(params.id));
  const postsRecomendados = posts
    .filter((e) => e.id !== post.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

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
                <h1>Outros posts que você pode gostar:</h1>
              </div>
              <article className="cards-container">
                {postsRecomendados.map((p) => (
                  <Card key={p.id} post={p} />
                ))}
              </article>
            </section>
          }
        />
      </Route>
    </Routes>
  );
}
