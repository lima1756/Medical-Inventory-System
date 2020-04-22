import React, { useState } from 'react';
import { useParams } from "react-router-dom";

type Item = {
    type: string
}

function Item(props: Item) {
    let { id } = useParams();
    console.log(id);
    return (<div></div>);
}

export default Item;