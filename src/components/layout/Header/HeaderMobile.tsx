import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../../hooks/useTheme";
import ToggleTheme from "../../ToggleTheme/ToggleTheme";
import "./header.css";

const HeaderMobile: FC = () => {
  const {darkMode} = useTheme();

  return (
    <div className={darkMode ? "header-mobile darkList" : "header-mobile "}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/favorites">Favourites</Link>
        </li>
      </ul>
      <ToggleTheme />
    </div>
  );
};

export default HeaderMobile;
