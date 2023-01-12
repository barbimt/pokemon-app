import { PokemonDetail } from "./pokemonDetail.type";

interface PageInfo {
    count: number;
    next: string;
    previous: string;
    results: PokemonDetail[];
  }
  
  export default PageInfo;