import React from 'react';
import {Link} from "react-router-dom";

function IPhoneDeviceList(props) {
    const { iPhoneList } = props


    return (
        <div className='container2'>
            {iPhoneList.map((device) => {
                console.log(device.id)
                return (
                    <div className='single__device' key={device.id}>
                        <div className='device'>
                            <div className='device__dscr'>
                                <h3>{device.brand}</h3>
                                <ul>
                                    <li>Screen: {device.screen}</li>
                                    <li>Storage: {device.memory}</li>
                                    <span className='price'>Price: {device.price}</span>

                                    <button>
                                        <Link to={`/device iphone/${device.id}`}>Description</Link>
                                    </button>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    );
};

export default IPhoneDeviceList;