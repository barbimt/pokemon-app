import "./App.css";
import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Detail from "./pages/Detail";
import ServiceContextProvider from "./context/ServiceContext";
import VisualizationContextProvider from "./context/VisualizationContext";
import FavouriteContextProvider from "./context/FavouriteContext";
import PaginationContextProvider from "./context/PaginationContext";
import { ThemeContextProvider } from "./context/ThemeContext";

const App: FC = () => {
  
  return (
    <ThemeContextProvider >
      <ServiceContextProvider>
        <VisualizationContextProvider>
          <FavouriteContextProvider>
            <PaginationContextProvider>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="favorites" element={<Favourites />} />
                <Route path="detail/:id" element={<Detail />} />
              </Routes>
            </PaginationContextProvider>
          </FavouriteContextProvider>
        </VisualizationContextProvider>
      </ServiceContextProvider>
    </ThemeContextProvider>
  );
};

export default App;
