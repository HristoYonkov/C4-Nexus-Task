import React, { useEffect, useState } from 'react';

import './Dropdown.scss';

const Dropdown = ({setCurrentState}) => {
    const [sort, setSort] = useState('das');

    useEffect(() => {
        if (sort === 'priceAsc') {
            setCurrentState(state => state.sort((a, b) => a.price - b.price));
        } else if (sort === 'priceDesc') {
            setCurrentState(state => state.sort((a, b) => b.price - a.price));
        }
    }, [sort]);

    const onChangeHandler = (e) => {
        console.log(e);
        setSort(e.target.value);
    }

    return (
        <div className='app__dropdown'>
            <h4>Sort By</h4>
            <select onChange={() => onChangeHandler()} name="" id="">
                <option value="priceAsc">Price Ascending</option>
                <option value="priceDesc">Price Descending</option>
            </select>
        </div>
    )
}

export default Dropdown