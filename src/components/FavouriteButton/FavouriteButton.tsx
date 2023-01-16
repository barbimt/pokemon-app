import React, { FC, MouseEventHandler, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import "./favouriteButton.css"

import { VisualizationContext } from "../../context/VisualizationContext";


const FavouriteButton: FC<{ onClick: MouseEventHandler<HTMLButtonElement>; isFavourite: Boolean }> = ({
  isFavourite,
  onClick,
}) => {
  const {styleSelected} = useContext(VisualizationContext)
 

  return (
    <>
      <button
        className={styleSelected === "grid" ? "favouriteButton" : "favouriteButtonList"}
        onClick={onClick}
      >
      {isFavourite ? (
        <FontAwesomeIcon icon={faStarSolid} size="xl" data-testid="favStar"/>
      ) : (
        <FontAwesomeIcon icon={faStarRegular} size="xl" data-testid="noFavStar"/>
      )}
      </button>
    </>
  );
};

export default FavouriteButton;
