import React from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from 'react-icons/fa'

import './Footer.scss';

const Footer = () => {
    return (
        <footer className='app__footer'>
            <div className='app__footer-top'>
                <section className='app__footer-section'>
                    <h3>Privacy & Cookies Policy</h3>
                    <a href=""><p>Web Terms of Use</p></a>
                    <a href=""><p>Customer Terms & Conditions</p></a>
                    <a href=""><p>Accessibility</p></a>
                </section>

                <section className='app__footer-section'>
                    <h3>Company</h3>
                    <a href=""><p>About 'Smart-Shopping'</p></a>
                    <a href=""><p>Policies</p></a>
                    <a href=""><p>Careers</p></a>
                </section>

                <section className='app__footer-section'>
                    <h3>Contact Us</h3>
                    <a href=""><FaFacebookSquare /> <p className='p-icons'>Facebook</p></a>
                    <a href=""><FaTwitterSquare /> <p className='p-icons'>Twitter</p></a>
                    <a href=""><FaInstagram /> <p className='p-icons'>Instagram</p></a>
                </section>
            </div>
            
            <div className='app__footer-bottom'>
                <p> Copyright © 2023 Smart-Shopping. <span>Hristo Yonkov</span>  All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer