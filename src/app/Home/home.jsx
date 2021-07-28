import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar/navbar'
import './home.css'
import ListaClientes from '../Components/ListaCliente/listacliente'
import firebase from '../Config/firebase.js';
import 'firebase/firestore'
import { Link } from 'react-router-dom';

function Home() {
    const [clientes, setClientes] = useState([]);
    const [busca, setBusca] = useState('');
    const [texto, setTexto] = useState('');
    
    useEffect(() => {
        let listaCli = [];

        firebase.firestore().collection('clientes').get().then(async (resultado) => {
            await resultado.docs.forEach((doc) => {
                if (doc.data().nome.indexOf(busca) >= 0) {
                    listaCli.push({
                        id: doc.id,
                        nome: doc.data().nome,
                        email: doc.data().email,
                        fone: doc.data().fone
                    });
                }
            });

            setClientes(listaCli);
        });
    }, [busca]);

    return (
        <div>
            <Navbar />
            <div className="container-fluid titulo">
                <h1>Cadastro de Clientes</h1>

                <div className="row">
                    <div className="col-4">
                        <Link to="/app/novocliente" className="btn btn-primary"><i className="fas fa-plus"></i> Cliente</Link>
                    </div>

                    <div className="col-8">
                        <div className="input-group mb-3">
                            <input onChange={(e) => setTexto(e.target.value)} type="text" className="form-control" placeholder="Pesquisar por Nome" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button onClick={() => setBusca(texto)} className="btn btn-primary" type="button" id="button-addon2"><i className="fas fa-search"></i> Pesquisar</button>
                        </div>
                    </div>
                </div>

                <ListaClientes dados={clientes} />
            </div>
        </div>
    );
}

export default Home;