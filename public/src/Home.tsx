import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';

function Home() {
    const [img1, setImg1] = useState("");
    const [img2, setImg2] = useState("");
    const [img3, setImg3] = useState("");
    const [imgLaboratorio, setImgLaboratorio] = useState("");
    const [imgMateriales, setImgMateriales] = useState("");
    const [imgReservaciones, setImgReservaciones] = useState("");
    const [imgContacto, setImgContacto] = useState("");
    return (
        <Container>
        <Row className="d-none d-sm">
            <Col>1 of 2</Col>
            <Col>2 of 2</Col>
        </Row>
        <Row>
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
        </Row>
        </Container>
    );
}

export default Home;