import React from 'react';
import {Route, Routes} from "react-router-dom";
import DevicesContainer from "./DevicesContainer";
import Item from './SamsungItem';
import NotFound from "./NotFound";
import SamsungItem from "./SamsungItem";
import IPhoneItem from "./IPhoneItem";

const AppRouter = () => {
    const data = {
        samsungList: [
            {id: 1, brand: 'Samsung', price: '12 400', screen: '5.7', memory: '64GB'},
            {id: 2, brand: 'Samsung', price: '18600', screen: '8.7', memory: '128GB'},
            {id: 3, brand: 'Samsung', price: '13 800', screen: '2.7', memory: '512GB'},
        ],
        iPhoneList: [
            {id: 1, brand: 'iPhone', price: '28 400', screen: '5.7', memory: '64GB'},
            {id: 2, brand: 'iPhone', price: '38 600', screen: '7.7', memory: '128GB'},
            {id: 3, brand: 'iPhone', price: '48 800', screen: '8.7', memory: '512GB'},
        ]
    }

    const {samsungList, iPhoneList} = data;

    return (
       <Routes>
           <Route path='/' element={<DevicesContainer samsungList={samsungList} iPhoneList={iPhoneList} />} />
           <Route path='/device samsung/:id' element={<SamsungItem samsungList={samsungList} />}/>
           <Route path='/device iphone/:id' element={<IPhoneItem iPhoneList={iPhoneList} />}/>
           <Route path='*' element={<NotFound/>}/>
       </Routes>
    );
};

export default AppRouter;