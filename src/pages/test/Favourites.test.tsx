import { render, screen } from "@testing-library/react";
import { FavouriteContext } from "../../context/FavouriteContext";
import { ThemeContextProvider } from "../../context/ThemeContext";
import VisualizationContextProvider from "../../context/VisualizationContext";
import { pokemonArrayMock } from "../../mocks/pokemonArrayMock";
import Favourites from "../Favourites";

const favouriteContextWithPokemons = {
  favouritePokemons: pokemonArrayMock,
};
const favouriteContextWithoutPokemons = {
  favouritePokemons: [],
};

const mockUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  useNavigate: () => mockUseNavigate,
}));

describe("Favourite Page", () => {
  it("Should render empty message when there are not pokemons", () => {
    render(
      <FavouriteContext.Provider value={favouriteContextWithoutPokemons}>
        <ThemeContextProvider>
          <VisualizationContextProvider>
            <Favourites />
          </VisualizationContextProvider>
        </ThemeContextProvider>
      </FavouriteContext.Provider>
    );
    expect(
      screen.getByText("You don't have favourite Pokemons yet")
    ).toBeInTheDocument();
  });

  it("Should render pokemon cards  when there are favourite pokemons", () => {
    render(
      <FavouriteContext.Provider value={favouriteContextWithPokemons}>
        <ThemeContextProvider>
          <VisualizationContextProvider>
            <Favourites />
          </VisualizationContextProvider>
        </ThemeContextProvider>
      </FavouriteContext.Provider>
    );
    expect(screen.getAllByText("Pikachu").length).toBe(2);
  });
});
