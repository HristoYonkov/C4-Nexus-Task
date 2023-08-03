import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import './FilterMobile.scss'

const FilterMobile = ({ setCurrentState, originalState, minMaxPrice }) => {
    const [toggle, setToggle] = useState(false);
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
            setColors({ ...colors, [e.target.value]: e.target.checked })
            setSelected(state => [...state, e.target.value]);
        } else {
            setColors({ ...colors, [e.target.value]: e.target.checked })
            setSelected((state) => state.filter(x => x !== e.target.value));
        }
    }

    const handleChangePrice = (e) => {
        const value = e.target.value
        const name = e.target.name
        setFilteredPrice(prev => ({ ...prev, [name]: value }));
    }


    return (
        <div className='app__filterMobile'>
            <h4>Filter</h4>

            <div className="app__filter-menu">
                <GiHamburgerMenu onClick={() => setToggle(true)} />

                {toggle && (
                    <motion.section
                        whileInView={{ x: [200, 0] }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                    >
                        <HiX onClick={() => setToggle(false)} />
                        <div className='filterWrapper'>
                            <div className='app__filterMobile-colors'>
                                <h4>Colors</h4>
                                <div>
                                    <input id='whiteMobile' defaultChecked={colors.white} value="white" type="checkbox" onChange={handleChangeColors} />
                                    <label htmlFor='whiteMobile'>White</label>
                                </div>

                                <div>
                                    <input id='blackMobile' defaultChecked={colors.black} value="black" type="checkbox" onChange={handleChangeColors} />
                                    <label htmlFor='blackMobile'>Black</label>
                                </div>

                                <div>
                                    <input id='blueMobile' defaultChecked={colors.blue} value="blue" type="checkbox" onChange={handleChangeColors} />
                                    <label htmlFor='blueMobile'>Blue</label>
                                </div>
                            </div>

                            <div className='app__filterMobile-price'>
                                <h4>Price</h4>
                                <input name='price' value={filteredPrice.price} id='price' onInput={handleChangePrice} type="range" min={minPrice} max={maxPrice} />
                                <label id="price"><p>${filteredPrice.price} - ${maxPrice}</p></label>
                            </div>
                            {/* <button onClick={() => handleSeaarch()}>Search</button> */}
                        </div>
                    </motion.section>
                )}
            </div>
        </div >
    )
}

export default FilterMobile