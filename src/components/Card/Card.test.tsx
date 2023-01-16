import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FavouriteContextProvider from "../../context/FavouriteContext";
import { pokemonMock } from "./../../mocks/pokemonMock"
import Card from "./Card";

export const mockUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  useNavigate: () => mockUseNavigate,
}));

const mockUseStyle = jest.fn();
jest.mock("./../../hooks/useStyle", () => ({
  useStyle: () => mockUseStyle,
}));

describe("Card component", () => {

  it("should render a pokemon", () => {
    render(
      <FavouriteContextProvider>
        <Card pokemon={pokemonMock} />
      </FavouriteContextProvider>
    );
    expect(screen.getByText("Pikachu")).toBeInTheDocument();
    expect(screen.getByAltText("Pikachu")).toBeInTheDocument();
  });

  it("should navigate when card is clicked and sends the pokemon information", () => {
    render(
        <FavouriteContextProvider>
        <Card pokemon={pokemonMock} />
      </FavouriteContextProvider>
    );
    userEvent.click(screen.getByText("Pikachu"))
    expect(mockUseNavigate).toBeCalledWith('/detail/25',{"state": {"pokemon": {"abilities": [], "base_experience": 112, "height": 4, "id": 25, "name": "Pikachu", "sprites": {"other": {"home": {"front_default": ""}}}, "stats": [], "types": [], "url": "", "weight": 60}}});
  })

});
