import Banner from "componentes/Banner";
import Card from "componentes/Card";
import "./Home.css";
import { useEffect, useState } from "react";
// import posts from "json/posts.json";

export default function Home() {
  const [cards, setCards] = useState([]);


  async function fetchCards() {
    const response = await fetch("https://json-server-zeta-six.vercel.app/posts");
    const data = await response.json();
    setCards(data);
  }

  // se não invocar o fetchCards() através do useEffect(), haverá um loop
  // executando inúmeras vezes fetchCards(), porque esse componente é re-renderizado
  // a cada alteração do estado setCards()
  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div className="home">
      <Banner/>
      <div className="card-container">
        {cards.map((card) => (
          <Card key={card.id} titulo={card.titulo} imagemUrl={`/assets/posts/${card.id}/capa.png`} />
        ))}
      </div>
    </div>
  );
}
