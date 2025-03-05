import './Botao.css';

export default function Botao({ children, tamanho, aoClicar }) {
  return (
    <button onClick={aoClicar} className={`botao ${tamanho}`} >
      {children}
    </button>
  );
}