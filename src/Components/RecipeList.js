import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import deleteIcon from "../assets/delete-icon.svg";
import { projectFirestore } from "../firebase/config";
// style
import "./RecipeList.css";

const RecipeList = ({ recipes }) => {
  const { mode } = useTheme();
  if (recipes.length === 0) {
    return <div className="error">No Recipes To Load.....</div>;
  }

  const handleClick = (id) => {
    projectFirestore.collection("recipes").doc(id).delete();
  };

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} minutes to make</p>
          <div>{recipe.method.substring(0, 50)}.....</div>
          <Link to={`recipes/${recipe.id}`}>Cook This</Link>
          <img
            className="delete"
            onClick={() => handleClick(recipe.id)}
            src={deleteIcon}
            alt="delete icon"
            style={{ fill: "green" }}
          />
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
