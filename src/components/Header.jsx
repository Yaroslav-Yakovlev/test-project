import React from 'react';
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const goHome = () => navigate('/')

    return (
        <div className='nav'>
            <div className='logo' onClick={goHome}>
                <h4>Device.com</h4>
            </div>
        </div>
    );
};

export default Header;