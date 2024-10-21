import react from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <div className='logo'>Berits Hage Design</div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/services">Services</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
