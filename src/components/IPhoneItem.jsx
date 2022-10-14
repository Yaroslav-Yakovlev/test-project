import React from "react";
import { useParams } from "react-router-dom";


function IPhoneItem (props) {
    const {iPhoneList} = props
    const {id} = useParams()

    const selectedItem = iPhoneList.find((item) => item.id === Number(id));

    return (
        <div className='device'>
            <div className='device__dscr'>
                <h3>{selectedItem.brand}</h3>
                <ul>
                    <li>Screen: {selectedItem.screen}</li>
                    <li>Storage: {selectedItem.memory}</li>
                    <span className='price'>Price: {selectedItem.price}</span>
                    <button>Buy</button>
                </ul>
            </div>
        </div>

    )
}

export default IPhoneItem;