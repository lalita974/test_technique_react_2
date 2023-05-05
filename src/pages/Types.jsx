import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Cardtype from "../components/Cardtype";

const Types = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/type/");
        setData(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="container">
      <div className="list-types">
        <h1>Types</h1>
        <div className="list-types-cards">
          {data.map((elem, index) => {
            return (
              <article key={index}>
                <Cardtype url={elem.url} />
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Types;
