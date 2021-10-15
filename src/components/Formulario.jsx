import React from "react"
import axios from "axios"
import EdicaoPersonagens from "./EdicaoPersonagens";

export default class Formulario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            personagens: [],
            nome: "",
            foto: "",
            categoria: "",
            sinopse: "",
            ano: "",
            tempo: ""
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
            });
        }
    }

    adicionarPersonagem = (nome, ator) => {
        let aux = this.state.personagens;
        if (aux) {
            aux[aux.length] = {
                nome: nome,
                ator: ator
            };
        } else {
            aux = [
                {
                    nome: nome,
                    ator: ator
                }
            ];
        }
        this.setState({ personagens: aux })
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
        this.setState({ personagens: aux })
    };

    handleChange = event => this.setState({
        [event.target.name]: event.target.value
    })

    submit = (event) => {
        event.preventDefault();
        let data = {
            nome: this.state.nome,
            foto: this.state.foto,
            categoria: this.state.categoria ?? this.categorias[0],
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
                            adicionarPersonagem={this.adicionarPersonagem}
                            removerPersonagem={this.removerPersonagem}>
                            {this.state.personagens}
                        </EdicaoPersonagens>
                    </div>
                    <input type="submit" className="BotaoCadastrar" value="Enviar" />
                </form>
            </div>
        )
    }
}
