import React, { useState, useEffect } from 'react';
import "../resources/item.css";
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import identifiers from "../types/Identifiers.type";
import Barcode from 'react-barcode';

type ItemProp = {
    type: keyof typeof identifiers,
    loggedIn: boolean,
    showNotification: ((message: string) => void)
}

function Item(props: ItemProp) {
    const identifier = identifiers[props.type];
    const { id } = useParams();
    const [item, setItem] = useState<any>(null);
    const [backup, setBackup] = useState<any>(null);
    const [editable, setEditable] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [updateModal, setUpdateModal] = useState(false);
    const [reason, setReason] = useState("");
    const history = useHistory();

    let form = null;
    let visualInfo = null;
    let buttons = null;


    useEffect(() => {
        axios.get(identifier.request + "/" + id).then(res => {
            setItem(res.data);
        }).catch(err => {
            console.log(err);
        })
    }, [id, identifier.request]);

    const startEdition = () => {
        setBackup(item);
        setEditable(true);
    }

    const saveEdition = () => {
        axios.put(identifier.request + "/" + id, { ...item }).then(res => {
            setItem(res.data);
            props.showNotification("Guardado Exitosamente!");
        }).catch(err => {
            console.log(err);
            setItem(backup);
            props.showNotification("Error al guardar, porfavor intente mas tarde.");
        })
        setEditable(false);
    }

    const deleteItem = () => {
        axios.delete(identifier.request + "/" + id).then(res => {
            // TODO: agregar al reporte
            setEditable(false);
            props.showNotification("Eliminado Exitosamente!");
            history.push("/materiales/" + props.type);
        }).catch(err => {
            console.log(err);
            props.showNotification("Error al eliminar, porfavor intente mas tarde.");
        })

    }

    const cancelEdition = () => {
        setItem(backup);
        setEditable(false);
    }

    const updateForm = (field: string) => {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            let itemCopy = { ...item };
            itemCopy[field] = e.target.value;
            setItem(itemCopy);
        }

    }
    if (item) {
        form = identifier.type.cols.map((col, id) =>
            <Form.Group key={id} controlId={"form" + col.name} className="itemData">
                <Form.Label className="font-weight-bold">{col.text}</Form.Label>
                <Form.Control type="text" value={item[col.name]} onChange={updateForm(col.name)} plaintext={(!(col.readonly)! && !editable) || (col.readonly)} readOnly={(!(col.readonly)! && !editable) || (col.readonly)} />
            </Form.Group>
        );
        visualInfo =
            <div>
                {"fotografia" in item && <div id="item-image">
                    <span className="vertical-center-helper"></span>
                    <img
                        src={item.fotografia}

                        alt=""
                    />
                    <Form.Control type="text" value={item.fotografia} onChange={updateForm("fotografia")} plaintext={!editable} readOnly={!editable} style={{ display: !editable ? "none" : "block" }} />
                </div>
                }
                {"codigo_barras" in item && <div id="item-barcode">
                    <Barcode value={item.codigo_barras} />
                    <Form.Control type="text" value={item.codigo_barras} onChange={updateForm("codigo_barras")} plaintext={!editable} readOnly={!editable} style={{ display: !editable ? "none" : "block" }} />
                </div>
                }

                {"descripcion" in item && <div id="item-descripcion">
                    <Form.Group controlId={"formDescripcion"} className="itemData">
                        <Form.Label className="font-weight-bold">Descripcion</Form.Label>
                        <Form.Control as="textarea" rows="3" value={item.descripcion} onChange={updateForm("descripcion")} plaintext={!editable} readOnly={!editable} />
                    </Form.Group>
                </div>
                }
            </div>
    }

    if (props.loggedIn) {
        if (!editable) {
            buttons = <div>
                <Button size="lg" variant="outline-primary" block onClick={startEdition}>Editar</Button>
                {(item!= null && "cantidad" in item) &&
                    <Button size="lg" variant="outline-info" block onClick={() => setUpdateModal(true)}>Modificar Cantidad</Button>
                }
            </div>
        }
        else {
            buttons = <div>
                <Button size="lg" variant="outline-success" block onClick={saveEdition}>Guardar</Button>
                <Button size="lg" variant="outline-danger" block onClick={() => setDeleteModal(true)}>Eliminar</Button>
                <Button size="lg" variant="outline-secondary" block onClick={cancelEdition}>Cancelar Cambios</Button>
            </div>
        }
    }

    return (
        <Container id="item-container">
            <Row>
                <Col>{visualInfo}</Col>
                <Col><Form>{form}</Form></Col>
                <Col>{buttons}</Col>
            </Row>
            <Modal
                show={deleteModal}
                onHide={() => setDeleteModal(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Eliminar
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId={"formDescripcion"} className="itemData">
                        <Form.Label className="font-weight-bold">Explicacion</Form.Label>
                        <Form.Control as="textarea" rows="3" value={reason} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setReason(e.target.value) }} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    Seguro que desea borrar este elemento.
                <Button variant="danger" onClick={deleteItem}>Eliminar</Button>
                    <Button variant="secondary" onClick={() => { setReason(""); setDeleteModal(false); }}>Cancelar</Button>
                </Modal.Footer>
            </Modal>
            {(item!= null && "cantidad" in item) &&
                <Modal
                    show={updateModal}
                    onHide={() => setUpdateModal(false)}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Modificar cantidad
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group controlId={"formDescripcion"} className="itemData">
                            <Form.Label className="font-weight-bold">Nueva cantidad</Form.Label>
                                <Form.Control type="number" value={item["cantidad"]} onChange={updateForm("cantidad")} min={0}/>
                            <Form.Label className="font-weight-bold">Explicacion</Form.Label>
                            <Form.Control as="textarea" rows="3" value={reason} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setReason(e.target.value) }} />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" onClick={()=>{saveEdition(); setUpdateModal(false)}}>Modificar</Button>
                        <Button variant="secondary" onClick={() => { setReason(""); setUpdateModal(false); cancelEdition();}}>Cancelar</Button>
                    </Modal.Footer>
                </Modal>
            }
        </Container >
    );
}

export default Item;