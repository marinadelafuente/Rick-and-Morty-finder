import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../images/Rick_and_Morty_logo.png';
import '../stylesheets/Header.scss';

function Header() {
    return (
        <Link to='/'><img src={logo} alt="Rick and Morty logo" className="logo"></img></Link>
    )
}

export default Header;