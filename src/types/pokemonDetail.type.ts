import Pokemon from "./pokemon.types";

export interface PokemonDetail extends Pokemon {
    abilities: Ability[];
    sprites: Sprites
    weight: number;
    id: number;
    base_experience: number;
    height: number;
    types: Types[];
    stats: Stat[];
}

interface Ability {
    ability: {
        name: string
    }
}

interface Sprites {
    other: SpritesOther
}

interface SpritesOther {
    home: SpritesHome
}

interface SpritesHome {
    front_default: string;
}

interface Types{
    type: {
        name: string
    }
}

interface Stat{
    base_stat: number
    stat:{
        name: string
    }
}