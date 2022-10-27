import React from 'react';
import {Route, Routes} from "react-router-dom";
import DevicesContainer from "./DevicesContainer";
import NotFound from "./NotFound";
import Item from "./Item";
import Cart from "./Cart";


const AppRouter = () => {
    const data = [
        {id: 1, brand: 'Samsung', price: '12 400', screen: '5.7', memory: '64GB', image: require('../image/samsung.png')},
        {id: 2, brand: 'Samsung', price: '18 600', screen: '8.7', memory: '128GB', image: require('../image/samsung.png')},
        {id: 3, brand: 'Samsung', price: '13 800', screen: '6.7', memory: '512GB', image: require('../image/samsung.png')},
        {id: 4, brand: 'iPhone', price: '28 400', screen: '5.7', memory: '64GB', image: require('../image/iPhone.png')},
        {id: 5, brand: 'iPhone', price: '38 600', screen: '7.7', memory: '128GB', image: require('../image/iPhone.png')},
        {id: 6, brand: 'iPhone', price: '48 800', screen: '8.7', memory: '512GB', image: require('../image/iPhone.png')},
    ]

    const findItem = (id) => data.find((item) => item.id === Number(id))


    return (
       <Routes>
               <Route path='/' element={<DevicesContainer data={data} />} />
               <Route path='/device/:id' element={<Item findItem={findItem}/>}/>
               <Route path='/device/:id/cart' element={<Cart findItem={findItem}/>}/>
               <Route path='*' element={<NotFound/>}/>
       </Routes>
    );
};

export default AppRouter;