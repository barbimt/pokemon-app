import { createContext, useState } from "react";
import axios from "axios";

export const ServiceContext = createContext();

const ServiceContextProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);

  const getPokemonsAxios = (page) => {
    let url = `https://pokeapi.co/api/v2/pokemon`

    if (page) {
      url = `${url}?limit=20&offset=${page*20}`
      setPokemons([])
    }

    axios.get(url).then((resp) => {
      for (let i = 0; i < resp.data.results.length; i++) {
        axios.get(resp.data.results[i].url).then((result) => {
          setPokemons((prevArray) => [...prevArray, result.data]);
        });
      }
    });
  };

  return (
    <ServiceContext.Provider
      value={{
        getPokemonsAxios,
        pokemons,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

export default ServiceContextProvider;
