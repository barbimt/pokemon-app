
// export const getPokemonsListAPI = async (): Promise<PageInfo | any> => {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
//     const data = await response.json();

//     const detailsArray: PokemonDetail[] = []

//     data.results.forEach((pokemon: Pokemon) => {
//         getPokemonDetail(pokemon.url)
//             .then(p => {
//                 detailsArray.push(p)
//             })
//     })

//     data.results = detailsArray    
//     return data;
// }

// export const getPokemonDetail = async (url: string): Promise<PokemonDetail | any> => {
//     const response = await fetch(url)
//     const detail = await response.json();
//     return detail;
// }

export const getPokemonByName = async (pokemonName) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`);
    const data = await response.json();
    return data;
};