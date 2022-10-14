import React from 'react';
import { useParams } from "react-router-dom";


function SamsungItem(props) {
    const {samsungList} = props;
    const {id} = useParams();

    const selectItem = samsungList.find((item) => item.id === Number(id));


    return(

        <div className='device'>
            <div className='device__dscr'>
                <h3>{selectItem.brand}</h3>
                <ul>
                    <li>Screen: {selectItem.screen}</li>
                    <li>Storage: {selectItem.memory}</li>
                    <span className='price'>Price: {selectItem.price}</span>

                    <button>Buy</button>
                </ul>
            </div>
        </div>
    )
}

export default SamsungItem;