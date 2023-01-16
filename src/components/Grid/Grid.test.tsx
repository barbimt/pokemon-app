import { render, screen } from "@testing-library/react";
import FavouriteContextProvider from "../../context/FavouriteContext";
import { pokemonArrayMock } from "./../../mocks/pokemonArrayMock";
import Grid from "./Grid";

export const mockUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  useNavigate: () => mockUseNavigate,
}));

const mockUseStyle = jest.fn();
jest.mock("./../../hooks/useStyle", () => ({
  useStyle: () => mockUseStyle,
}));

describe("Grid component", () => {
  it("Should render Grid component", () => {
    render(
      <FavouriteContextProvider>
        <Grid pokemons={pokemonArrayMock} />
      </FavouriteContextProvider>
    );
    expect(screen.getAllByText("Pikachu").length).toBe(2);
  });
});
