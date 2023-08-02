import React, { useEffect, useState } from 'react';
import './Filter.scss';

const Filter = ({ setCurrentState, originalState, minMaxPrice }) => {
  const [selected, setSelected] = useState([]);
  const [colors, setColors] = useState({
    white: false,
    black: false,
    blue: false
  });
  const [filteredPrice, setFilteredPrice] = useState({
    price: minMaxPrice.min
  });

  const maxPrice = minMaxPrice.max;
  const minPrice = minMaxPrice.min;

  useEffect(() => {
    setColors({ ...colors, white: false, black: false, blue: false });
    setFilteredPrice(state => ({ ...state, price: minPrice }));
    setSelected([]);
  }, [originalState]);

  useEffect(() => {
    setCurrentState(originalState);
    setCurrentState((state) => state.filter((x) => x.price >= filteredPrice.price));

    if (selected.length > 0) {
      setCurrentState(originalState.filter(({ color }) => selected.includes(color)));
      setCurrentState((state) => state.filter((x) => x.price >= filteredPrice.price));
    }
  }, [selected, filteredPrice, originalState, setCurrentState]);

  const handleChangeColors = (e) => {
    if (e.target.checked) {
      setColors({ ...colors, [e.target.value]: e.target.checked });
      setSelected(state => [...state, e.target.value]);
    } else {
      setColors({ ...colors, [e.target.value]: e.target.checked });
      setSelected((state) => state.filter(x => x !== e.target.value));
    }
  }

  const handleChangePrice = (e) => {
    const value = e.target.value
    const name = e.target.name
    setFilteredPrice(prev => ({ ...prev, [name]: value }));
  }



  return (
    <section className='app__filter'>
      <div className='app__filter-colors'>
        <h4>Colors</h4>
        <div>
          <input id='white' checked={colors.white} value="white" type="checkbox" onChange={handleChangeColors} />
          <label htmlFor='white'>White</label>
        </div>

        <div>
          <input id='black' checked={colors.black} type="checkbox" value="black" onChange={handleChangeColors} />
          <label htmlFor='black'>Black</label>
        </div>

        <div>
          <input id='blue' checked={colors.blue} type="checkbox" value="blue" onChange={handleChangeColors} />
          <label htmlFor='blue'>Blue</label>
        </div>
      </div>

      <div className='app__filter-price'>
        <h4>Price</h4>
        <input name='price' value={filteredPrice.price} id='price' onInput={handleChangePrice} type="range" min={minPrice} max={maxPrice} />
        <label id="price"><p>${filteredPrice.price} - ${maxPrice}</p></label>
      </div>
    </section>
  )
}

export default Filter