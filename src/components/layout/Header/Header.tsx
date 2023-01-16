import React, { FC } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faX } from "@fortawesome/free-solid-svg-icons";
import useDisclosure from "../../../hooks/useDisclosure";
import "./header.css";
import HeaderMobile from "./HeaderMobile";
import ToggleTheme from "../../ToggleTheme/ToggleTheme";
import { useTheme } from "../../../hooks/useTheme";
import useDimension from "../../../hooks/useDimension";

const Header: FC = () => {
  const { darkMode } = useTheme();
  const {isMobile} = useDimension();
  const { isOpen, toggle } = useDisclosure();
  // const [dimensions, setDimensions] = useState({
  //   width: window.innerWidth,
  // });
  // const dimensionMobile = dimensions.width >= 426;
  // useEffect(() => {
  //   const handleResize = () => {
  //     setDimensions({
  //       width: window.innerWidth,
  //     });
  //   };
  //   window.addEventListener("resize", handleResize);
  // }, []);

  return (
    <header className={darkMode ? "header-dark" : ""}>
      <div>
        <div>
          <h2 className={isMobile ? "" : "titleMobile"}>PokeAPI</h2>
        </div>
        {!isMobile ? (
          <nav>
            <ul className={darkMode ? "ul-darkMode" : ""}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/favorites">Favourites</Link>
              </li>
            </ul>
            <ToggleTheme />
          </nav>
        ) : (
          <>
            <div
              className={isOpen ? "containerIconX" : "containerIconBurger"}
              onClick={toggle}
            >
              <FontAwesomeIcon
                icon={isOpen ? faX : faBarsStaggered}
                className={darkMode ? "faMobileDark" : "faMobile"}
                size="xl"
              />
            </div>
            {isOpen && <HeaderMobile />}
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
