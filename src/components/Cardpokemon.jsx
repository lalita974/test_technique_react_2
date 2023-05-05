import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Cardpokemon = (props) => {
  const { url } = props;
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}`);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [url]);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="card-pokemon">
      <Link to={`/pokemon/${data.id}`}>
        <h2>{data.name}</h2>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}
          alt="img"
        />
      </Link>
    </div>
  );
};

export default Cardpokemon;
