import Banner from "componentes/Banner";
import Card from "componentes/Card";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="card-container">
      <Card titulo="Card 1" imagemUrl="https://via.placeholder.com/300" />
      <Card titulo="Card 2" imagemUrl="https://via.placeholder.com/300" />
      <Card titulo="Card 3" imagemUrl="https://via.placeholder.com/300" />
      <Card titulo="Card 4" imagemUrl="https://via.placeholder.com/300" />
      </div>
    </div>
  );
}
