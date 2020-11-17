import React from 'react';

const Header = () => {
    return (
        <nav className="nav">
            <h2>Logo</h2>
            <ul className="ul__menu">
                <a href="#"><li className="menu__home">Home</li></a>
                <a href="#"><li className="menu__profile">Profile</li></a>
                <a href="#"><li className="menu__infomation">Infomation</li></a>
                <a hreff="#"><li className="menu__hum"></li></a>
            </ul>
        </nav>
    );
}

export default Header;