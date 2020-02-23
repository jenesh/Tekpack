import React from 'react'
import { NavLink } from 'react-router-dom'
import 'materialize-css'

const NavBar = (props) => {
    
    return (
        <nav className="nav-wrapper">
            <NavLink to='/' className='brand-logo'>Logo</NavLink>
            <ul className='right hide-on-sm-and-down'>
                <li className='active'><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/projects'>Projects</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar