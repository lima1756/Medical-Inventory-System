import React from 'react';
import "../resources/materiales.css"
import { Container, Row, Col, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

type MaterialesProps = {
    loggedIn: boolean,
}

function Materiales(props: MaterialesProps) {
    const options = props.loggedIn ?
        ["Material", "Reactivos", "Equipo", "Consumibles", "Proovedores", "Reporte de modificaciones y actualizaciones"] :
        ["Material", "Reactivos", "Equipo", "Consumibles", "Proovedores"];
    const cards = options.map((op, key) => {
        return <Col xs={12} md={6} lg={3} key={key} className="d-flex align-items-stretch">
            <Card >
                <Card.Body>
                    <LinkContainer to={"/materiales/" + op.split(" ")[0].toLowerCase()}>
                        <button className="link-button"> 
                            <Card.Title>{op}</Card.Title>
                        </button>
                    </LinkContainer>
                </Card.Body>
            </Card>
        </Col>
    })
    return (
        <Container fluid id="materiales">
            <Row className="h-100">
                {
                    cards
                }
            </Row>
        </Container>
    );
}

export default Materiales;