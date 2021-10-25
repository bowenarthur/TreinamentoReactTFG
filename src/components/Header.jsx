import React from 'react'

export default props => (
    <div className="Header">
        <h3 className="TituloSite">LISTA DE FILMES</h3>
        <ul className="MenuSite">
            <li>
                <a onClick={props.onClick}>
                    CADASTRAR FILME
                </a>
            </li>
        </ul>
    </div>
)