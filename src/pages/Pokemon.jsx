import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Cardpokemon from "../components/Cardpokemon";
import Cardtype from "../components/Cardtype";

const Pokemon = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [id]);

  const pokemonId = data.id;
  const pokemonTypes = data.types;

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="container">
      <div className="mise-en-page-center">
        <h1>Pokemon</h1>
        <div className="pokemon-detail">
          <Cardpokemon url={`https://pokeapi.co/api/v2/pokemon/${id}`} />
          <div className="type-detail">
            {pokemonTypes.map((elem, index) => {
              return <Cardtype key={index} url={elem.type.url} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
