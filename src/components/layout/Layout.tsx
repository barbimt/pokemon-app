import React from "react";
import { useTheme } from "../../hooks/useTheme";
import Header from "./Header/Header";

interface LayoutInterface {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutInterface> = ({ children }) => {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? "body dark" : "body"}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
