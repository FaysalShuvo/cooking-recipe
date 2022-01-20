import React from "react";
import { useFetch } from "../../hooks/useFetch";
// style
import "./Home.css";
// components
import RecipeList from "../../Components/RecipeList";


const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:3000/recipes");
  return (
    <>
      <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div className="loading">loading....</div>}
        {data && <RecipeList recipes={data} />}
      </div>
    </>
  );
};

export default Home;
