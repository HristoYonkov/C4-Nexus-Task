import React, { useEffect, useState } from 'react';

import './Dropdown.scss';

const Dropdown = ({ reset, setlaptops }) => {
    const [sortValue, setSortValue] = useState('');

    useEffect(() => {
        setSortValue('');
    }, [reset])

    useEffect(() => {
        if (sortValue === 'priceAsc') {
            setlaptops(state => [...state.sort((a, b) => a.price - b.price)]);
        } else if (sortValue === 'priceDesc') {
            setlaptops(state => [...state.sort((a, b) => b.price - a.price)]);
        } else if (sortValue === 'alphaA-Z') {
            setlaptops(state => [...state.sort((a, b) => a.name.localeCompare(b.name))]);
        } else if (sortValue === 'alphaZ-A') {
            setlaptops(state => [...state.sort((a, b) => b.name.localeCompare(a.name))]);
        }
    }, [sortValue]);

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