import React, { useState, useEffect } from 'react';
import "../resources/itemlist.css"
import axios from 'axios';
import { Container, Form } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Material from '../types/Material.type';
import Consumibles from '../types/Consumibles.type'
import Reactivo from '../types/Reactivo.type';
import Equipo from '../types/Equipo.type';
import Proveedor from '../types/Proovedor.type';

const identifiers = {
    material: {
        header: "Materiales",
        type: Material,
        request: "/inventario/material",
        to: "/materiales/material/"
    },
    consumibles: {
        header: "Consumibles",
        type: Consumibles,
        request: "/inventario/consumibles",
        to: "/materiales/consumibles/"
    },
    reactivos: {
        header: "Reactivos",
        type: Reactivo,
        request: "/inventario/reactivo",
        to: "/materiales/reactivos/"
    },
    equipo: {
        header: "Equipo",
        type: Equipo,
        request: "/inventario/equipo",
        to: "/materiales/equipo/"
    },
    proveedores: {
        header: "Proveedores",
        type: Proveedor,
        request: "/proveedores",
        to: "/materiales/proveedores/"
    }
}

type ItemListProps = {
    type: keyof typeof identifiers
}

function ItemList(props: ItemListProps) {
    const identifier = identifiers[props.type];
    let [items, setItems] = useState<Array<typeof identifier.type>>([]);
    let [search, setSearch] = useState("");


    useEffect(()=>{
        axios.get(identifier.request).then(res=>{
            setItems(res.data);
        }).catch(err=>{
            console.log(err);
        })
    });

    const rows = items.filter((item)=>{
        if(search.length === 0)
            return true;
        const regexp = new RegExp(search);
        const i = item as unknown as any;
        if("nombre" in item && "codigo_barras" in item){
            return regexp.test(i.nombre) || regexp.test(i.codigo_barras)
        }
        else if ("nombre" in item){
            return regexp.test(i.nombre);
        }
        return  false;
    }).map((item, id) => {
        const i = item as unknown as any;
        return (
            <LinkContainer to={"/materiales/"+props.type+"/"+i._id} key={i._id}>
                <div id="item">
                     {
                        "fotografia" in item && <div id="item-image">
                            <span className="helper"></span>
                            <img
                                        src={i.fotografia}
                                        className="d-inline-block"
                                        alt=""
                                    />
                            
                        </div>
                    }
                    <p>{i.nombre}</p>
                </div>
            </LinkContainer>
        )
    })
    
    return (
        <Container fluid id="itemlist">
            <h1>{identifier.header}</h1> 
            <Form.Control value={search} type="text" placeholder="Buscar" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setSearch(e.target.value);}}/>
            {rows}
        </Container>
    );
}

export default ItemList;