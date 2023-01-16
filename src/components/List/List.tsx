import { FC } from "react";
import { PokemonDetail } from "../../types/pokemonDetail.type";
import "./list.css";
import ListItem from "../ListItem/ListItem";
import { useTheme } from "../../hooks/useTheme";

const List: FC<{ pokemons: PokemonDetail[] }> = ({ pokemons }) => {
  const {darkMode} = useTheme();
  return (
    <div className={darkMode ? "list-pokemons bg-dark": "list-pokemons"}>
      {pokemons.map((pokemon: PokemonDetail, index) => {
        return (
          <ul className="listPokemon-container" key={index}>
            <ListItem pokemon={pokemon} />
          </ul>
        );
      })}
    </div>
  );
};

export default List;
