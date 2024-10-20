import React from 'react';
import './footer.css';


const Footer = () => {
    return(
        <footer className="footer">
        <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Berits Hage Design. All rights reserved.</p>
        <div className='footer-links'>
        <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>Facebook</a>
        <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>Instagram</a>
        <a href='mailto:example@gmail.com'>Contact</a>
        </div>
        </div>
        </footer>
    );
};


export default Footer;