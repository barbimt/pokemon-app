import { useState, useEffect } from 'react';


const useDimension = () => {
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
      });

      const dimensionMobile = dimensions.width <= 426;

   useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
      });
    };
    window.addEventListener("resize", handleResize);
  }, []);


  return {isMobile: dimensionMobile };
};

export default useDimension;
