import { Link } from "react-router-dom";

import "./Navbar.scss";

export const Navbar = () => {
  return (
    <nav>
      <div className="nav">
        <a href="/" className="logo">
          MERN todo app
        </a>
        <ul className="nav__list">
          <li>
            <Link to="/login">Log in</Link>
          </li>
          <li>
            <Link to="/register">Sing up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
