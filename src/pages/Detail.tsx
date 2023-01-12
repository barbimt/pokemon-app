import React, { FC } from "react";
import { PokemonDetail } from "../types/pokemonDetail.type";
import { useLocation } from "react-router-dom";
import Profile from "../components/Profile/Profile";

const Detail: FC = () => {
  const location = useLocation();
  const state: any = location.state;
  const pokemon: PokemonDetail = { ...state.pokemon };

  return (
    <>
      <Profile pokemon={pokemon} />
    </>
  );
};

export default Detail;
