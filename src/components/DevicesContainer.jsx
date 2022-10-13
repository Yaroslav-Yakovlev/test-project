import React from 'react';
import Header from './Header';
import Footer from './Footer';
import DevicesList from './DevicesList';

const  DevicesContainer = (props) => {
    const {samsungList} = props;
    return (
        <div>
            <Header />
            <DevicesList list={samsungList} />
            <Footer />
        </div>
    );
};

export default DevicesContainer;