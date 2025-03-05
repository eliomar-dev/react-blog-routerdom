import Botao from "componentes/Botao";
import "./NaoEncontrada.css";
import erro404 from "assets/erro_404.png";
import { useNavigate } from "react-router";

export default function NaoEncontrada() {

    const navigate = useNavigate();
    function voltarRota(){
        navigate(-1);
    }

  return (
    <>
      <div className="conteudoContainer">
        <span className="texto404">404</span>
        <h1 className="titulo">Ops! Página não encontrada.</h1>
        <p className="paragrafo">
          Tem certeza de que era isso que você estava procurando?
        </p>
        <p className="paragrafo">
          Aguarde uns instantes e recarregue a página, ou volte para a página
          inicial.
        </p>
        <div className="botaoContainer">
          <Botao aoClicar={voltarRota} tamanho="lg">Voltar</Botao>
        </div>
        <img
          className="imagemCachorro"
          src={erro404}
          alt="cachorro de óculos e vestido como humano"
        />
      </div>

      <div className="espacoEmBranco"></div>
    </>
  );
}
