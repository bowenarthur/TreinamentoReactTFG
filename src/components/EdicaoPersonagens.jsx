import ListaPersonagens from "./ListaPersonagens"
import React from 'react'

export default class EdicaoPersonagens extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nome: "",
            ator: ""
        }
    }

    handleChange = event => this.setState({
        [event.target.name]: event.target.value
    })

    adicionarPersonagem = _ => {
        this.props.adicionarPersonagem(this.state.nome, this.state.ator)
        this.setState({
            nome: "",
            ator: ""
        })
    }

    render() {
        return (
            <div>
                <h3>Personagens</h3>
                <br />
                <label htmlFor="nome">Nome: </label>
                <input
                    type="text"
                    name="nome"
                    value={this.state.nome}
                    onChange={this.handleChange}
                />
                <br />
                <label htmlFor="ator">Ator/Atriz: </label>
                <input
                    type="text"
                    name="ator"
                    value={this.state.ator}
                    onChange={this.handleChange}
                />
                <button type="button"
                    onClick={this.adicionarPersonagem}>
                    Adicionar
                </button>

                <ListaPersonagens onClick={this.props.removerPersonagem}>
                    {this.props.children}
                </ListaPersonagens>
            </div>
        )
    }
}