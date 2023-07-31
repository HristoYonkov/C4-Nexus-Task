import React, { useEffect, useState } from 'react';
import './Filter.scss';

const Filter = ({ currentState, originalState, minMaxPrice }) => {
  const [selected, setSelected] = useState([]);
  const [filteredPrice, setFilteredPrice] = useState({
    price: minMaxPrice.min
  });

  const maxPrice = minMaxPrice.max;
  const minPrice = minMaxPrice.min;

  const handleSeaarch = () => {
    currentState(state => originalState);
    currentState((state) => state.filter((x) => x.price <= filteredPrice.price));
  }

  const handleChangePrice = (e) => {
    const value = e.target.value
    const name = e.target.name
    setFilteredPrice(prev => ({ ...prev, [name]: value }));
  }

  const handleChangeColors = (e) => {
    setSelected(e.target.value);

    if (e.target.checked) {
      currentState((state) => state.filter((x) => x.color === selected.includes('white')));
      console.log('checked');
    } else {
      currentState(state => originalState);
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
        <input name='price' value={filteredPrice.price} id='price' onInput={handleChangePrice} type="range" min={minPrice} max={maxPrice} />
        <label id="price"><p>${filteredPrice.price} - ${maxPrice}</p></label>
      </div>
      <button onClick={() => handleSeaarch()}>Search</button>
    </section>
  )
}

export default Filter