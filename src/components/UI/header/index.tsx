import { FC } from "react";
import { Link } from "react-router-dom";

import "./index.css";

const Header: FC = () => {
  return (
    <header className="header">
      <Link className="header__title-link" to={"/"}>
        <h1>Get-Data.io</h1>
      </Link>
      <nav className="header__nav-menu">
        <ul className="nav-menu__list">
          <li className="nav-menu__item">
            <a href="/">Поиск</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
