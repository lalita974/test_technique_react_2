import axios from "axios";
import { useState, useEffect } from "react";
import Cardpokemon from "../components/Cardpokemon";

const Pokemons = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
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
      <div className="list-pokemons">
        <h1>Pokemons</h1>
        <div className="list-pokemons-cards">
          {data.map((elem, index) => {
            return (
              <article key={index}>
                <Cardpokemon url={elem.url} />
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pokemons;
