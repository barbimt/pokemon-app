import { render, screen } from "@testing-library/react";
import { ThemeContextProvider } from "../../../context/ThemeContext";
import Visualization from "../Visualization";
import userEvent from "@testing-library/user-event";
import VisualizationContextProvider, {
  VisualizationContext,
} from "../../../context/VisualizationContext";

const visualizationContext = {
  onStyleSelected: jest.fn().mockImplementation((value) => {
    visualizationContext.styleSelected = value;
  }),
  styleSelected: "grid",
};

const mockOnStyleSelected = jest.fn();
const mockUseStyle = jest.fn().mockReturnValue(visualizationContext);

jest.mock("./../../../hooks/useStyle", () => ({
  useStyle: () => mockUseStyle,
  onStyleSelected: () => mockOnStyleSelected(),
}));

describe("Profile component", () => {
  it("Should render component", () => {
    render(
      <VisualizationContextProvider>
        <ThemeContextProvider>
          <Visualization />
        </ThemeContextProvider>
      </VisualizationContextProvider>
    );
    expect(screen.getByText("Change layout")).toBeInTheDocument();
  });

  it("When click Grid Button should call onStyleSelected", () => {
    render(
      <VisualizationContext.Provider value={visualizationContext}>
        <ThemeContextProvider>
          <Visualization />
        </ThemeContextProvider>
      </VisualizationContext.Provider>
    );
    const buttonGrid = screen.getByTestId("button-grid");
    userEvent.click(buttonGrid);
    expect(visualizationContext.onStyleSelected).toBeCalled();
  });
});
