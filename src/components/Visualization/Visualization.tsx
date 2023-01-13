import  { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrip, faList } from "@fortawesome/free-solid-svg-icons";
import { useStyle } from "../../hooks/useStyle";
import "./visualization.css";
import { useTheme } from "../../hooks/useTheme";

const Visualization: FC = () => {
  const { onStyleSelected } = useStyle();
  const { darkMode } = useTheme();

  return (
    <>
      <h2 className={darkMode ? "title-visualization title-dark" : "title-visualization "}>Change layout</h2>
      <div className="visualization-container">
        <div onClick={() => onStyleSelected("grid")}>
          <FontAwesomeIcon icon={faGrip} size="2xl" className={darkMode ? "fa-gripDark": ""}  />
        </div>

        <div onClick={() => onStyleSelected("list")}  >
          <FontAwesomeIcon icon={faList} size="2xl" className={darkMode ? "fa-listDark": ""} />
        </div>
      </div>
    </>
  );
};

export default Visualization;
