import React from 'react'
import Popup from 'reactjs-popup'
import ListaPersonagens from './ListaPersonagens'

export default props => (
    <Popup open={props.open} onClose={props.onClose}>
        <div className="Modal">
            <a className="close" onClick={props.onClose}>
                &times;
            </a>
            <h4>{props.children.nome}</h4>
            <p>Sinopse: {props.children.sinopse}</p>
            <p>Categoria: {props.children.categoria}</p>
            <p>Duração: {props.children.tempo}</p>
            <p>Ano: {props.children.ano}</p>
            <ListaPersonagens>
                {props.children.personagens}
            </ListaPersonagens>
        </div>
    </Popup>
)
