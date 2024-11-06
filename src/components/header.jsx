import react from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <div className='logo'>Berits Hage Design</div>
            <nav>
                <ul>
                    <li><Link to="/">Hjem</Link></li>
                    <li><Link to="/about">Om Meg</Link></li>
                    <li><Link to="/contact">Kontakt</Link></li>
                    <li><Link to="/services">Tjenester</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
