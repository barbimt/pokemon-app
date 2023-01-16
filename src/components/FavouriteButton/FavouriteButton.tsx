import React, { FC, MouseEventHandler } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import "./favouriteButton.css"
import { useStyle } from "../../hooks/useStyle";


const FavouriteButton: FC<{ onClick: MouseEventHandler<HTMLButtonElement>; isFavourite: Boolean }> = ({
  isFavourite,
  onClick,
}) => {
  const { styleSelected } = useStyle();

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
