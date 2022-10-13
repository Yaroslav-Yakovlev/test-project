import React from 'react';
import { useParams } from "react-router-dom";

function Item() {
    const {id} = useParams();

    return(
        <>
            {`Item description ${id}`}
        </>
    )
}

export default Item;