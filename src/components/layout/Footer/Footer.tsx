import React, { FC } from 'react'
import { useTheme } from '../../../hooks/useTheme'
import './footer.css'
const Footer: FC = () => {
    const {darkMode} = useTheme();
  return (
    <footer>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={darkMode ? "bg-dark" : ""}>
  <path fill={darkMode ? "#437296": "#fbd743"} fill-opacity="1" d="M0,96L34.3,112C68.6,128,137,160,206,160C274.3,160,343,128,411,133.3C480,139,549,181,617,186.7C685.7,192,754,160,823,149.3C891.4,139,960,149,1029,176C1097.1,203,1166,245,1234,229.3C1302.9,213,1371,139,1406,101.3L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
</svg>
    </footer>
  )
}

export default Footer
