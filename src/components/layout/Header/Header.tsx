import React, { FC, useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import useDisclosure from "../../../hooks/useDisclosure";
import './header.css'
import HeaderMobile from "./HeaderMobile";

const Header: FC = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
  });
  const { isOpen, toggle } = useDisclosure();
  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
      });
    }
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <header>
      <div>
      <div>
        <h2>PokeAPI</h2>
      </div>
      { dimensions.width >=426 ? (
         <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/favorites">Favourites</Link>
            </li>
          </ul>
        </nav>
      ) :  <div className="containerIconBurger" onClick={toggle}>
      <FontAwesomeIcon icon={faBarsStaggered} />
      {isOpen && <HeaderMobile />}
    </div>
        
      }
       
        </div>
    </header>
  );
};

export default Header;
