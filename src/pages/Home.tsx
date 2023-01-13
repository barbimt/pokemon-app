import { FC, useContext, useEffect, useState } from "react";
import Grid from "../components/Grid/Grid";
import { ServiceContext } from "../context/ServiceContext";
import Visualization from "../components/Visualization/Visualization";
import List from "../components/List/List";
import { useStyle } from "../hooks/useStyle";
import Pagination from "../components/Pagination/Pagination";
import { useTheme } from "../hooks/useTheme";

const Home: FC = () => {
  const { pokemons, getPokemonsAxios } = useContext(ServiceContext);
  const { darkMode } = useTheme();
  const { styleSelected } = useStyle();

  useEffect(getPokemonsAxios, []);

  return (
    <div className={`${darkMode ? "dark" : "" }`}>
      <Visualization />
      <Pagination />
      {styleSelected === "grid" ? (
        <Grid pokemons={pokemons} />
      ) : (
        <List pokemons={pokemons} />
      )}
    </div>
  );
};

export default Home;
