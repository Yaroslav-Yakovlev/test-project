import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SamsungDevicesList from './SamsungDevicesList';
import IPhoneDeviceList from "./IPhoneDeviceList";

const  DevicesContainer = (props) => {
    const {samsungList, iPhoneList} = props;

    return (
        <div>
            <Header />
            <SamsungDevicesList samsungList={samsungList} />
            <IPhoneDeviceList iPhoneList={iPhoneList} />
            <Footer />
        </div>
    );
};

export default DevicesContainer;