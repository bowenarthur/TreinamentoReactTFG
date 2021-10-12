import React from 'react'
import '../style.css'

export default props => (
    <div className="column" key={props.data._id}>
        <div className="botoes">
            <a className="edit" onClick={props.mostrarCadastro}>
                &#9998;
            </a>
            <a className="delete" onClick={props.deleteFilme}>
                &#128465;
            </a>
        </div>
        <div className="card">
            <div onClick={props.mostrarDetalhes}>
                <img alt="" src={props.data.foto} />
                <p>{props.data.nome}</p>
            </div>
        </div>
    </div>
)