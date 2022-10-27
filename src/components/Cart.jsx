import React from 'react';
import {Link, useParams} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Cart = ({findItem}) => {
    const {id} = useParams();
    const item = findItem(id);

    return (
        <div>
            <Header/>
            <main className='main-cart'>
                <h2>Congratulation you buy</h2>
                <div className='device-item'>
                    <div className='item-device-dscr'>
                        <img className='img-device' alt='image' src={item.image}/>
                        <h2>{item.brand}</h2>
                        <ul>
                            <li>Screen: {item.screen}</li>
                            <li>Storage: {item.memory}</li>
                            <div className='price-button'>
                                <span className='price'>Price: {item.price}</span>
                            </div>
                        </ul>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default Cart;