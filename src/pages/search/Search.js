import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import RecipeList from "../../Components/RecipeList";
// style
import "./Search.css";
import { projectFirestore } from "../../firebase/config";


const Search = () => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  useEffect(() => {
    setIsPending(true);

    const unsub = projectFirestore.collection("recipes").onSnapshot(
      (snapshot) => {
        if (snapshot.empty) {
          setError("no recipes to load");
          setIsPending(false);
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });

          const recipes = results.filter((recipe) =>
            recipe.title.includes(query)
          );
          setData(recipes);

          setIsPending(false);
        }
      },
      (error) => {
        setError(error.message);
        setIsPending(false);
      }
    );

    return () => unsub();
  }, [query]);

  return (
    <div className="search-recipe">
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">loading......</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};

export default Search;
