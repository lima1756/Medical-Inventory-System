import React, { useState } from 'react';
import "../resources/itemlist.css"
import { Container, Row, Col, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import ImageRetriever from '../utils/ImageRetriever'

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
    return (
        <Container fluid id="itemlist">
            <h1>{headers[props.type]}</h1>
            <Row>
            </Row>
        </Container>
    );
}

export default ItemList;