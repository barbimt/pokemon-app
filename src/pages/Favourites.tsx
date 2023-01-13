import React, { FC,useContext } from 'react'
import Grid from '../components/Grid/Grid'
import { FavouriteContext } from '../context/FavouriteContext'
import { useTheme } from '../hooks/useTheme';

const Favourites: FC = () => {
  const {favouritePokemons} = useContext(FavouriteContext);
  const { darkMode } = useTheme();

  return (
    <div className={`${darkMode ? "dark": "light"}`}>
      <Grid pokemons={favouritePokemons}/>
    </div>
  )
}

export default Favourites
