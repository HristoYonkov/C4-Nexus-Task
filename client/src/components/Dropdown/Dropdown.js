import React from 'react';

import './Dropdown.scss';

const Dropdown = () => {
    return (
        <div className='app__dropdown'>
            <h4>Sort By</h4>
            <select name="" id="">
                <option value="">Price Ascending</option>
                <option value="">Price Descending</option>
            </select>
        </div>
    )
}

export default Dropdown