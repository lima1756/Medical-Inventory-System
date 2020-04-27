import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import Image from '../components/Image';

type HomeProps = {
    loggedIn: boolean
}

function Home(props: HomeProps) {

    return (
        <Container className="h-80" fluid>
            <Row className="d-none d-md-flex h-75 overflow-hidden">
                <Col md={8} className="h-100" style={{paddingRight:1}}>
                    <Image className="fit-img" name="home-img1" loggedIn={props.loggedIn} />
                </Col>
                <Col md={4} className="h-100" style={{paddingLeft:1}}> 
                    <Image className="fit-img h-50" name="home-img2" loggedIn={props.loggedIn} />
                    <Image className="fit-img h-50" name="home-img3" loggedIn={props.loggedIn} />
                </Col>
            </Row>
            <Row className="h-25">
                <Col xs={12} md={6} lg={3}>
                    <Card >
                        <Image className="card-img-top" name="home-laboratorio" loggedIn={props.loggedIn} />
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
                        <Image className="card-img-top" name="home-materiales" loggedIn={props.loggedIn} />
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
                        <Image className="card-img-top" name="home-reservaciones" loggedIn={props.loggedIn} />
                        <Card.Body>
                            <a href="www.google.com">
                                <Card.Title>Reservaciones</Card.Title>
                            </a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={3}>
                    <Card >
                        <Image className="card-img-top" name="home-contacto" loggedIn={props.loggedIn} />
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