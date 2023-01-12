import React, { FC } from 'react'
import { Link } from "react-router-dom";

const HeaderMobile: FC = () => {
  return (
    <div className='header-mobile'>
             
        <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/favorites">Favourites</Link>
            </li>
          </ul>
    </div>
  )
}

export default HeaderMobile