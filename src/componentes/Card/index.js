import "./Card.css";

export default function Card({ titulo, imagemUrl }) {
  return (
    <div className="card">
      <div className="card-imagem">
        <img src={imagemUrl} alt={titulo} />
      </div>
      <h2>{titulo}</h2>
      <button>Ver mais</button>
    </div>
  );
}
