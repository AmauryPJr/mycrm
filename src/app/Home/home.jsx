import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar/navbar'
import ListaClientes from '../Components/ListaCliente/listacliente'
import './home.css'

import firebase from '../Config/firebase.js';
import 'firebase/firestore'

import SweetAlert from 'react-bootstrap-sweetalert';

function Home() {
    const [clientes, setClientes] = useState([]);
    const [busca, setBusca] = useState('');
    const [texto, setTexto] = useState('');
    const [excluido, setExcluido] = useState('');
    const [confirmacao, setConfirmacao] = useState(false);
    const [confirmacaoId, setConfirmacaoId] = useState('');

    function deleteUser(id) {
        firebase.firestore().collection('clientes').doc(id).delete()
            .then(() => {
                setExcluido(id);
                setConfirmacao(false);
            })
    }

    function confirmDelete(id) {
        setConfirmacao(true);
        setConfirmacaoId(id);
    }

    useEffect(() => {
        let listaCli = [];

        firebase.firestore().collection('clientes').get()
            .then(async (resultado) => {
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
    }, [busca, excluido]);

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

                <ListaClientes dados={clientes} delecao={confirmDelete} />

                {
                    confirmacao === true ?
                        <SweetAlert
                            warning
                            showCancel
                            showCloseButton
                            reverseButtons
                            confirmBtnText="Sim"
                            confirmBtnBsStyle="danger"
                            cancelBtnText="Não"
                            cancelBtnBsStyle="light"
                            title="Exclusão"
                            onConfirm={() => deleteUser(confirmacaoId)}
                            onCancel={() => setConfirmacao(false)}
                        >
                            Deseja realmente excluir o cliente selecionado?
                        </SweetAlert>
                        : null
                }
            </div>
        </div>
    );
}

export default Home;