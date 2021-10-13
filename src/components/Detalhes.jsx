import React from 'react'
import Popup from 'reactjs-popup'

export default class Detalhes extends React.Component {
    constructor(props) {
        super(props)
    }

    renderPersonagens = _ => this.props.children.personagens.map(
        personagem => (
            <tr key={personagem._id}>
                <td>{personagem.nome}</td>
                <td>{personagem.ator}</td>
            </tr>
        )
    )

    render = _ => (
        <Popup open={this.props.open} onClose={this.props.onClose}>
            <div className="Modal">
                <a className="close" onClick={this.props.onClose}>
                    &times;
                </a>
                <h4>{this.props.children.nome}</h4>
                <p>Sinopse: {this.props.children.sinopse}</p>
                <p>Categoria: {this.props.children.categoria}</p>
                <p>Duração: {this.props.children.tempo}</p>
                <p>Ano: {this.props.children.ano}</p>
                <table className="Tabela">
                    <thead>
                        <tr>
                            <th>Personagem</th>
                            <th>Ator/Atriz</th>
                        </tr>
                    </thead>
                    <tbody>{this.renderPersonagens()}</tbody>
                </table>
            </div>
        </Popup>
    )
}