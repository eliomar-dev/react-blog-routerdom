import BannerTitulo from "componentes/BannerTitulo";
import "./Post.css";
import { useParams } from "react-router";
import posts from "json/db.json";
import React from "react";
import ReactMarkdown from "react-markdown";

export default function Post() {
  const params = useParams();
  const post = posts.find((post) => post.id === Number(params.id));

  return (
    <section>
      <BannerTitulo
        titulo={post.titulo}
        imagemUrl={`/assets/posts/${post.id}/capa.png`}
      />
      <div className="post-markdown-container">
        <ReactMarkdown>{post.texto}</ReactMarkdown>
      </div>
    </section>
  );
}
