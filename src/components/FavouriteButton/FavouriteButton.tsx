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
  //const src = isFavourite ? "/images/star-filled.png" : "/images/star.png";

  return (
    <>
      <button
        className={styleSelected === "grid" ? "favouriteButton" : "favouriteButton favouriteButtonList"}
        onClick={onClick}
      >
      {isFavourite ? (
        <FontAwesomeIcon icon={faStarSolid} size="xl"/>
      ) : (
        <FontAwesomeIcon icon={faStarRegular} size="xl" />
      )}
      </button>
    </>
  );
};

export default FavouriteButton;
