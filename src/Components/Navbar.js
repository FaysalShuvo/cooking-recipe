import React from "react";
import { Link } from "react-router-dom";
// style
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <Link to="/">
          <h1>Cooking Recipe</h1>
        </Link>
        <Link to="create-recipe">Create Recipe</Link>
      </nav>
    </div>
  );
};

export default Navbar;
