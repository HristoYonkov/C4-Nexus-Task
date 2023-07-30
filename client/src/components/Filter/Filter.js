import React, { useState } from 'react';
import './Filter.scss';

const Filter = () => {
  const [filteredPrice, setFilteredPrice] = useState({
    price: 1
  });

  const handleOnchange = (e) => {
    console.log(e.target);
    const value = e.target.value
    const name = e.target.name
    setFilteredPrice(prev => ({ ...prev, [name]: value }));
  }

  return (
    <section className='app__filter'>
      <div className='app__filter-colors'>
        <h4>Colors</h4>
        <div>
        <input id='white' type="checkbox" />
          <label htmlFor='white'>White</label>
        </div>

        <div>
          <input id='black' type="checkbox" />
          <label htmlFor='black'>Black</label>
        </div>

        <div>
        <input id='blue' type="checkbox" />
          <label htmlFor='blue'>Blue</label>
        </div>
      </div>

      <div className='app__filter-price'>
        <h4>Price</h4>
        <input name='price' value={filteredPrice.price} id='price' onChange={handleOnchange} type="range" min="1" max="200" />
        <label id="price"><p>${filteredPrice.price} - $200</p></label>
      </div>
    </section>
  )
}

export default Filter