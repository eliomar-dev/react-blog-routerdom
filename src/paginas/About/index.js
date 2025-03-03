import BannerTitulo from "componentes/BannerTitulo";
import "./About.css";

export default function About() {
  return (
    <section>
      <BannerTitulo titulo="Sobre Mim" imagemUrl="/assets/posts/1/capa.png" />
      <div className="about">
        <h3 className="subtitulo">Olá, eu sou o Eliomar Campos!</h3>

        <img
          src="/assets/foto-sobre-mim/eu.jpg"
          alt="Foto de Eliomar Sorrindo"
        />

        <p>
          Oi, tudo bem? Eu sou instrutor de Front-end no IFBA e estou feliz de
          te ver por aqui.
        </p>
        <p>
          Minha história com programação começou no Instituto Federal da Bahia
          (IFBA), quando fiz o ensino médio integrado ao curso de Informática.
          Eu aprendi lógica de programação e o básico de várias linguagens, como
          PHP, Python, Java, mas sem aprofundar muito em cada uma delas. Eu
          gostava muito de estudar programação, mas na época não fazia ideia de
          que trabalharia com isso hoje.
        </p>
        <p>
          No ensino superior, escolhi cursar Sistemas de Informação na Faculdade
          Sete de Setembro (FASETE). Lá eu consegui entrar no PET (Programa de
          Educação Tutorial), um grupo acadêmico que contribui de diversas
          formas para o curso. Lá eu tive a oportunidade de estudar
          desenvolvimento web para ser um dos mantenedores do site deles.
        </p>
        <p>
          Com isso tive minha experiência de dev mais próxima da realidade, com
          prazos de implementação para o site, e aprendi muito enquanto
          codificava.
        </p>
        <p></p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam
          varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus
          magna felis sollicitudin mauris. Integer in mauris eu nibh euismod
          gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis
          risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue,
          eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas
          fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla
          a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis,
          neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing
          sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque
          nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus
          quis, laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis,
          molestie eu, feugiat in, orci. In hac habitasse platea dictumst.
        </p>
        <p>
          Quisque vestibulum augue sit amet metus. Aenean viverra sapien vel
          nisl sodales consequat. Nulla facilisi. Aenean nec eros. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          Curae; Proin vel ante a orci tempus eleifend ut et magna. Lorem ipsum
          dolor sit amet, consectetuer adipiscing elit. Vivamus lacinia odio
          vitae vestibulum. Vestibulum dapibus, mauris nec malesuada fames ac
          turpis velit, rhoncus eu, luctus et interdum adipiscing wisi.
        </p>
        <p>
          Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor
          fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa
          ac turpis faucibus orci luctus non, consectetur et erat. Morbi
          malesuada nulla nec neque. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. In hac habitasse platea dictumst. Fusce convallis,
          mauris imperdiet gravida bibendum, nisl turpis suscipit mauris, sed
          placerat ipsum ligula sed mauris. Cras dictum. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas.
        </p>
        <p>
          Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec
          luctus magna felis sollicitudin mauris. Integer in mauris eu nibh
          euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec
          lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor
          congue, eros est euismod turpis, id tincidunt sapien risus a quam.
          Maecenas fermentum consequat mi. Donec fermentum. Pellentesque
          malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget,
          consequat quis, neque.
        </p>
      </div>
    </section>
  );
}
