import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import * as FaIcons from "react-icons/fa";
import styles from './Header.module.css';


function Header(){
    return (
        <>
            <nav className="nav-wrapper grey darken-3" style={{position: 'absolute', top: '0'}}>
                <a href="#" data-target="slide-out" className="sidenav-trigger show-on-small">
                    <i className="material-icons">
                        <FaIcons.FaBars/>
                    </i>
                </a>
                <div className="container">
                    <a href="/" className="brand-logo">CovidTracker</a>
                    <ul className={styles.right}>
                        <li><a href="/" className="">Home</a></li>
                        <li><a href="/about" className="">About</a></li>
                    </ul>
                </div>
            </nav>
            <ul id="slide-out" className="sidenav">
                <li><a href="/" className="">Home</a></li>
                <li><a href="/about" className="">About</a></li>
            </ul>
        </>
    )
}

export default Header
