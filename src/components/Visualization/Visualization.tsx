import React, { FC, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrip, faList } from "@fortawesome/free-solid-svg-icons";
import { VisualizationContext } from "../../context/VisualizationContext";
import { useStyle } from "../../hooks/useStyle";
import "./visualization.css"
const Visualization: FC = () => {
  const { onStyleSelected } = useStyle();
  return (
    <>
    <h2 className="title-visualization">Change layout</h2>
    <div className="visualization-container">
      <div onClick={()=> onStyleSelected("grid")} >
        <FontAwesomeIcon icon={faGrip}  size="2xl"  />
      </div>

    
      <div onClick={()=> onStyleSelected("list")}>
        <FontAwesomeIcon icon={faList}  size="2xl" />
      </div>
    </div>
    </>
  );
};

export default Visualization;
