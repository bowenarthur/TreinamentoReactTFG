import React from 'react'

export default props => props.children ? props.children.length != 0 &&
    <table className="Tabela">
        <thead>
            <tr>
                <th>Personagem</th>
                <th>Ator/Atriz</th>
            </tr>
        </thead>
        <tbody>
            {props.children && props.children.map(personagem => (
                <tr key={personagem.nome} onClick={() => props.onClick(personagem.nome)}>
                    <td>{personagem.nome}</td>
                    <td>{personagem.ator}</td>
                </tr>
            ))}
        </tbody>
    </table> : ''


