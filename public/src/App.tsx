import React, { useState } from 'react';
import './resources/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Laboratorio from './pages/Laboratorio';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Materiales from './pages/Materiales';
import Item from './pages/Item';
import Reservaciones from './pages/Reservaciones';
import MainBar from './components/MainBar';


function App() {
    return (
        <div className="App h-100">
            <MainBar/>
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
