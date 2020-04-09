import React, { useState } from 'react';
import "../resources/itemlist.css"
import axios from 'axios';
import { Container, Form } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

const headers = {
    material: "Materiales",
    consumibles: "Consumibles",
    reactivos: "Reactivos",
    equipo: "Equipo",
    proveedores: "Proveedores"
}

type ItemListProps = {
    type: keyof typeof headers
}

function ItemList(props: ItemListProps) {
    let [items, setItems] = useState<Array<any>>([]);
    let [search, setSearch] = useState("");

    axios.get("/inventario/material").then(res=>{
        setItems(res.data);
    }).catch(err=>{
    console.log(err);
    })

    const rows = items.filter((item)=>{
        if(search.length==0)
            return true;
        const regexp = new RegExp(search);
        return regexp.test(item.nombre) || regexp.test(item.codigo_barras);
    }).map((item, id) => {
        return (
            <LinkContainer to={"/materiales/"+props.type+"/"+item._id} key={item._id}>
                <div id="item">
                    <div id="item-image">
                        <span className="helper"></span>
                        <img
                            src={item.fotografia}
                            className="d-inline-block"
                            alt=""
                        />
                    </div>
                    <p>{item.nombre}</p>
                </div>
            </LinkContainer>
        )
    })
    return (
        <Container fluid id="itemlist">
            <h1>{headers[props.type]}</h1> 
            <Form.Control value={search} type="text" placeholder="Buscar" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setSearch(e.target.value);}}/>
            {rows}
        </Container>
    );
}

export default ItemList;