import React from 'react';
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa'

import './Footer.scss';

const Footer = () => {
    return (
        <footer className='app__footer'>
            <div className='app__footer-top'>
                <section className='app__footer-section'>
                    <h3>Privacy & Cookies Policy</h3>
                    <a href="https://www.shopify.com/tools/policy-generator/"><p>Web Terms of Use</p></a>
                    <a href="https://www.termsfeed.com/blog/terms-conditions-faq/"><p>Customer Terms & Conditions</p></a>
                    <a href="https://www.w3.org/WAI/fundamentals/accessibility-intro/"><p>Accessibility</p></a>
                </section>

                <section className='app__footer-section'>
                    <h3>Company</h3>
                    <a href="https://github.com/HristoYonkov/C4-Nexus-Task"><p>About 'Smart-Shopping'</p></a>
                    <a href="https://www.websitepolicies.com/"><p>Policies</p></a>
                    <a href="https://www.c4nexus.com/careers"><p>Careers</p></a>
                </section>

                <section className='app__footer-section'>
                    <h3>Contact Us</h3>
                    <a href="https://github.com/HristoYonkov/C4-Nexus-Task"><FaGithubSquare /> <p className='p-icons'>GitHub</p></a>
                    <a href="https://www.linkedin.com/in/hristo-yonkov-444156260/"><FaLinkedin /> <p className='p-icons'>LinkedIn</p></a>
                    <a href="https://www.facebook.com/"><FaFacebookSquare /> <p className='p-icons'>Facebook</p></a>
                </section>
            </div>
            
            <div className='app__footer-bottom'>
                <p> Copyright © 2023 'Smart-Shopping'. <span>Hristo Yonkov</span>  All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer