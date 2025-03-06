import Botao from "componentes/Botao";
import { Link } from "react-router";
import "./Card.css";

export default function Card({ post }) {

  return (
    <Link to={`/posts/${post.id}`}>
      <div className="card">
        <div className="card-imagem">
          <img src={`/assets/posts/${post.id}/capa.png`} alt={post.titulo} />
        </div>
        <h2>{post.titulo}</h2>
        <Botao>Ler</Botao>
      </div>
    </Link>
  );
}
