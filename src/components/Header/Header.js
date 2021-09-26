import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <nav>
            <a href="Magazines">Magazines</a>
            <a href="Advertisements">Advertisements</a>
            <a href="Movies">Movies</a>
            <a href="Fashion">Fashion</a>
            </nav>
            <div className="header-selection">
                <h1>Heroine Selection for Movies</h1>
                <h3>Budget for Movie: 200Millions</h3>
            </div>
        </div>
    );
};

export default Header;