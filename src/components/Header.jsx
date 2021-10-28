import React from 'react'

export default props => (
    <div className="header">
        <h3 className="titulo-site">LISTA DE FILMES</h3>
        <ul className="menu-site">
            <li>
                <a onClick={props.onClick}>
                    CADASTRAR FILME
                </a>
            </li>
        </ul>
    </div>
)