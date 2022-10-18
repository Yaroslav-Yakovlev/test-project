import React from 'react';
import {Link, useParams} from "react-router-dom";
import Header from "./Header";

function Item({findItem}) {
    const {id} = useParams();
    const item = findItem(id);

    return(
        <div>
            <Header/>
        <div className='device'>
            <div className='device__dscr'>
                <h3>{item.brand}</h3>
                <ul>
                    <li>Screen: {item.screen}</li>
                    <li>Storage: {item.memory}</li>
                    <span className='price'>Price: {item.price}</span>
                        <Link to={'/device/:id/cart'}>
                            <button>Buy</button>
                        </Link>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Item;