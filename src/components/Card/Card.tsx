import React, { FC, useContext } from "react";
import { PokemonDetail } from "../../types/pokemonDetail.type";
import FavouriteButton from "../FavouriteButton/FavouriteButton";
import { useNavigate } from "react-router-dom";
import "./card.css";
import { FavouriteContext } from "../../context/FavouriteContext";

const Card: FC<{ pokemon: PokemonDetail }> = ({ pokemon }) => {
  const { favouritePokemons,toggleFavourite } = useContext(FavouriteContext);
  let navigate = useNavigate();
  const redirectToDetailPage = () => {
    navigate(`/detail/${pokemon.id}`, { state: { pokemon: pokemon } });
  };

  return (
    <>
          <FavouriteButton
          onClick={()=> {toggleFavourite(pokemon)}}
            isFavourite={favouritePokemons.some(
              (p: PokemonDetail) => p.id === pokemon.id
            )}
          />
        <div className="card-pokemon" onClick={redirectToDetailPage}>
        <div className="bg-opacity"></div>
        <div className="card-pokemon-info">
          <img
            src={pokemon.sprites.other.home.front_default}
            alt={pokemon.name}
          />
          <h5>{pokemon.name}</h5>
        </div>
      </div>
    </>
  );
};

export default Card;
