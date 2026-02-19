import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <li><Link to={"/"}>Home</Link></li>
            <li> <Link to={"/About"}>About</Link></li>
           
        </>

    )
}

export default Header