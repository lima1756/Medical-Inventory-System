import React from 'react';
import "../resources/materiales.css"
import { Container, Row, Col, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

function Materiales() {
    const options = ["Material", "Reactivos", "Equipo", "Consumibles", "Proovedores", "Reporte de modificaciones y actualizaciones"];
    const cards = options.map((op, key) => {
        return <Col xs={12} md={6} lg={3} key={key} className="d-flex align-items-stretch">
            <Card >
                <Card.Body>
                    <LinkContainer to={"/materiales/" + op.split(" ")[0].toLowerCase()}>
                        <a>
                            <Card.Title>{op}</Card.Title>
                        </a>
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