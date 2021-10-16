import React from 'react'
import { excluirFilme } from '../Servico'

export default props => (
    <div className="column">
        <div className="botoes">
            <a className="edit" onClick={props.mostrarCadastro}>
                &#9998;
            </a>
            <a className="delete" onClick={() => excluirFilme(props.children._id)}>
                &#128465;
            </a>
        </div>
        <div className="card" onClick={props.mostrarDetalhes}>
            <img alt="" src={props.children.foto} />
            <p>{props.children.nome}</p>
        </div>
    </div>
)