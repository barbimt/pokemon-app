import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "./../../hooks/useTheme";
import "./toggleTheme.css";

const ToggleTheme: FC = () => {
  const { toggleTheme } = useTheme();

  return (
    <div className="switch_box box_1">
      <FontAwesomeIcon icon={faSun} />
      <input type="checkbox" className="switch_1" onClick={toggleTheme} />
      <FontAwesomeIcon icon={faMoon} />
    </div>
  );
};

export default ToggleTheme;
