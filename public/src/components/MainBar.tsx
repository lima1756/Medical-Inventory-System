
import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import ImageRetriever from '../utils/ImageRetriever'
import { LinkContainer } from 'react-router-bootstrap'

type MainBarProps = {
    loggedIn: boolean,
    signInLogOut: (()=>void)
}


function MainBar(props: MainBarProps) {

    const [logo, setLogo] = useState("");

    ImageRetriever("logo", setLogo);
    return (
        <Navbar bg="light" expand="lg">
                <LinkContainer to="/">
                    <Navbar.Brand >
                        <img
                            src={logo}
                            height="60"
                            className="d-inline-block"
                            alt=""
                        />
                        {' '}LABORATORIOS MEDICINA</Navbar.Brand>
                    </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/laboratorio">
                            <Nav.Link>Laboratorio</Nav.Link>
                        </LinkContainer>
                        <NavDropdown title="Equipo/Materiales" id="basic-nav-dropdown">
                            <LinkContainer to="/materiales/material">
                                <NavDropdown.Item >Material</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/materiales/reactivos">
                                <NavDropdown.Item >Reactivos</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/materiales/equipo">
                                <NavDropdown.Item >Equipo</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/materiales/consumibles">
                                <NavDropdown.Item >Consumibles</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/materiales/proveedores">
                                <NavDropdown.Item >Proveedores</NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Divider />
                            <LinkContainer to="/materiales/reporte">
                                <NavDropdown.Item >Reporte</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                        
                            <Nav.Link href="https://www.google.com">Reservaciones</Nav.Link>
                        <LinkContainer to="/contacto">
                            <Nav.Link>Contacto</Nav.Link>    
                        </LinkContainer>
                    </Nav>
                    <Form inline>
                        <Button variant="outline-primary" onClick={props.signInLogOut}>{!props.loggedIn?"SignIn":"LogOut"}</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
    );
}



export default MainBar;


