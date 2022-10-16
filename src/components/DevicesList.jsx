import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/styles.css';

function DevicesList(props) {
    const devices = props.list.data;

    return (
        <div className='devices__container' >
        <div className='container1'>
            {devices.map((device) => {
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
                                        <Link to={`/device/${device.id}`}>Description</Link>
                                    </button>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
        </div>
    )
}

export default DevicesList;