import React from 'react'
import './Filter.scss'

const Filter = () => {

  return (
    <section className='app__filter'>
      <div className='app__filter-colors'>
        <h4>Colors</h4>
        <div>
          <input type="checkbox" />
          <p>White</p>
        </div>

        <div>
          <input type="checkbox" />
          <p>Black</p>
        </div>

        <div>
          <input type="checkbox" />
          <p>Blue</p>
        </div>
      </div>

      <div class='app__filter-price'>
        <h4>Price</h4>
        <input type="range" min="0" max="200" />
        <p id="rangeValue">$0 - $200</p>
      </div>
    </section>
  )
}

export default Filter