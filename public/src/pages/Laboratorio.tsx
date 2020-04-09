import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import ImageRetriever from '../utils/ImageRetriever'

function Laboratorio() {
    const [img1, setImg1] = useState("");
    const [img2, setImg2] = useState("");
    const [img3, setImg3] = useState("");

    ImageRetriever("home-img1", setImg1);
    ImageRetriever("home-img2", setImg2);
    ImageRetriever("home-img3", setImg3);
    return (
        <Container className="h-100" fluid>
        <Row className="d-none d-md-block h-25">
            <img
                src={img1}
                className="d-inline-block"
                alt=""
            />
            <img
                src={img2}
                className="d-inline-block"
                alt=""
            />
            <img
                src={img3}
                className="d-inline-block"
                alt=""
            />
        </Row>
        <Row className="h-75">
            <Col xs={12} md={6} lg={3}>
                <Card >
                    <Card.Body>
                        <LinkContainer to="/laboratorio">
                            <a>
                                <Card.Title>Reglamento de laboratorio</Card.Title>
                            </a>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    );
}

export default Laboratorio;