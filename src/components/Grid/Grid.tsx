import { FC } from "react";
import { PokemonDetail } from "../../types/pokemonDetail.type";
import Card from "../Card/Card";
import "./grid.css";

const Grid: FC<{ pokemons: PokemonDetail[] }> = ({ pokemons }) => {

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
