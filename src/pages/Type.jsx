import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Cardpokemon from "../components/Cardpokemon";

const Type = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/type/${id}/`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="container">
      <div className="mise-en-page-center">
        <h1>Type : {data.name}</h1>
        <div className="pokemon-detail">
          {data.pokemon.map((elem, index) => {
            return <Cardpokemon url={elem.pokemon.url} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Type;
