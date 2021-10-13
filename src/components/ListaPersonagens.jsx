import React from 'react'

export default props => props.children.map(personagem => (
    <tr key={personagem._id}>
        <td>{personagem.nome}</td>
        <td>{personagem.ator}</td>
    </tr>
))