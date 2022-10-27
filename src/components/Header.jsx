import React from 'react';
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const logoClickHandler = () => navigate('/')

    return (
        <div className='header'>
            <div className='logo-container' >
                <h4 className='logo' onClick={logoClickHandler}>Device.com</h4>
            </div>
        </div>
    );
};

export default Header;