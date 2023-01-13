import React, { FC, useContext } from "react";
import FavouriteButton from "../FavouriteButton/FavouriteButton";
import { PokemonDetail } from "../../types/pokemonDetail.type";
import { useNavigate } from "react-router-dom";
import { FavouriteContext } from "../../context/FavouriteContext";

import "./listItem.css";
import { useTheme } from "../../hooks/useTheme";

const ListItem: FC<{ pokemon: PokemonDetail }> = ({ pokemon }) => {
  const { favouritePokemons, toggleFavourite } = useContext(FavouriteContext);
  const {darkMode} = useTheme();
  let navigate = useNavigate();
  const redirectToDetailPage = () => {
    navigate(`/detail/${pokemon.id}`, { state: { pokemon: pokemon } });
  };

  return (
    <div className={`${darkMode ? "listPokemon darkList" : "listPokemon"}`}>
      <div className="bg-opacity-list"></div>
      <li onClick={redirectToDetailPage}>{pokemon.name}</li>
      <FavouriteButton
        onClick={() => {
          toggleFavourite(pokemon);
        }}
        isFavourite={favouritePokemons.some(
          (p: PokemonDetail) => p.id === pokemon.id
        )}
       
      />
    </div>
  );
};

export default ListItem;
