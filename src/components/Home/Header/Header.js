import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css'
import Nav from './../../Shared/Nav/Nav';

const Header = () => {
    return (
        <div className="header-container">
            <Nav/>
            <HeaderMain/>
            <BusinessInfo/>
        </div>
    );
};

export default Header;