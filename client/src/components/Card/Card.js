import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'

import './Card.scss'

const Card = (props) => {
    const item = props.item;

    const calculateDiscount = (disc) => {
        const discount = item.price - (item.price / 100 * Number(disc));
        return discount;
    }


    return (
        <div id="container">
            <div className="container__card">
                <img src={item.imageUrl} alt="Lago di Braies" />

                <div className="card__details">
                    <span className="card__details-tag">{item.category}</span>

                    <div className='card__details-pricing'>
                        {item.discount > 0 && (
                            <>
                                <span className="card__details-discount">{item.discount}%</span>
                                <span className="card__details-price" style={{ textDecoration: 'line-through' }}>${item.price}</span>
                            </>
                        )}
                        
                        <span className="card__details-price">${calculateDiscount(item.discount)}</span>
                    </div>

                    <div className="card__details-name">{item.name}</div>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                    <div className='card__details-stars'>
                        {}
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaRegStar />
                        <FaRegStar />
                    </div>
                    <button>Add to Cart</button>
                </div>

            </div>
        </div >
    )
}

export default Card