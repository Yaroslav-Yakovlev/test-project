import React from 'react';
import Header from './Header';
import Footer from './Footer';
import DevicesList from "./DevicesList";

const  DevicesContainer = (data) => {

    return (
        <div>
            <Header />
        <DevicesList list={data} />
            <Footer />
        </div>
    );
};

export default DevicesContainer;