import React from 'react'
import "./Header.css"

import {Link} from 'react-router-dom'


const Header = () => {
  return (
    <>
        <header>
                <p className="icon-name">JafarYadPlanetdendir</p>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/misqa"}>About</Link></li>
                    <li  className='active'><Link to={"/malades"}>Contact</Link></li>
                </ul>
        </header>
    </>
)
}

export default Header