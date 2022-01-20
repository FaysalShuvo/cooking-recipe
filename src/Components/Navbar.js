import React from "react";
import { Link } from "react-router-dom";
// style
import "./Navbar.css";
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <div className="navbar">
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
