import "./Banner.css";

export default function Banner() {
  return (
    <div className="banner">
      
      <div  className="textos-content">
        <h1>Olá Mundo!</h1>
        <p>
          Boas vindas ao meu espaço pessoal! Eu sou o Profº Eliomar Campos,
          instrutor de Programação no IFBA. Aqui compartilho vários
          conhecimentos, espero que aprenda algo novo :)
        </p>
      </div>

      <div className="imagem-content">
        <div className="circulo-gradiente"></div>
        <img
          src="https://github.com/eliomargc.png"
          alt="Logo IFBA"
        />
        </div>
    </div>
  );
}
