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
        if (this.state.nome != "" && this.state.ator != "") {
            let personagens = this.props.personagens ?? []
            personagens.push({ nome: this.state.nome, ator: this.state.ator })
            this.props.onChange(personagens)

            this.setState({
                nome: "",
                ator: ""
            })
        }
    }

    removerPersonagem = nome => {
        const personagens = this.props.personagens
            .filter(item => item.nome != nome)
        this.props.onChange(personagens)
    }

    render() {
        return (
            <div className="edicao">
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

                <ListaPersonagens onClick={this.removerPersonagem}>
                    {this.props.personagens}
                </ListaPersonagens>
            </div>
        )
    }
}