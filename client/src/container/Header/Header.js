import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import './Header.scss';

import logo from '../../assets/logo.png';

const Header = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className='app__nav'>
            <div className='app__nav-logo'>
                <img src={logo} alt="logo" />
            </div>
            <ul className='app__nav-links'>
                <li key={`link-/`} className='app__flex p-text'>
                    <NavLink to={`/`}>laptops</NavLink>
                    <div></div>
                </li>
                {['monitors', 'mouses', 'keyboards'].map((item) => (
                    <li key={`link-${item}`} className='app__flex p-text'>
                        <NavLink to={`/${item}`}>{item}</NavLink>
                        <div></div>
                    </li>
                ))}
            </ul>

            <div className="app__nav-menu">
                <HiMenu onClick={() => setToggle(true)} />

                {toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                    >
                        <HiX onClick={() => setToggle(false)} />
                        <ul>
                            <li key={`link-/`} className='app__flex p-text'>
                                <NavLink to={`/`} onClick={() => setToggle(false)}>laptops</NavLink>
                            </li>
                            {['monitors', 'mouses', 'keyboards'].map((item) => (
                                <li key={item}>
                                    <NavLink to={`/${item}`} onClick={() => setToggle(false)}>{item}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    )
}

export default Header