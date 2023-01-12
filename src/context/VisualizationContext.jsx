import { createContext, useState } from "react";

export const VisualizationContext = createContext();

const VisualizationContextProvider = ({ children }) => {
  const [styleSelected, setStyleSelected] = useState("grid");

  const onStyleSelected = (style) => {
    setStyleSelected(style);
  };
  return (
    <VisualizationContext.Provider
      value={{
        onStyleSelected,
        styleSelected,
      }}
    >
      {children}
    </VisualizationContext.Provider>
  );
};

export default VisualizationContextProvider;
