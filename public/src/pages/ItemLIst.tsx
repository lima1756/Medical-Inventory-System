import React, { useState, useEffect } from 'react';
import "../resources/itemlist.css"
import axios from 'axios';
import { Container, Form, Button, Modal } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import identifiers from '../types/Identifiers.type'

type ItemListProps = {
    type: keyof typeof identifiers,
    loggedIn: boolean,
    showNotification: ((message: string) => void)
}

function ItemList(props: ItemListProps) {
    const identifier = identifiers[props.type];
    const [items, setItems] = useState<Array<any>>([]);
    const [search, setSearch] = useState("");
    const [newModal, setNewModal] = useState(false);
    const [formFields, setFormFields] = useState<any>({});
    const [form, setForm] = useState<Array<any>>([]);

    const cleanForm = () => {
        const cloneForm = JSON.parse(JSON.stringify(formFields));
        for (const [key] of Object.entries(cloneForm)) {
            cloneForm[key] = "";
        }
        setFormFields(cloneForm);
    }

    const save = () => {
        axios.post(identifier.request, {
            ...formFields,
            token: localStorage.getItem("token")
        }).then(res => {
            const cloneItems = JSON.parse(JSON.stringify(items));
            cloneItems.push(res.data);
            setItems(cloneItems);
            report(res.data);
            props.showNotification("Guardado Exitosamente!");
            setNewModal(false);
        }).catch(err => {
            console.log(err);
            props.showNotification("Error al guardar, porfavor intente mas tarde.");
        })

        
    }

    const report = (obj: any) => {
        axios.post('/report',  {
            ...{
                object: obj,
                "type": identifier.header,
                "action": "Creacion",
                "reason": "Nuevo elemento añadido al inventario"
            },
            token: localStorage.getItem("token")
        }).catch(err=>{report(obj)});
    }

    useEffect(() => {
        axios.get(identifier.request).then(res => {
            setItems(res.data);
        }).catch(err => {
            console.log(err);
        })

        let formStructure: any = {};

        identifier.type.cols.map(col => { formStructure[col.name] = ""; return 0; });
        if ("descripcion" in identifier.type)
            formStructure["descripcion"] = "";
        if ("fotografia" in identifier.type)
            formStructure["fotografia"] = "";
        if ("codigo_barras" in identifier.type)
            formStructure["codigo_barras"] = "";
        setFormFields(formStructure);

    }, [identifier]);

    

    useEffect(() => {
        const updateForm = (field: string) => {
            return (e: React.ChangeEvent<HTMLInputElement>) => {
                let itemCopy = { ...formFields };
                itemCopy[field] = e.target.value;
                setFormFields(itemCopy);
            }
        }

        let formConstructor = identifier.type.cols.map((col, id) => {
            return <Form.Group key={id} controlId={"form" + col.name} className="itemData">
                <Form.Label className="font-weight-bold">{col.text}</Form.Label>
                <Form.Control type="text" value={formFields[col.name]} onChange={updateForm(col.name)} />
            </Form.Group>
        }
        );
        

        if ("descripcion" in identifier.type) {
            formConstructor.push(
                <Form.Group key="5001" controlId={"formDescripcion"} className="itemData">
                    <Form.Label className="font-weight-bold">Descripcion</Form.Label>
                    <Form.Control as="textarea" rows="3" value={formFields["descripcion"]} onChange={updateForm("descripcion")} />
                </Form.Group>
            );
        }
        if ("fotografia" in identifier.type) {
            formConstructor.push(
                <Form.Group key="5000" controlId={"formFotografia"} className="itemData">
                    <Form.Label className="font-weight-bold">Fotografia</Form.Label>
                    <Form.Control type="text" value={formFields["fotografia"]} onChange={updateForm("fotografia")} />
                </Form.Group>
            );
        }
        if ("codigo_barras" in identifier.type) {
            formConstructor.push(
                <Form.Group key="5002" controlId={"formcodigo"} className="itemData">
                    <Form.Label className="font-weight-bold">Codigo de Barras</Form.Label>
                    <Form.Control type="text" value={formFields["codigo_barras"]} onChange={updateForm("codigo_barras")} />
                </Form.Group>
            );
        }
        setForm(formConstructor);
       
    }, [formFields, identifier.type])


    const rows = items.filter((item) => {
        if (search.length === 0)
            return true;
        const regexp = new RegExp(search);
        if ("nombre" in item && "codigo_barras" in item) {
            return regexp.test(item.nombre) || regexp.test(item.codigo_barras)
        }
        else if ("nombre" in item) {
            return regexp.test(item.nombre);
        }
        return false;
    }).map((item, id) => {
        return (
            <LinkContainer to={"/materiales/" + props.type + "/" + item._id} key={item._id}>
                <div className="list-item">
                    {
                        "fotografia" in item && <div className="list-item-image">
                            <span className="vertical-center-helper"></span>
                            <img
                                src={item.fotografia}
                                className="d-inline-block"
                                alt=""
                            />

                        </div>
                    }
                    <p>{item.nombre}</p>
                </div>
            </LinkContainer>
        )
    })

    return (
        <Container fluid id="itemlist">
            <h1>{identifier.header}</h1>
            <Form className="form-horizontal">

                <Form.Control value={search} type="text" placeholder="Buscar: Nombre o codigo de barras" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setSearch(e.target.value); }} />
                {props.loggedIn &&
                    <Button variant="outline-success" onClick={() => { setNewModal(true) }}>Nuevo</Button>
                }


            </Form>
            {rows}

            <Modal
                show={newModal}
                onHide={() => setNewModal(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Agregar nuevo
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {form}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => { setNewModal(false); cleanForm(); }} variant="outline-primary">Close</Button>
                    <Button onClick={() => { save(); }} variant="outline-success">Save</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default ItemList;