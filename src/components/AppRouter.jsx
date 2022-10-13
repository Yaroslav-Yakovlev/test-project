import React from 'react';
import {Route, Routes} from "react-router-dom";
import DevicesContainer from "./DevicesContainer";
import Item from './Item';
import NotFound from "./NotFound";

const AppRouter = () => {
    const samsungList = [
        {id: 1, brand: 'Samsung', price: '12 400', screen: '5.7', memory: '64GB'},
        {id: 2, brand: 'Samsung', price: '18600', screen: '8.7', memory: '128GB'},
        {id: 3, brand: 'Samsung', price: '13 800', screen: '2.7', memory: '512GB'},
    ];

    // const selectItem = (itemId) => {
    //     return samsungList.find(({id}) => id === itemId)
    // }

    return (
       <Routes>
           <Route path='/' element={<DevicesContainer samsungList={samsungList} />} />
           <Route path='/device/:id' element={<Item  samsungList={samsungList} />} />
           <Route path='*' element={<NotFound/>}/>
       </Routes>
    );
};

export default AppRouter;