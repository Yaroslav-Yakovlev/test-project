import React from 'react';
import Header from './Header';
import Footer from './Footer';
import DevicesList from "./DevicesList";
import '../image/samsung.png';
import '../image/iPhone.png';

const  DevicesContainer = ({ data }) => {
    const samsungList = data.filter(item => item.brand === 'Samsung')
    const iPhoneList = data.filter(item => item.brand === 'iPhone')

    return (
        <div>
            <Header />
            <main className='main'>
                <DevicesList src={data.image} list={samsungList} />
                <DevicesList src={data.image} list={iPhoneList} />
            </main>
            <Footer />
        </div>
    );
};

export default DevicesContainer;