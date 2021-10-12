import React from "react";
import "./style.css";
import axios from "axios";
import Menu from "./menu";
import Popup from "reactjs-popup";
import Formulario from "./formulario";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filmes: [],
      filme: {},
      personagens: [],
      open: false,
      open1: false,
      tipo: "",
      categoria: ""
    };
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/dragscroll/0.0.8/dragscroll.min.js";
    script.async = true;
    document.body.appendChild(script);
    this.getFilmes();
  }

  getFilmes = () => {
    axios
      .get("https://frameworks-web.herokuapp.com/api/filmes")
      .then((res) => {
        this.setState({
          filmes: res.data
        });
      })
      .catch((err) => console.log(err));
  };

  renderFilmes = () => {
    return this.state.filmes.map((filme) => {
      return (
        <div className="column" key={filme._id}>
          <div className="botoes">
            <a
              className="edit"
              onClick={() => this.mostrarCadastro(filme, "Alterar")}
            >
              &#9998;
            </a>
            <a className="delete" onClick={() => this.deleteFilme(filme._id)}>
              &#128465;
            </a>
          </div>
          <div className="card">
            <div onClick={() => this.mostrarDetalhes(filme)}>
              <img alt="" src={filme.foto} />
              <p>{filme.nome}</p>
            </div>
          </div>
        </div>
      );
    });
  };

  mostrarDetalhes = (filme) => {
    this.setState({
      filme: filme,
      open: true,
      open1: false,
      personagens: filme.personagens
    });
  };

  mostrarCadastro = (filme, tipo) => {
    this.setState({
      open1: true,
      open: false,
      filme: filme,
      tipo: tipo
    });
  };

  deleteFilme = (id) => {
    axios
      .delete("https://frameworks-web.herokuapp.com/api/filmes/" + id)
      .then((res) => {
        alert("Filme deletado com sucesso");
        window.location.reload();
      })
      .catch((err) => {
        alert("Ocorreu um erro");
        console.log(err);
      });
  };

  renderPersonagens() {
    return this.state.personagens.map((personagem) => {
      return (
        <tr key={personagem._id}>
          <td>{personagem.nome}</td>
          <td>{personagem.ator}</td>
        </tr>
      );
    });
  }

  closeModal = () => {
    this.setState({
      open: false,
      filme: {}
    });
  };

  closeModal1 = () => {
    this.setState({
      open1: false,
      filme: {}
    });
  };

  render() {
    return (
      <div className="App">
        <div className="Header">
          <h3 className="TituloSite">LISTA DE FILMES</h3>
          <ul className="MenuSite">
            <li>
              <a onClick={() => this.mostrarCadastro({}, "Cadastro")}>
                CADASTRAR FILME
              </a>
            </li>
          </ul>
        </div>
        <h3>Últimos filmes</h3>
        <Menu />
        <h3>Ação</h3>
        <div className="scrollmenu row dragscroll">{this.renderFilmes()}</div>
        <Popup open={this.state.open} onClose={this.closeModal}>
          <div className="Modal">
            <a className="close" onClick={this.closeModal}>
              &times;
            </a>
            <h4>{this.state.filme.nome}</h4>
            <p>Sinopse: {this.state.filme.sinopse}</p>
            <p>Categoria: {this.state.filme.categoria}</p>
            <p>Duração: {this.state.filme.tempo}</p>
            <p>Ano: {this.state.filme.ano}</p>
            <p>Personagens:</p>
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
        </Popup>
        <Popup open={this.state.open1} onClose={this.closeModal1}>
          <div className="Modal">
            <a className="close" onClick={this.closeModal1}>
              &times;
            </a>
            <Formulario Filme={this.state.filme} Tipo={this.state.tipo} />
          </div>
        </Popup>
      </div>
    );
  }
}
