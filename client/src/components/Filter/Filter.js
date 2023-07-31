import React, { useEffect, useState } from 'react';
import './Filter.scss';

const Filter = ({ changeState, originalState, minMaxPrice }) => {
  const [selected, setSelected] = useState([]);
  const [filteredPrice, setFilteredPrice] = useState({
    price: minMaxPrice.min
  });

  const handleChangePrice = (e) => {
    const value = e.target.value
    const name = e.target.name
    setFilteredPrice(prev => ({ ...prev, [name]: value }));
  }

  const handleChangeColors = (e) => {
    if (e.target.checked) {
      changeState((state) => state.filter((x) => x.color !== 'white'));
    } else {
      changeState(state => originalState);
    }
  }

  return (
    <section className='app__filter'>
      <div className='app__filter-colors'>
        <h4>Colors</h4>
        <div>
          <input id='white' value="white" type="checkbox" onChange={handleChangeColors} />
          <label htmlFor='white'>White</label>
        </div>

        <div>
          <input id='black' type="checkbox" value="black" onChange={handleChangeColors} />
          <label htmlFor='black'>Black</label>
        </div>

        <div>
          <input id='blue' type="checkbox" value="blue" onChange={handleChangeColors} />
          <label htmlFor='blue'>Blue</label>
        </div>
      </div>

      <div className='app__filter-price'>
        <h4>Price</h4>
        <input name='price' value={filteredPrice.price} id='price' onInput={handleChangePrice} type="range" min={minMaxPrice.min} max={minMaxPrice.max} />
        <label id="price"><p>${filteredPrice.price} - ${minMaxPrice.max}</p></label>
      </div>
    </section>
  )
}

export default Filter