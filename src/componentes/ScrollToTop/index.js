import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  //rola a página para o início sempre que renderizar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); //passa pathname, pois sempre que mudar o pathname, o useEffect é invocado, logo, pra todas as páginas será escrolada para o inicio

  return null;
}
