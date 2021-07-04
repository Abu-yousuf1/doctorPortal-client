import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import MainHeader from '../MainHeader/MainHeader';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import './header.css'

const Header = () => {
    return (
        <div className="header-container">
            <Navbar></Navbar>
            <MainHeader></MainHeader>
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header;