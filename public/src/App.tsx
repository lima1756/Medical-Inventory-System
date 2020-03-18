import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import ImageRetriever from './helpers/ImageRetriever'
import { Switch, Route } from 'react-router-dom';
import Laboratorio from './Laboratorio';
import Home from './Home';
import Contacto from './Contacto';
import Materiales from './Materiales';
import Item from './Item';
import Reservaciones from './Reservaciones';
import { LinkContainer } from 'react-router-bootstrap'

function App() {

    const [logo, setLogo] = useState("");

    ImageRetriever("logo", setLogo);


    return (
        <div className="App">
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
                            <LinkContainer to="/materiales/reactivo">
                                <NavDropdown.Item >Reactivo</NavDropdown.Item>
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
                        <LinkContainer to="/reservaciones">
                            <Nav.Link>Reservaciones</Nav.Link>
                        </LinkContainer>                        
                        <LinkContainer to="/contacto">
                            <Nav.Link>Contacto</Nav.Link>    
                        </LinkContainer>
                    </Nav>
                    <Form inline>
                        <Button variant="outline-primary">SignIn</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <Switch>
                <Route path={"/"} exact={true} component={Home} />
                <Route path={"/laboratorio"} exact={true} component={Laboratorio} />
                <Route path={"/materiales"} exact={true} component={Materiales} />
                <Route path={"/materiales/material"} exact={true} render={(props) => <Item {...props} type={"material"} />} />
                <Route path={"/materiales/consumibles"} exact={true} render={(props) => <Item {...props} type={"material"} />} />
                <Route path={"/materiales/reactivo"} exact={true} render={(props) => <Item {...props} type={"material"} />} />
                <Route path={"/materiales/equipo"} exact={true} render={(props) => <Item {...props} type={"material"} />} />
                <Route path={"/materiales/proveedores"} exact={true} render={(props) => <Item {...props} type={"material"} />} />
                <Route path={"/materiales/reporte"} exact={true} render={(props) => <Item {...props} type={"material"} />} />
                <Route path={"/reservaciones"} exact={true} component={Reservaciones} />
                <Route path={"/contacto"} exact={true} component={Contacto} />
            </Switch>
        </div>
    );
}



export default App;
