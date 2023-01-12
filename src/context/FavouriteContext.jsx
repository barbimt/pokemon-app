import { createContext, useState, useEffect } from "react";

export const FavouriteContext = createContext();

const FavouriteContextProvider = ({ children }) => {
  const [favouritePokemons, setFavouritePokemons] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favouritePokemons"));
    if (data) {
      setFavouritePokemons(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "favouritePokemons",
      JSON.stringify(favouritePokemons)
    );
  }, [favouritePokemons]);

  const addFavourite = (pokemon) => {
    setFavouritePokemons([...favouritePokemons, pokemon]);
  };

  const deleteFavourite = (id) => {
    const pokemonsFiltered = favouritePokemons.filter(
      (pokemon) => pokemon.id !== id
    );
    setFavouritePokemons(pokemonsFiltered);
  };

  const toggleFavourite = (pokemon) => {
    if (!favouritePokemons.includes(pokemon)) {
      addFavourite(pokemon);
    } else {
      deleteFavourite(pokemon.id);
    }
  };

  return (
    <FavouriteContext.Provider
      value={{
        toggleFavourite,
        favouritePokemons,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteContextProvider;
