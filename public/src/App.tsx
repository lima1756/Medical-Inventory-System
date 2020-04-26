import React, { useState } from 'react';
import './resources/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import { Toast } from 'react-bootstrap';
import Laboratorio from './pages/Laboratorio';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Materiales from './pages/Materiales';
import ItemList from './pages/ItemLIst';
import MainBar from './components/MainBar';
import Item from './components/Item';
import NoMatch from './pages/NoMatch';
import SignInModal from './components/SignInModal';


function App() {

    const [signInShow, setSignInShow] = useState(false);
    const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token") != null);
    const [notifications, setNotifications] = useState<Array<JSX.Element>>([]);
    const handleSignInClose = () => { setSignInShow(false); }
    const handleLoginModalLogout = () => {
        if (loggedIn) {
            localStorage.clear();
            setLoggedIn(false);
        }
        else {
            setSignInShow(true);
        }
    }

    const showNotification = (message: string) => {
        let copynotfs = [...notifications];
        const key = Date.now();
        copynotfs.push(
            <Toast key={key} onClose={removeNotification(key)} delay={2500} autohide>
                <Toast.Header>
                    <strong className="mr-auto">Sistema de Inventario</strong>
                </Toast.Header>
                <Toast.Body>{message}</Toast.Body>
            </Toast>
        )
        setNotifications(copynotfs);
    }

    const removeNotification = (key: any) => {
        return () => {
            setNotifications(notifications.filter((item) => (item.key !== key)));
        }
    }

    return (
        <div className="App h-100">
            <MainBar signInLogOut={handleLoginModalLogout} loggedIn={loggedIn} />
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/laboratorio" exact={true} children={<Laboratorio loggedIn={loggedIn} showNotification={showNotification} />} />
                <Route path="/materiales" exact={true} component={Materiales} />
                <Route path="/contacto" exact={true} component={Contacto} />
                <Route path="/materiales/material" exact={true} render={(props) => <ItemList {...props} type="material" loggedIn={loggedIn} />} />
                <Route path="/materiales/consumibles" exact={true} render={(props) => <ItemList {...props} type="consumibles" loggedIn={loggedIn} />} />
                <Route path="/materiales/reactivos" exact={true} render={(props) => <ItemList {...props} type="reactivos" loggedIn={loggedIn} />} />
                <Route path="/materiales/equipo" exact={true} render={(props) => <ItemList {...props} type="equipo" loggedIn={loggedIn} />} />
                <Route path="/materiales/proveedores" exact={true} render={(props) => <ItemList {...props} type="proveedores" loggedIn={loggedIn} />} />
                {/* <Route path="/materiales/reporte" exact={true} render={(props) => <ItemList {...props} type="reporte" />} /> */}
                <Route path="/materiales/material/:id" children={<Item type="material" loggedIn={loggedIn} showNotification={showNotification} />} />
                <Route path="/materiales/consumibles/:id" children={<Item type="consumibles" loggedIn={loggedIn} showNotification={showNotification} />} />
                <Route path="/materiales/reactivo/:id" children={<Item type="reactivos" loggedIn={loggedIn} showNotification={showNotification} />} />
                <Route path="/materiales/equipo/:id" children={<Item type="equipo" loggedIn={loggedIn} showNotification={showNotification} />} />
                <Route path="/materiales/proveedores/:id" children={<Item type="proveedores" loggedIn={loggedIn} showNotification={showNotification} />} />
                <Route path="*">
                    <NoMatch />
                </Route>
            </Switch>
            <SignInModal show={signInShow} handleClose={handleSignInClose} setLoggedIn={setLoggedIn} />
            <div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                }}
            >
                {notifications.map(item => item)}

            </div>
        </div>
    );
}



export default App;
