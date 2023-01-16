import { FC, useContext, useEffect } from "react";
import Grid from "../components/Grid/Grid";
import { ServiceContext } from "../context/ServiceContext";
import Visualization from "../components/Visualization/Visualization";
import List from "../components/List/List";
import { useStyle } from "../hooks/useStyle";
import Pagination from "../components/Pagination/Pagination";

const Home: FC = () => {
  const { pokemons, getPokemonsAxios } = useContext(ServiceContext);
  const { styleSelected } = useStyle();

  useEffect(()=> {
    if (!(pokemons.length > 0)) {
       getPokemonsAxios()
    } 

  }, []);

  return (
  <> <Visualization />
      <Pagination />
      {styleSelected === "grid" ? (
        <Grid pokemons={pokemons} />
      ) : (
        <List pokemons={pokemons} />
      )}
  </>

  );
};

export default Home;
