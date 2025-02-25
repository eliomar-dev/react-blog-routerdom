import { Link, NavLink, useLocation } from "react-router";
import "./MenuLink.css";

export default function MenuLink({ children, to }) {
//   const location = useLocation();

  return (
    // <Link to={to} className={location.pathname === to ? "sublinhado" : ""}>
    //   {children}
    // </Link>
    <NavLink to={to} className={({isActive}) => isActive ? "sublinhado" : ""}>
      {children}
    </NavLink>
  );
}
