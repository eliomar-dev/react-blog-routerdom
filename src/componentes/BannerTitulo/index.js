import './BannerTitulo.css';

export default function BannerTitulo({titulo, imagemUrl}) {
    return (
        <article className='banner-titulo' >
            <div className='imagem' style={{backgroundImage:`url(${imagemUrl})`}}>
            </div>
            <h1>{titulo}</h1>  
        </article>
    )
}