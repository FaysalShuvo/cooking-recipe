import React, { useEffect, useState } from "react";
import { projectFirestore } from "../../firebase/config";
// style
import "./Home.css";
// components
import RecipeList from "../../Components/RecipeList";

const Home = () => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

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
          setData(results);
          setIsPending(false);
        }
      },
      (error) => {
        setError(error.message);
        setIsPending(false);
      }
    );

    return () => unsub();
  }, []);

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
