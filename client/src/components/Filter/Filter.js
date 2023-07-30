import React, { useState } from 'react';
import './Filter.scss';

const Filter = () => {
  const [filter, setFilter] = useState({
    priceRange: 1
  });

  const handleOnchange = (e) => {
    const value = e.target.value
    const name = e.target.name
    setFilter(prev => ({ ...prev, [name]: value }));
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
        <input name='priceRange' value={filter.priceRange} id='rangeValue' onChange={handleOnchange} type="range" min="1" max="200" />
        <label id="rangeValue"><p>${filter.priceRange} - $200</p></label>
      </div>
    </section>
  )
}

export default Filter