import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'
import { nanoid } from 'nanoid';
import './Card.scss'

const Card = ({ item, setBackupProducts, setBuyedProducts }) => {
    const calculateDiscount = (disc) => {
        const discount = item.price - (item.price / 100 * Number(disc));
        return discount;
    }

    const calculateStars = (rating) => {
        let ratingArray = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                ratingArray.push(<FaStar key={nanoid()} />);
            } else {
                ratingArray.push(<FaRegStar key={nanoid()} />);
            }
        }
        return ratingArray;
    }

    const setBackupProductsHandler = () => {
        alert('Product added to cart')
        setBackupProducts(state => state.filter(x => x.id !== item.id));
        setBuyedProducts(state => state + 1)
    }

    return (
        <div id="container">
            <div className="container__card">
                <img src={item.imageUrl} alt="Lago di Braies" />

                <div className="card__details">
                    <span className="card__details-tag">{item.category}</span>
                    <span className="card__details-tag" style={{ textTransform: 'uppercase' }}>{item.color}</span>

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
                        {calculateStars(item.rating).map(rating => rating)}
                    </div>
                    <button onClick={setBackupProductsHandler}>Add to Cart</button>
                </div>

            </div>
        </div >
    )
}

export default Card