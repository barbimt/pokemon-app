import { FC, useContext, useEffect, useState } from "react";
import Grid from "../components/Grid/Grid";
import { ServiceContext } from "../context/ServiceContext";
import Visualization from "../components/Visualization/Visualization";
import List from "../components/List/List";
import { useStyle } from "../hooks/useStyle";
import { PaginationContext } from "../context/PaginationContext";

const Home: FC = () => {
  const { pokemons, getPokemonsAxios } = useContext(ServiceContext);
  const { nextPage, page, prevPage } = useContext(PaginationContext);

  const { styleSelected } = useStyle();

  useEffect(getPokemonsAxios, []);

  return (
    <div>
      <Visualization />

      <button onClick={nextPage}>next</button>
      <button disabled={page === 1} onClick={prevPage}>
        previous
      </button>

      {styleSelected === "grid" ? (
        <Grid pokemons={pokemons} />
      ) : (
        <List pokemons={pokemons} />
      )}
    </div>
  );
};

export default Home;
