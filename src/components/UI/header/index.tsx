import { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <div>
      Header <Link to={"/"}>На главную</Link> <Link to={"/test"}>test</Link>
    </div>
  );
};

export default Header;
