import React, { FC,useContext,useEffect } from 'react'
import Grid from '../components/Grid/Grid'
import { FavouriteContext } from '../context/FavouriteContext'

const Favourites: FC = () => {
  const {favouritePokemons} = useContext(FavouriteContext);

  return (
    <div>
      <Grid pokemons={favouritePokemons}/>
    </div>
  )
}

export default Favourites
