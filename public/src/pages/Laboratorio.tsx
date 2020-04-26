import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import ImageRetriever from '../utils/ImageRetriever'

type LaboratorioProps = {
    loggedIn: boolean,
    showNotification: ((messsage: string) => void)
}

function Laboratorio(props: LaboratorioProps) {
    const [img1, setImg1] = useState("");
    const [img2, setImg2] = useState("");
    const [img3, setImg3] = useState("");
    const [labs, setLabs] = useState<Array<any>>([]);
    const [newName, setNewName] = useState("");
    const [newURL, setNewURL] = useState("");
    const [editable, setEditable] = useState<Array<boolean>>([])
    const [backUp, setBackUp] = useState<Array<any>>([]);

    useEffect(() => {
        axios.get("/laboratorios").then(res => {
            setLabs(res.data);
            setBackUp(res.data);
            setEditable(res.data.map((i: any) => false));
        }).catch(err => {
            console.log(err);
        })
        ImageRetriever("home-img1", setImg1);
        ImageRetriever("home-img2", setImg2);
        ImageRetriever("home-img3", setImg3);
    }, []);

    const saveNew = () => {
        axios.post("/laboratorios", {
            nombre: newName,
            url: newURL,
            token: localStorage.getItem("token")
        }).then(res => {
            let copy = JSON.parse(JSON.stringify(labs));
            copy.push(res.data);
            setLabs(copy);
            setNewName("");
            setNewURL("");
        }).catch(err => {
            console.log(err);
        })
    }

    const save = (id: string) => {
        return () => {
            const index = labs.findIndex((item: any) => item._id === id);
            axios.put("/laboratorios/" + id, {
                nombre: labs[index].nombre,
                url: labs[index].url,
                token: localStorage.getItem("token")
            }).then(res => {
                props.showNotification("Guardado correctamente!");
                setEdit(index, false);
            }).catch(err => {
                props.showNotification("Hubo un error, porfavor intente mas tarde.");
                console.log(err);
            });
        }
    }

    const modifyField = (key: number, field: string) => {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            let copy = JSON.parse(JSON.stringify(labs));
            copy[key][field] = e.target.value
            setLabs(copy);
        }
    }

    const setEdit = (key: number, val: boolean) => {
        let copy = JSON.parse(JSON.stringify(editable));
        copy[key] = val
        setEditable(copy);
    }

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
                {
                    labs.map((item, key) =>
                        <Col xs={12} md={6} lg={3} key={item._id}>
                            <Card >
                                <Card.Body>
                                    {!editable[key] && <a href={item.url}>
                                        <Card.Title>{item.nombre}</Card.Title>
                                    </a>
                                    }
                                    {(editable[key] && props.loggedIn) && <Form.Group controlId="form" className="itemData">
                                        <Form.Label className="font-weight-bold">Nombre</Form.Label>
                                        <Form.Control type="text" value={item.nombre} onChange={modifyField(key, "nombre")} />
                                        <Form.Label className="font-weight-bold">URL</Form.Label>
                                        <Form.Control type="text" value={item.url} onChange={modifyField(key, "url")} />
                                    </Form.Group>}

                                </Card.Body>
                                {(!editable[key] && props.loggedIn) && <Card.Footer>
                                    <Button variant="outline-primary" onClick={() => { setEdit(key, true) }}>Editar</Button>
                                    <Button variant="outline-danger" onClick={saveNew}>Eliminar</Button>
                                </Card.Footer>}
                                {(editable[key] && props.loggedIn) && <Card.Footer>
                                    <Button variant="outline-secondary" onClick={() => { setEdit(key, false); setLabs(backUp) }}>Cancelar</Button>
                                    <Button variant="outline-success" onClick={save(item._id)}>Guardar</Button>
                                </Card.Footer>}

                            </Card>
                        </Col>
                    )
                }
                {props.loggedIn && <Col xs={12} md={6} lg={3}>
                    <Card >
                        <Card.Body>
                            <Form.Group controlId="formName" className="itemData">
                                <Form.Label className="font-weight-bold">Nombre</Form.Label>
                                <Form.Control type="text" value={newName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setNewName(e.target.value) }} />
                            </Form.Group>
                            <Form.Group controlId="formURL" className="itemData">
                                <Form.Label className="font-weight-bold">URL</Form.Label>
                                <Form.Control type="text" value={newURL} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setNewURL(e.target.value) }} />
                            </Form.Group>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="outline-success" onClick={saveNew}>Agregar</Button>
                        </Card.Footer>
                    </Card>
                </Col>}
            </Row>
        </Container>
    );
}

export default Laboratorio;