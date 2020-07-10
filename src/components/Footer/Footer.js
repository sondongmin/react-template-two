import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKiwiBird } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagram, faYoutube, faGooglePlusSquare } from '@fortawesome/free-brands-svg-icons';

export default function Footer () {
    return (
        <div>
            <footer className="footer">
                <div className="footer-header">
                    <a href="!#" className="logo"><FontAwesomeIcon className="icon" icon={faKiwiBird} /></a>
                    <div>
                        <h1 className="main-name">Mikado</h1>
                        <p className="sub-name">Restaurant</p>
                    </div>
                </div>
                <div className="footer-social">
                    <ul className="social">
                        <li className="social-item">
                            <a href="!#" className="social-link">
                                <FontAwesomeIcon className="icon" icon={faFacebookSquare} />
                            </a>
                        </li>
                        <li className="social-item">
                            <a href="!#" className="social-link">
                                <FontAwesomeIcon className="icon" icon={faInstagram} />
                            </a>
                        </li>
                        <li className="social-item">
                            <a href="!#" className="social-link">
                                <FontAwesomeIcon className="icon" icon={faYoutube} />
                            </a>
                        </li>
                        <li className="social-item">
                            <a href="!#" className="social-link">
                                <FontAwesomeIcon className="icon" icon={faGooglePlusSquare} />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-copyright">
                    <p className="footer-copyright">
                        &copy; Copyright. Restaurant Mikado. All Rights Reserved
                    </p>
                </div>
            </footer>
        </div>
    );
}