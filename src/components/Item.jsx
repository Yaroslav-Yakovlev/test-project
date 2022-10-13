import React from 'react';
import { useParams } from "react-router-dom";

function Item(props) {
    const {samsungList} = props;
    const {id} = useParams();

    const selectItem = samsungList.find((item) => item.id === Number(id));

    console.log('selectItem', selectItem);

    return(
        <>
            {`Item description ${selectItem.brand}`}
        </>
    )
}

export default Item;