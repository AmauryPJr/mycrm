import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

/* Páginas */
import Site from './Site/site'
import Login from './app/Login/login'
import NovaConta from './app/NovaConta/novaconta'
import RecuperarSenha from './app/RecuperarSenha/recuperarsenha'
import Home from './app/Home/home'
import Cliente from './app/Cliente/cliente'
import NovoCliente from './app/NovoCliente/novocliente';
import EditarCliente from './app/EditarCliente/editarcliente'

function App() {
    return <BrowserRouter>
        <Route exact path="/" component={Site} />
        <Route exact path="/app" component={Login} />
        <Route exact path="/app/novaconta" component={NovaConta} />
        <Route exact path="/app/recuperarsenha" component={RecuperarSenha} />
        <Route exact path="/app/home" component={Home} />
        <Route exact path="/app/cliente" component={Cliente} />
        <Route exact path="/app/novocliente" component={NovoCliente} />
        <Route exact path="/app/editarcliente/:id" component={EditarCliente} />
    </BrowserRouter>;
}

export default App;
