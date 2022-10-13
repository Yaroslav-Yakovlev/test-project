import React from 'react';

const Header = () => {
    return (
        <div className='nav'>
            <div className='logo'>
                <h4 onClick={() => console.log('header')} >Device.com</h4>
            </div>
        </div>
    );
};

export default Header;