import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./index.css";

const Header: FC = () => {
  const [lastRequest, setLastRequest] = useState(false);

  useEffect(() => {
    // Получение данных из localStorage
    const retString: any = localStorage.getItem("vacansys");
    const retArr = JSON.parse(retString);

    if (retArr !== null) {
      if (retArr.length > 0) {
        setLastRequest(true);
      } else {
        setLastRequest(false);
      }
    }
  }, []);

  return (
    <header className="header">
      <Link className="header__title-link" to={"/"}>
        <h1>Get-Data.io</h1>
      </Link>
      <nav className="header__nav-menu">
        <ul className="nav-menu__list">
          {lastRequest ? (
            <li className="nav-menu__item">
              <Link to={"/viewjob"}>Прошлый запрос</Link>
            </li>
          ) : null}
          <li className="nav-menu__item">
            <Link to={"/"}>Поиск</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
