import './Header.css';
import MenuLink from "../MenuLink";

export default function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <MenuLink to="/" className="link">Home</MenuLink>
          </li>
          <li>
            <MenuLink to="/about" className="link">Sobre Mim</MenuLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
