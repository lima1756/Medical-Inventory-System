import React from 'react';
import '../resources/contacto.css'
import { Container, Row } from 'react-bootstrap';
import { IconContext } from "react-icons";
import { MdPersonPin } from "react-icons/md"


function Contacto() {
    return (
        <Container className="h-100" id="contacto">
            <div>
                <IconContext.Provider value={{ size: "5em" }}>
                    <div>
                        <MdPersonPin />
                    </div>
                </IconContext.Provider>
                <p><b>
                    Laboratorios Medicina    
                </b></p>
                <p>Correo Electronico: <a href="mailto:labs.emcs.gdl@servicios.itesm.mx">labs.emcs.gdl@servicios.itesm.mx</a></p>
            </div>
        </Container>
    );
}

export default Contacto;