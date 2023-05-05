import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="pokemon" />
        </Link>
        <div>
          <Link to="/pokemon">
            <button>Pokemons</button>
          </Link>
          <Link to="/type">
            <button>Types</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
