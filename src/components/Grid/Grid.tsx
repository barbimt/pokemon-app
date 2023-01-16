import { FC } from "react";
import { useTheme } from "../../hooks/useTheme";
import { PokemonDetail } from "../../types/pokemonDetail.type";
import Card from "../Card/Card";
import "./grid.css";

const Grid: FC<{ pokemons: PokemonDetail[] }> = ({ pokemons }) => {
const {darkMode} = useTheme();
  return (
    <div className={darkMode ? "grid-pokemons bg-dark" : "grid-pokemons  "}>
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
