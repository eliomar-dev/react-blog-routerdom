import Banner from "componentes/Banner";
import Card from "componentes/Card";
import "./Home.css";
import { useEffect, useState } from "react";
import posts from "json/db.json"; // importando o arquivo db.json que contém os dados dos cards da home para simular uma requisição HTTP

export default function Home() {

  // CASO QUEIRA FAZER REQUISIÇÃO HTTP
  // const [cards, setCards] = useState([]);
  // async function fetchCards() {
  //   const response = await fetch("https://json-server-zeta-six.vercel.app/posts");
  //   const data = await response.json();
  //   setCards(data);
  // }
  // se não invocar o fetchCards() através do useEffect(), haverá um loop
  // executando inúmeras vezes fetchCards(), porque esse componente é re-renderizado
  // a cada alteração do estado setCards()
  // useEffect(() => {
  //   fetchCards();
  // }, []);

  return (
    <section className="home">
      <div className="card-container">
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
