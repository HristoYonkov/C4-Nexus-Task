import React, { useEffect, useState } from 'react';

import './Dropdown.scss';

const Dropdown = ({ sortValue, setSortValue }) => {

    const onChangeHandler = (e) => {
        setSortValue(e.target.value);
    }

    return (
        <div className='app__dropdown'>
            <h4>Sort By</h4>
            <select onChange={onChangeHandler} name="sort" id="sort" value={sortValue}>
                <option>Relevance</option>
                <option value='priceAsc'>Price Ascending</option>
                <option value="priceDesc">Price Descending</option>
                <option value='alphaA-Z'>Alphabetical A-Z</option>
                <option value="alphaZ-A">Alphabetical Z-A</option>
            </select>
        </div>
    )
}

export default Dropdown