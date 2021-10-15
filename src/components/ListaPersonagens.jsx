import React from 'react'

export default props => (
    <table className="Tabela">
        <thead>
            <tr>
                <th>Personagem</th>
                <th>Ator/Atriz</th>
            </tr>
        </thead>
        <tbody>
            {props.children.map(personagem => (
                <tr key={personagem._id} onClick={() => props.onClick(personagem.nome)}>
                    <td>{personagem.nome}</td>
                    <td>{personagem.ator}</td>
                </tr>
            ))}
        </tbody>
    </table>
)
