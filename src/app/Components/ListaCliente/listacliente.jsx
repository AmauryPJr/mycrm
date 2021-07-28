import { Link } from 'react-router-dom';
import './listacliente.css';

function ListaClientes(props) {
    function deleteUser(id) {
        alert('Excluir usuário ' + id);
    }
    
    return (
        <table className="table table-hover table-bordered">
            <thead className="table-secondary">
                <tr>
                    <th scope="col">Código</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Email</th>
                    <th scope="col">Telefone</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {
                    props.dados.map((cliente) => (
                        <tr key={cliente.id}>
                            <th scope="row">{cliente.id}</th>
                            <td>{cliente.nome}</td>
                            <td>{cliente.email}</td>
                            <td>{cliente.fone}</td>
                            <th>
                                <Link to={`/app/editarcliente/${cliente.id}`}><i className="fas fa-edit icone"></i></Link>
                                <Link to="" onClick={() => deleteUser(cliente.id)}><i className="far fa-trash-alt icone red"></i></Link>
                            </th>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
};

export default ListaClientes;
