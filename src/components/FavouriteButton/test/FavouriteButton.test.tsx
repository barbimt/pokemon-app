import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FavouriteContextProvider from "../../../context/FavouriteContext";
import VisualizationContextProvider from "../../../context/VisualizationContext";
import FavouriteButton from "../FavouriteButton";

const mockOnClickFavourite = jest.fn();
const mockUseStyle = jest.fn();
jest.mock("./../../../hooks/useStyle", () => ({
  useStyle: () => mockUseStyle,
}));

describe("Favourite Button", () => {
    it("when clicks on calls onClickFavourite", () => {
        render(
            <VisualizationContextProvider>
            <FavouriteContextProvider>
                <FavouriteButton onClick={mockOnClickFavourite}  isFavourite={true}/>
            </FavouriteContextProvider>
            </VisualizationContextProvider>
        )
        userEvent.click(screen.getByRole("button"))
        expect(mockOnClickFavourite).toBeCalled()
        expect(screen.getByTestId("favStar")).toBeInTheDocument()
    }) 
    it("when renders without being favourite", () => {
        render(
            <VisualizationContextProvider>
            <FavouriteContextProvider>
                <FavouriteButton onClick={mockOnClickFavourite}  isFavourite={false}/>
            </FavouriteContextProvider>
            </VisualizationContextProvider>
        )
        expect(screen.getByTestId("noFavStar")).toBeInTheDocument()
    })
})