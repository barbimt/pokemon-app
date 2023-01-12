import { FC } from "react";
import { PokemonDetail } from "../../types/pokemonDetail.type";
import "./list.css";
import ListItem from "../ListItem/ListItem";

const List: FC<{ pokemons: PokemonDetail[] }> = ({ pokemons }) => {
  return (
    <div className="list-pokemons">
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
