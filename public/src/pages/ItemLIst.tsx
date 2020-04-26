import React, { useState, useEffect } from 'react';
import "../resources/itemlist.css"
import axios from 'axios';
import { Container, Form } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import identifiers from '../types/Identifiers.type'

type ItemListProps = {
    type: keyof typeof identifiers
}

function ItemList(props: ItemListProps) {
    const identifier = identifiers[props.type];
    let [items, setItems] = useState<Array<any>>([]);
    let [search, setSearch] = useState("");


    useEffect(()=>{
        axios.get(identifier.request).then(res=>{
            setItems(res.data);
        }).catch(err=>{
            console.log(err);
        })
    }, [identifier.request]);

    const rows = items.filter((item)=>{
        if(search.length === 0)
            return true;
        const regexp = new RegExp(search);
        if("nombre" in item && "codigo_barras" in item){
            return regexp.test(item.nombre) || regexp.test(item.codigo_barras)
        }
        else if ("nombre" in item){
            return regexp.test(item.nombre);
        }
        return  false;
    }).map((item, id) => {
        return (
            <LinkContainer to={"/materiales/"+props.type+"/"+item._id} key={item._id}>
                <div className="list-item">
                     {
                        "fotografia" in item && <div className="list-item-image">
                            <span className="vertical-center-helper"></span>
                            <img
                                        src={item.fotografia}
                                        className="d-inline-block"
                                        alt=""
                                    />
                            
                        </div>
                    }
                    <p>{item.nombre}</p>
                </div>
            </LinkContainer>
        )
    })
    
    return (
        <Container fluid id="itemlist">
            <h1>{identifier.header}</h1> 
            <Form.Control value={search} type="text" placeholder="Buscar: Nombre o codigo de barras" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setSearch(e.target.value);}}/>
            {rows}
        </Container>
    );
}

export default ItemList;