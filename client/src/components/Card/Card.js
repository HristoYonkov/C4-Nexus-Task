import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'

import './Card.scss'

const Card = () => {

    return (
        <div id="container">
            <div className="container__card">
                <img src="https://www.asus.com/media/Odin/Websites/global/Series/12.png" alt="Lago di Braies" />

                <div className="card__details">
                    <span className="card__details-tag">Laptop</span>

                    <div className='card__details-pricing'>
                        <span className="card__details-discount">-30%</span>
                        <span className="card__details-price" style={{ textDecoration: 'line-through' }}>$354.00</span>
                        <span className="card__details-price">$254.00</span>
                    </div>

                    <div className="card__details-name">Asus Vivobook</div>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                    <div className='card__details-stars'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaRegStar />
                        <FaRegStar />
                    </div>
                    <button>Add to Cart</button>
                </div>

            </div>
        </div>
    )
}

export default Card