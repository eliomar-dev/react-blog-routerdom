import Botao from "componentes/Botao";
import "./Card.css";

export default function Card({ titulo, imagemUrl }) {
  return (
    <div className="card">
      <div className="card-imagem">
        <img src={imagemUrl} alt={titulo} />
      </div>
      <h2>{titulo}</h2>
      <Botao>Ler</Botao>
    </div>
  );
}
