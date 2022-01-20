import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
// style
import "./Navbar.css";
import Searchbar from "./Searchbar";

const Navbar = () => {
  const { color } = useTheme();

  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/">
          <h1>Cooking Recipe</h1>
        </Link>
        <div>
          <Searchbar />
          <div>
            <Link to="create-recipe">Create Recipe</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
