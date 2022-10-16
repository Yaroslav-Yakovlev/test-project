import React from 'react';
import { useParams } from "react-router-dom";

function Item({findItem}) {
    const {id} = useParams();
    const item = findItem(id);

    return(
        <div className='device'>
            <div className='device__dscr'>
                <h3>{item.brand}</h3>
                <ul>
                    <li>Screen: {item.screen}</li>
                    <li>Storage: {item.memory}</li>
                    <span className='price'>Price: {item.price}</span>
                    <button>Buy</button>
                </ul>
            </div>
        </div>
    )
}

export default Item;