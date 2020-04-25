import React, { useState, useEffect } from 'react';
import "../resources/item.css";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import identifiers from "../types/Identifiers.type";
import Barcode from 'react-barcode';

type ItemProp = {
    type: keyof typeof identifiers
}

function Item(props: ItemProp) {
    const identifier = identifiers[props.type];
    let { id } = useParams();
    let [item, setItem] = useState<any>(null);
    let [backup, setBackup] = useState<any>(null);
    let [editable, setEditable] = useState(false);


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

        // TODO: use axios to send to backEnd
    }

    const cancelEdition = () => {
        setItem(backup);
        setEditable(false);
    }

    const updateForm = () => {
        return (e:React.ChangeEvent<HTMLInputElement>) => {
            //e.target.value
        }
        
    }
    let form = null;
    let visualInfo = null;
    if (item) {
        form = identifier.type.cols.map((col, id) =>
            <Form.Group key={id} controlId={"form" + col.name} className="itemData">
                <Form.Label className="font-weight-bold">{col.text}</Form.Label>
                <Form.Control type="text" value={item[col.name]} plaintext={(!(col.readonly)! && !editable) || (col.readonly)} readOnly={(!(col.readonly)! && !editable) || (col.readonly)} />
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
                    <Form.Control type="text" value={item.fotografia} plaintext={!editable} readOnly={!editable} style={{display:!editable?"none":"block"}}/>
                </div>
                }
                {"codigo_barras" in item && <div id="item-barcode">
                    <Barcode value={item.codigo_barras} />
                    <Form.Control type="text" value={item.codigo_barras} plaintext={!editable} readOnly={!editable} style={{display:!editable?"none":"block"}} />
                </div>
                }

                {"descripcion" in item && <div id="item-descripcion">
                    <Form.Group controlId={"formDescripcion"} className="itemData">
                        <Form.Label className="font-weight-bold">Descripcion</Form.Label>
                        <Form.Control type="text" value={item.descripcion} plaintext={!editable} readOnly={!editable} />
                    </Form.Group>
                </div>
                }
            </div>
    }

    return (
        <Container id="item-container">
            <Row>
                <Col>{visualInfo}</Col>
                <Col><Form>{form}</Form></Col>
                <Col>
                    {!editable && <div>
                        <Button size="lg" variant="outline-primary" block onClick={startEdition}>Editar</Button>
                        <Button size="lg" variant="outline-info" block>Modificar Cantidad</Button>
                    </div>
                    }
                    {editable && <div>
                        <Button size="lg" variant="outline-success" block>Guardar</Button>
                        <Button size="lg" variant="outline-danger" block>Eliminar</Button>
                        <Button size="lg" variant="outline-secondary" block onClick={cancelEdition}>Cancelar Cambios</Button>
                    </div>
                    }

                    {/* Edit Button -> (save, cancel, delete buttons) &  Edit quantity -> (opens modal)*/}
                </Col>
            </Row>
        </Container>
    );
}

export default Item;