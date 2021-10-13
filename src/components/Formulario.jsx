import React from "react";
import "../style.css";
import axios from "axios";

export default class Formulario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            personagens: [],
            nomepersonagem: "",
            ator: "",
            nome: "",
            foto: "",
            categoria: "",
            sinopse: "",
            ano: "",
            tempo: ""
        };
    }

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
            });
        }
    };

    renderPersonagens() {
        if (this.state.personagens) {
            return this.state.personagens.map((personagem) => {
                return (
                    <tr
                        key={personagem._id}
                        onClick={() => this.removerPersonagem(personagem.nome)}
                    >
                        <td>{personagem.nome}</td>
                        <td>{personagem.ator}</td>
                    </tr>
                );
            });
        }
    }

    adicionarPersonagem = () => {
        let aux = this.state.personagens;
        if (aux) {
            aux[aux.length] = {
                nome: this.state.nomepersonagem,
                ator: this.state.ator
            };
        } else {
            aux = [
                {
                    nome: this.state.nomepersonagem,
                    ator: this.state.ator
                }
            ];
        }
        this.setState({
            personagens: aux,
            nomepersonagem: "",
            ator: ""
        });
    };

    removerPersonagem = (nome) => {
        let aux = this.state.personagens;
        let indice;
        aux.map((p, index) => {
            if (p.nome === nome) {
                indice = index;
            }
        });
        aux.splice(indice, 1);
        this.setState({
            personagens: aux,
            nomepersonagem: "",
            ator: ""
        });
    };

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    };

    submit = (event) => {
        event.preventDefault();
        let data = {
            nome: this.state.nome,
            foto: this.state.foto,
            categoria: this.state.categoria,
            sinopse: this.state.sinopse,
            ano: this.state.ano,
            tempo: this.state.tempo,
            personagens: this.state.personagens
        };
        if (this.props.tipo === "Alterar") {
            axios
                .put(
                    "https://frameworks-web.herokuapp.com/api/filmes/" +
                    this.props.filme._id,
                    data
                )
                .then((res) => {
                    alert("Filme alterado com sucesso!");
                    window.location.reload();
                })
                .catch((err) => {
                    alert("Ocorreu um erro");
                    console.log(err);
                });
        } else if (this.props.tipo === "Cadastro") {
            axios
                .post("https://frameworks-web.herokuapp.com/api/filmes", data)
                .then((res) => {
                    alert("Filme cadastrado com sucesso!");
                    window.location.reload();
                })
                .catch((err) => {
                    alert("Ocorreu um erro");
                    console.log(err);
                });
        }
    };

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
                                <option value=""> </option>
                                <option value="Ação">Ação</option>
                                <option value="Comédia">Comédia</option>
                                <option value="Documentário">Documentário</option>
                                <option value="Drama">Drama</option>
                                <option value="Fantasia">Fantasia</option>
                                <option value="Ficção">Ficção</option>
                                <option value="Romance">Romance</option>
                                <option value="Terror">Terror</option>
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
                        <div>
                            <h3>Personagens</h3>
                            <br />
                            <label htmlFor="nomepersonagem">Nome: </label>
                            <input
                                type="text"
                                name="nomepersonagem"
                                value={this.state.nomepersonagem}
                                onChange={this.handleChange}
                            />
                            <br />
                            <label htmlFor="personagem">Ator/Atriz: </label>
                            <input
                                type="text"
                                name="ator"
                                value={this.state.ator}
                                onChange={this.handleChange}
                            />
                            <button type="button" onClick={this.adicionarPersonagem}>
                                Adicionar
                            </button>

                            <table className="Tabela">
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Ator/Atriz</th>
                                    </tr>
                                </thead>
                                <tbody>{this.renderPersonagens()}</tbody>
                            </table>
                        </div>
                    </div>
                    <input type="submit" className="BotaoCadastrar" value="Enviar" />
                </form>
            </div>
        )
    }
}
