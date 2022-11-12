import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header__container">
      <Link to="/">
        <img alt="logo Kasa" src="./img/logo.png" />
      </Link>
      <nav className="header__container--navigation">
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </nav>
    </div>
  );
}

export default Header;
