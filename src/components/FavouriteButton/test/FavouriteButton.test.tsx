import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FavouriteContextProvider from "../../../context/FavouriteContext";
import FavouriteButton from "../FavouriteButton";

const mockOnClickFavourite = jest.fn();
const mockUseStyle = jest.fn();
jest.mock("./../../../hooks/useStyle", () => ({
  useStyle: () => mockUseStyle,
}));

describe("Favourite Button", () => {
    it("when clicks on calls onClickFavourite", () => {
        render(
            <FavouriteContextProvider>
                <FavouriteButton onClick={mockOnClickFavourite}  isFavourite={true}/>
            </FavouriteContextProvider>
        )
        userEvent.click(screen.getByRole("button"))
        expect(mockOnClickFavourite).toBeCalled()
        expect(screen.getByTestId("favStar")).toBeInTheDocument()
    }) 
    it("when renders without being favourite", () => {
        render(
            <FavouriteContextProvider>
                <FavouriteButton onClick={mockOnClickFavourite}  isFavourite={false}/>
            </FavouriteContextProvider>
        )
        expect(screen.getByTestId("noFavStar")).toBeInTheDocument()
    })
})