import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import ImageRetriever from '../utils/ImageRetriever'
import axios from 'axios';


type ImageProps = {
    name: string,
    loggedIn: boolean,
    className?: string,
    height?: number,
    width?: number
}

function Image(props: ImageProps) {
    const [img, setImg] = useState("");
    const [copy, setCopy] = useState("");
    const [modalShow, setModalShow] = useState(false);
    
    useEffect(()=>{
        ImageRetriever(props.name, setImg);
    },[props.name]);

    const cancel = () => {
        setImg(copy);
        setModalShow(false);
    }

    const save = () => {
        axios.put("/images/" + props.name, {"name": props.name, "url": img}).then(res => {
            setImg(res.data.url);
            setCopy(res.data.url);
            setModalShow(false);
        }).catch(err => {
            console.log(err);
        })
    }

    const openModal = () => {
        if(props.loggedIn) {
            setCopy(img);
            setModalShow(true);
        }
    }

    const changeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setImg(e.target.value);
    }

    return (
        <>
            <img
                src={img}
                className={props.className}
                alt=""
                onClick={openModal}
                height={props.height}
                width={props.height}
            />
            <Modal
                show={modalShow && props.loggedIn}
                onHide={cancel}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Set new image
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>URL</Form.Label>
                        <Form.Control type="text" value={img} onChange={changeForm} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={cancel}>Cancel</Button>
                    <Button variant="outline-success" onClick={save}>Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}



export default Image;
