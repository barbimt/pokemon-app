import { render, screen } from "@testing-library/react";
import FavouriteContextProvider from "../../../context/FavouriteContext";
import { ThemeContextProvider } from "../../../context/ThemeContext";
import { pokemonMock } from "../../../mocks/pokemonMock";
import Profile from "../Profile";

describe("Profile component", () => {
  it("Should render Profile page with proper information", () => {
    render(<Profile pokemon={pokemonMock} />);
    expect(screen.getByText("Pikachu")).toBeInTheDocument();
    expect(screen.getByText("Height: 4")).toBeInTheDocument();
    expect(screen.getByText("ID: 25")).toBeInTheDocument();
  });
});
