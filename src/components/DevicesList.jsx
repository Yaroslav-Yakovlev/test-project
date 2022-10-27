import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/styles.css';
import devicesContainer from "./DevicesContainer";

function DevicesList({list}) {
    return (
        <div className='device-container'>
            {list.map((device) => {
                return (
                    <div className='device' key={device.id}>
                        <img className='img-device' src={device.image}/>
                        <div className='device-dscr'>
                            <h3>{device.brand}</h3>
                            <ul>
                                <li>Screen: {device.screen}</li>
                                <li>Storage: {device.memory}</li>
                                <span className='price'>Price: {device.price}</span>
                                <div className="line"></div>
                                <button className='btn-dscr'>
                                    <Link to={`/device/${device.id}`}>Description</Link>
                                </button>
                            </ul>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default DevicesList;