import React from 'react';
import Header from './Header';
import Footer from './Footer';
import DevicesList from "./DevicesList";

const  DevicesContainer = (props) => {
    const samsungList = props.data.filter(item => item.brand === 'Samsung')
    const iPhoneList = props.data.filter(item => item.brand === 'iPhone')

    return (
        <div>
            <Header />
                <DevicesList list={samsungList} />
                <DevicesList list={iPhoneList} />
            <Footer />
        </div>
    );
};

export default DevicesContainer;