import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKiwiBird } from '@fortawesome/free-solid-svg-icons';

export default function Header () {

    const [open, setOpen] = useState(false);
    
    return (
        <div>
            <nav className="navbar">
                <div className={`hamburger-menu ${open ? "open" : ""}`}>
                    <label onClick={() => setOpen(!open)} className="menu">
                        <div className="menu-line menu-line-1"></div>
                        <div className="menu-line menu-line-2"></div>
                        <div className="menu-line menu-line-3"></div>
                    </label>
                </div>
                <div className={`navbar-navigation ${open ? "open" : ""}`}>
                    <div className="navbar-navigation-left">
                        <a href="!#" className="logo"><FontAwesomeIcon className="icon" icon={faKiwiBird} /></a>
                    </div>
                    <div className="navbar-navigation-right">
                        <ul className="list">
                            <li className="list-item">
                                <a href="!#" className="list-link">Home</a>
                            </li>
                            <li className="list-item">
                                <a href="!#" className="list-link">About Us</a>
                            </li>
                            <li className="list-item">
                                <a href="!#" className="list-link">Gallery</a>
                            </li>
                            <li className="list-item">
                                <a href="!#" className="list-link">Reservation</a>
                            </li>
                            <li className="list-item">
                                <a href="!#" className="list-link">Services</a>
                            </li>
                            <li className="list-item">
                                <a href="!#" className="list-link">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <header className="header">
                <div className="brand">
                    <a href="!#" className="logo"><FontAwesomeIcon className="icon" icon={faKiwiBird} /></a>
                    <div>
                        <h1 className="main-name">Mikado</h1>
                        <p className="sub-name">Restaurant</p>
                    </div>
                </div>
                <div className="header-banner">
                    <h1 className="main-heading">Welcome</h1>
                    <h3 className="sub-heading">Try Authentic Japanese Dishes</h3>
                    <button type="button" className="main-btn">Reservation</button>
                </div>
            </header>
        </div>
    );
}