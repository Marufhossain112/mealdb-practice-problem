import React from 'react';
import "./Header.css"
const Header = () => {
    return (
        <nav>
            <ul className='header'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Content</a></li>
                <li><a href="#">Suggestion</a></li>
            </ul>
        </nav>
    );
};

export default Header;