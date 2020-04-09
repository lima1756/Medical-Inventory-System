import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import ImageRetriever from '../utils/ImageRetriever'

function Home() {
    const [img1, setImg1] = useState("");
    const [img2, setImg2] = useState("");
    const [img3, setImg3] = useState("");
    const [imgLaboratorio, setImgLaboratorio] = useState("");
    const [imgMateriales, setImgMateriales] = useState("");
    const [imgReservaciones, setImgReservaciones] = useState("");
    const [imgContacto, setImgContacto] = useState("");
    ImageRetriever("home-img1", setImg1);
    ImageRetriever("home-img2", setImg2);
    ImageRetriever("home-img3", setImg3);
    ImageRetriever("home-laboratorio", setImgLaboratorio);
    ImageRetriever("home-materiales", setImgMateriales);
    ImageRetriever("home-reservaciones", setImgReservaciones);
    ImageRetriever("home-contacto", setImgContacto);
    return (
        <Container className="h-100" fluid>
            <Row className="d-none d-md-block h-75">
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
            <Row className="h-25">
                <Col xs={12} md={6} lg={3}>
                    <Card >
                        <Card.Img variant="top" src={imgLaboratorio} />
                        <Card.Body>
                            <LinkContainer to="/laboratorio">
                                <button className="link-button">
                                    <Card.Title>Laboratorio</Card.Title>
                                </button>
                            </LinkContainer>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={3}>
                    <Card >
                        <Card.Img variant="top" src={imgMateriales} />
                        <Card.Body>
                            <LinkContainer to="/materiales">
                                <button className="link-button">
                                    <Card.Title>Equipo/Materiales</Card.Title>
                                </button>

                            </LinkContainer>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={3}>
                    <Card >
                        <Card.Img variant="top" src={imgReservaciones} />
                        <Card.Body>
                            <a href="www.google.com">
                                <Card.Title>Reservaciones</Card.Title>
                            </a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={3}>
                    <Card >
                        <Card.Img variant="top" src={imgContacto} />
                        <Card.Body>
                            <LinkContainer to="/contacto">
                                <button className="link-button">
                                    <Card.Title>Contacto</Card.Title>
                                </button>
                            </LinkContainer>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;