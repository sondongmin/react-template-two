import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Body () {
    const shuffle = (array) => array.sort(() => Math.random() - 0.5);

    const cards = [
        {name: 'Akami', price: '30.00$', fileName: '1.jpg'},
        {name: 'Chutoro', price: '30.00$', fileName: '2.jpg'},
        {name: 'Saba', price: '30.00$', fileName: '3.jpg'},
        {name: 'Kinmedai', price: '30.00$', fileName: '4.jpg'},
        {name: 'Ebi', price: '30.00$', fileName: '5.jpg'},
        {name: 'Anago', price: '30.00$', fileName: '6.jpg'},
    ];
    
    shuffle(cards);

    return (
        <div>
            <section className="about">
                <div className="about-left">
                    <img className="image" alt="img" src={process.env.PUBLIC_URL + '/1.png'} />
                </div>
                <div className="about-right">
                    <h1 className="main-heading">About Us</h1>
                    <h3 className="sub-heading">Exquisite Japanese Dishes</h3>
                    <div className="stars">
                        <FontAwesomeIcon className="star" icon={faStar} />
                        <FontAwesomeIcon className="star" icon={faStar} />
                        <FontAwesomeIcon className="star" icon={faStar} />
                    </div>
                    <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <div className="stars">
                        <FontAwesomeIcon className="star" icon={faStar} />
                        <FontAwesomeIcon className="star" icon={faStar} />
                        <FontAwesomeIcon className="star" icon={faStar} />
                    </div>
                    <button type="button" className="main-btn">Read More</button>
                </div>
            </section>
            <section className="gallery">
                <div className="card-wrapper">
                    {cards.map((card) => { 
                        return (<div className="card">
                            <div className="card-overlay">
                                <h1 className="card-overlay-heading">
                                    {card.name}
                                </h1>
                                <p className="card-overlay-paragraph">
                                    {card.price}
                                </p>
                                <button type="button" className="card-overlay-btn">
                                    Order Now
                                </button>
                            </div>
                            <img className="card-img" alt="img" src={process.env.PUBLIC_URL + `/${card.fileName}`} />
                        </div>);
                    })}
                </div>
            </section>
        </div>
    );
}