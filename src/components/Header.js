import React from 'react';
import logo from '../images/Rick_and_Morty_logo.png';
import '../stylesheets/Header.scss';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <Link to='/'><img src={logo} alt="Rick and Morty logo" className="logo"></img></Link>
    )
}

export default Header;