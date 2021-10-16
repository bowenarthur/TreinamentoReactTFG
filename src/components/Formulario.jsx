import React from "react"
import EdicaoPersonagens from "./EdicaoPersonagens"
import { inserirFilme, atualizarFilme } from "../Servico"

export default class Formulario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            foto: "",
            categoria: this.categorias[0],
            sinopse: "",
            ano: "",
            tempo: "",
            personagens: []
        }
    }

    categorias = ["Ação", "Comédia", "Documentário", "Drama", "Fantasia", "Ficção", "Romance", "Terror"]

    componentDidMount = () => {
        if (this.props.filme) {
            this.setState({
                nome: this.props.filme.nome,
                foto: this.props.filme.foto,
                categoria: this.props.filme.categoria,
                sinopse: this.props.filme.sinopse,
                ano: this.props.filme.ano,
                tempo: this.props.filme.tempo,
                personagens: this.props.filme.personagens
            })
        }
    }

    atualizarPersonagens = personagens => this.setState({ personagens })

    handleChange = event => this.setState({
        [event.target.name]: event.target.value
    })

    submit = event => {
        event.preventDefault()
        const data = this.state
        this.props.filme !== null ?
            atualizarFilme(this.props.filme._id, data) :
            inserirFilme(data)
    }

    render() {
        return (
            <div className="Modal">
                <a className="close" onClick={this.props.onClose}>
                    &times;
                </a>
                <form onSubmit={this.submit}>
                    <h2>Cadastro de Filme</h2>
                    <div className="Formulario">
                        <div>
                            <label htmlFor="nome">Nome: </label>
                            <input
                                type="text"
                                name="nome"
                                value={this.state.nome}
                                onChange={this.handleChange}
                                required
                            />
                            <br />
                            <label htmlFor="foto">URL da foto: </label>
                            <input
                                type="text"
                                name="foto"
                                value={this.state.foto}
                                onChange={this.handleChange}
                                required
                            />
                            <br />
                            <label htmlFor="categoria">Categoria: </label>
                            <select
                                name="categoria"
                                value={this.state.categoria}
                                onChange={this.handleChange}
                                required
                            >
                                {this.categorias.map(categoria => <option value={categoria}>
                                    {categoria}
                                </option>)}
                            </select>
                            <br />
                            <label htmlFor="sinopse">Sinopse: </label>
                            <textarea
                                name="sinopse"
                                value={this.state.sinopse}
                                onChange={this.handleChange}
                                rows="3"
                                required
                            />
                            <br />
                            <label htmlFor="ano">Ano: </label>
                            <input
                                type="number"
                                name="ano"
                                value={this.state.ano}
                                onChange={this.handleChange}
                                required
                            />
                            <br />
                            <label htmlFor="tempo">Duração: </label>
                            <input
                                type="text"
                                name="tempo"
                                value={this.state.tempo}
                                onChange={this.handleChange}
                                required
                            />
                            <br />
                        </div>
                        <EdicaoPersonagens
                            personagens={this.state.personagens}
                            onChange={this.atualizarPersonagens}
                        />
                    </div>
                    <input type="submit" className="BotaoCadastrar" value="Enviar" />
                </form>
            </div>
        )
    }
}
