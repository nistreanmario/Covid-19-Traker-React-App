import React from 'react';
import styles from './Header.module.css'

function Header() {
    // return (
    //     <nav>
    //         <ul>
    //             <li className={styles.containerr}>
    //                 <a href="/">Home</a>
    //             </li>
    //             <li className={styles.containerr}>
    //                 <a href="#">About</a>
    //             </li>
    //         </ul>
    //     </nav>
    // )


    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <a href="/" className="brand-logo">CovidTracker</a>
                <ul className="right">
                    <li><a href="/" className="">Home</a></li>
                    <li><a href="/about" className="">About</a></li>
                </ul>
            </div>
        </nav>

    // <>
    //     <nav>
    //         <div className="nav-wrapper">
    //             <a href="/" className="brand-logo">Logo</a>
    //             <a href="#a" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
    //             <ul className="right hide-on-med-and-down">
    //                 <li><a href="/" className="">Home</a></li>
    //                 <li><a href="/about" className="">About</a></li>
    //             </ul>
    //         </div>
    //     </nav>
    //
    //     <ul className="sidenav" id="mobile-demo">
    //         <li><a href="/" className="">Home</a></li>
    //         <li><a href="/about" className="">About</a></li>
    //     </ul>
    // </>
    )
}

export default Header
