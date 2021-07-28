import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import Navbar from '../Components/Navbar/navbar';
import './novocliente.css'
import firebase from '../Config/firebase.js';

function NovoCliente() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [fone, setFone] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [sucesso, setSucesso] = useState('N');
    const db = firebase.firestore();

    function cadastrarCliente() {
        if (nome.length === 0) {
            setMensagem('Informe o Nome');
        }
        else if (email.length === 0) {
            setMensagem('Informe o Email');
        }
        else {
            db.collection('clientes').add({
                nome: nome,
                email: email,
                fone: fone
            }).then(() => {
                setMensagem('');
                setSucesso('S');
            }).catch((error) => {
                setMensagem(error);
                setSucesso('N');
            })
        }
    }

    return (
        <div>
            <Navbar />
            <div className="container-fluid titulo">
                <div className="offset-lg-3 col-lg-6">

                    <h1>Novo Cliente</h1>

                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Nome</label>
                            <input onChange={(e) => setNome(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Fone</label>
                            <input onChange={(e) => setFone(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>

                        <div className="text-center ">
                            <Link to="/app/home" type="button" className="btn btn-outline-danger btn-acao">Cancelar</Link>
                            <button onClick={cadastrarCliente} type="button" className="btn btn-success btn-acao">Salvar</button>
                        </div>

                        {mensagem.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{mensagem}</div> : null}
                        {sucesso === 'S' ? <Redirect to="/app/home" /> : null}
                    </form>

                </div>
            </div>
        </div>
    )
};

export default NovoCliente;
