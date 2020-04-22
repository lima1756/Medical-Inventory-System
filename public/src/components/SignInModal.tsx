import React, {useState} from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import axios from 'axios';

type SignInModalProps = {
    show: boolean,
    handleClose: (()=>void)
}

function SignInModal(props: SignInModalProps) {
    let [user, setUser] = useState("");
    let [pass, setPass] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        
        axios.post("/login", {
            "user": user,
            "password": pass
        }).then(res=>{
            if(res.data.token){
                localStorage.setItem("token", res.data.token);
                setError(false);
                props.handleClose();
            }
            else
            {
                setErrorMessage("Please check your user/password");
                setError(true);
            }
        }).catch(err=>{
            setErrorMessage("There was a problem reaching the server, please try again later.");
            setError(true);
        })
        
    };

    const handleUserChange = (e: React.FormEvent<HTMLInputElement>)=>{
        setUser(e.currentTarget.value);
    }

    const handlePassChange = (e: React.FormEvent<HTMLInputElement>)=>{
        setPass(e.currentTarget.value);
    }

    return (
        <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>SignIn</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="user">
                <Form.Label>User</Form.Label>
                <Form.Control type="text" placeholder="Enter your username" value={user} onChange={handleUserChange}/>
            </Form.Group>

            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={pass} onChange={handlePassChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
        </Modal.Body>
        {error && <Modal.Footer>
            <Alert variant="warning">
                {errorMessage}
            </Alert>
            </Modal.Footer>}
      </Modal>
    );
}



export default SignInModal;
