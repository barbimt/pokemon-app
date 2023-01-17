import React, { FC, useContext } from "react";
import Grid from "../components/Grid/Grid";
import List from "../components/List/List";
import Visualization from "../components/Visualization/Visualization";
import { FavouriteContext } from "../context/FavouriteContext";
import { VisualizationContext } from "../context/VisualizationContext";
import { useTheme } from "../hooks/useTheme";

const Favourites: FC = () => {
  const { favouritePokemons } = useContext(FavouriteContext);
  const { darkMode } = useTheme();
  const { styleSelected } = useContext(VisualizationContext);

  return (
    <>
      <div className={darkMode ? "dark" : "light"}>
        <Visualization />
        {favouritePokemons.length === 0 ? (
          <div className={darkMode ? "empty-message-dark" : "empty-message"}>
            <h2>You don't have favourite Pokemons yet </h2>
          </div>
        ) : styleSelected === "grid" ? (
          <Grid pokemons={favouritePokemons} />
        ) : (
          <List pokemons={favouritePokemons} />
        )}
      </div>
    </>
  );
};

export default Favourites;
