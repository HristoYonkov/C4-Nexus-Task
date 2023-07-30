import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import './FilterMobile.scss'

const FilterMobile = () => {
    const [toggle, setToggle] = useState(false);

    const [filter, setFilter] = useState({
        priceRangeMobile: 1
    });

    const handleOnchange = (e) => {
        const value = e.target.value
        const name = e.target.name
        setFilter(prev => ({ ...prev, [name]: value }));
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
                                    <input id='whiteMobile' type="checkbox" />
                                    <label htmlFor='whiteMobile'>White</label>
                                </div>

                                <div>
                                    <input id='blackMobile' type="checkbox" />
                                    <label htmlFor='blackMobile'>Black</label>
                                </div>

                                <div>
                                    <input id='blueMobile' type="checkbox" />
                                    <label htmlFor='blueMobile'>Blue</label>
                                </div>
                            </div>

                            <div className='app__filterMobile-price'>
                                <h4>Price</h4>
                                <input name='priceRangeMobile' value={filter.priceRangeMobile} id='rangeValueMobile' onChange={handleOnchange} type="range" min="1" max="200" />
                                <label id="rangeValueMobile"><p>${filter.priceRangeMobile} - $200</p></label>
                            </div>
                        </div>

                    </motion.section>
                )}
            </div>
        </div >
    )
}

export default FilterMobile