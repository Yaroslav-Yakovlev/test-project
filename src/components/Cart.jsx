import React from 'react';

const Cart = (item) => {
    return (
        <div className='cart'>
            <h1>Congratulation you buy </h1>
            <div className='device__dscr'>
                <h3>{item.brand}</h3>
                <ul>
                    <li>Screen: {item.screen}</li>
                    <li>Storage: {item.memory}</li>
                    <span className='price'>Price: {item.price}</span>
                </ul>
            </div>
        </div>
    );
};

export default Cart;