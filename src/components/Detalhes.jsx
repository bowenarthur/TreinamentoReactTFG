import React from 'react'
import Popup from 'reactjs-popup'
import ListaPersonagens from './ListaPersonagens'

export default props => (
    <div className="modal">
        <a className="close" onClick={props.onClose}>
            &times;
        </a>
        <h4>{props.children.nome}</h4>
        <p>Sinopse: {props.children.sinopse}</p>
        <p>Categoria: {props.children.categoria}</p>
        <p>Duração: {props.children.duracao} min</p>
        <p>Ano: {props.children.ano}</p>
        <ListaPersonagens>
            {props.children.personagens}
        </ListaPersonagens>
    </div>
)
