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
                <h1>Heroine Selection for Summer</h1>
                <h3>Total Budget: 100Millions</h3>
            </div>
        </div>
    );
};

export default Header;