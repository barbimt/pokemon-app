import React, { FC } from "react";
import { PokemonDetail } from "../../types/pokemonDetail.type";
import "./profile.css";

const Profile: FC<{ pokemon: PokemonDetail }> = ({ pokemon }) => {

  const getPokemonImageUrl = (id: number) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
    
  }; 

  
  return (
    <>
      <div className="header-pokemon-detail">
        <img src={getPokemonImageUrl(pokemon.id)} alt={pokemon.name} className="image-detail"/>
        <h1>{pokemon.name}</h1>
      </div>

      <div className="container-detail">
        <div>
          <h3>About {pokemon.name}</h3>

          <ul>
            <li>ID: {pokemon.id}</li>
            <li>Base experience: {pokemon.base_experience}</li>
            <li>Height: {pokemon.height}</li>
            <li>Weight: {pokemon.weight}</li>
          </ul>
        </div>
        <div>
          <h3>Types</h3>
          {pokemon.types.map((type, index) => {
            return (
              <ul key={index}>
                <li>{type.type.name}</li>
              </ul>
            );
          })}
        </div>
        <div>
          <h3>Abilities</h3>
          {pokemon.abilities.map((ability, index) => {
            return (
              <ul key={index}>
                <li>{ability.ability.name}</li>
              </ul>
            );
          })}
        </div>
        <div>
          <h3>Stats</h3>
          {pokemon.stats.map((stat, index) => {
            return (
              <ul key={index}>
                <li>
                  {stat.stat.name}: {stat.base_stat}
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Profile;
