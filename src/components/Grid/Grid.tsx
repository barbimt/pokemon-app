import { FC, useContext } from "react";
import { FavouriteContext } from "../../context/FavouriteContext";
import { PokemonDetail } from "../../types/pokemonDetail.type";
import Card from "../Card/Card";
import FavouriteButton from "../FavouriteButton/FavouriteButton";
import ListItem from "../ListItem/ListItem";
import "./grid.css";

const Grid: FC<{ pokemons: PokemonDetail[] }> = ({ pokemons }) => {

  // if (!pokemons || pokemons.length === 0)
  //   return (
  //     <>
  //       <p>nothing</p>
  //     </>
  //   );
  // if (status === "LOADING") {
  //   return <div>LOADING POKEMONS</div>;
  // }
  return (
    <div className="grid-pokemons">
      { pokemons.map((pokemon: PokemonDetail, index) => {
        return (
          <div key={index}>
            <Card pokemon={pokemon} />
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
