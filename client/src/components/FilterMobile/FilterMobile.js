import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import './FilterMobile.scss'

const FilterMobile = ({ changeState, originalState, minMaxPrice }) => {
    const [toggle, setToggle] = useState(false);
    const [selected, setSelected] = useState([]);
    const [filteredPriceMobile, setFilteredPriceMobile] = useState({
        priceRangeMobile: minMaxPrice.min
    });

    const handleChangePrice = (e) => {
        const value = e.target.value
        const name = e.target.name
        setFilteredPriceMobile(prev => ({ ...prev, [name]: value }));
    }

    const handleChangeColors = (e) => {
        if (e.target.checked) {
            changeState((state) => state.filter((x) => x.color !== 'white'));
        } else {
            changeState(originalState);
        }
    }

    return (
        <div className='app__filterMobile'>
            <h4>Filter</h4>

            <div className="app__filter-menu">
                <GiHamburgerMenu onClick={() => setToggle(true)} />

                {toggle && (
                    <motion.section
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                    >
                        <HiX onClick={() => setToggle(false)} />
                        <div className='filterWrapper'>
                            <div className='app__filterMobile-colors'>
                                <h4>Colors</h4>
                                <div>
                                    <input id='whiteMobile'  value="white" type="checkbox" onChange={handleChangeColors} />
                                    <label htmlFor='whiteMobile'>White</label>
                                </div>

                                <div>
                                    <input id='blackMobile'  value="black" type="checkbox" onChange={handleChangeColors} />
                                    <label htmlFor='blackMobile'>Black</label>
                                </div>

                                <div>
                                    <input id='blueMobile'  value="blue" type="checkbox" onChange={handleChangeColors} />
                                    <label htmlFor='blueMobile'>Blue</label>
                                </div>
                            </div>

                            <div className='app__filterMobile-price'>
                                <h4>Price</h4>
                                <input name='priceRangeMobile' value={filteredPriceMobile.priceRangeMobile} id='priceRangeMobile' onInput={handleChangePrice} type="range" min={minMaxPrice.min} max={minMaxPrice.max} />
                                <label id="priceRangeMobile"><p>${filteredPriceMobile.priceRangeMobile} - ${minMaxPrice.max}</p></label>
                            </div>
                        </div>
                    </motion.section>
                )}
            </div>
        </div >
    )
}

export default FilterMobile