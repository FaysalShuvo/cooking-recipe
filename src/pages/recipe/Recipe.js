import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { projectFirestore } from "../../firebase/config";
// style
import "./Recipe.css";

const Recipe = () => {
  const { id } = useParams();
  let navigate = useNavigate();

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);

    projectFirestore
      .collection("recipes")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setIsPending(false);
          setData(doc.data());
        } else {
          setIsPending(false);
          setError("could not fetch recipe");
        }
      });
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [error, navigate]);
  return (
    <div className="recipe">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading.....</p>}
      {data && (
        <>
          <h2 className="page-title">{data.title}</h2>
          <p>Takes {data.cookingTime} minutes to cook.</p>
          <ul>
            {data.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="method">{data.method}</p>
        </>
      )}
    </div>
  );
};

export default Recipe;
