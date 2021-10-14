import React from "react"
import "./style.css"
import Popup from "reactjs-popup"
import Formulario from "./components/Formulario"
import Header from './components/Header'
import ListaFilmes from "./components/ListaFilmes"
import Detalhes from './components/Detalhes'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filme: { personagens: [] },
            open: false,
            open1: false,
            tipo: ""
        }
    }

    componentDidMount() {
        const script = document.createElement("script")
        script.src =
            "https://cdnjs.cloudflare.com/ajax/libs/dragscroll/0.0.8/dragscroll.min.js"
        script.async = true
        document.body.appendChild(script)
    }

    mostrarDetalhes = (filme) => this.setState({
        filme: filme,
        open: true,
        open1: false,
        personagens: filme.personagens
    })

    mostrarCadastro = (filme, tipo) => this.setState({
        open1: true,
        open: false,
        filme: filme,
        tipo: tipo
    })

    closeModal = () => this.setState({
        open: false,
        open1: false,
        filme: { personagens: [] }
    })

    render() {
        return (
            <div className="App">
                <Header onClick={() => this.mostrarCadastro(this.state.filme, "Cadastro")} />
                <ListaFilmes
                    titulo="Últimos filmes"
                    mostrarCadastro={this.mostrarCadastro}
                    mostrarDetalhes={this.mostrarDetalhes}
                />
                <ListaFilmes
                    titulo="Ação"
                    categoria="Ação"
                    mostrarCadastro={this.mostrarCadastro}
                    mostrarDetalhes={this.mostrarDetalhes}
                />
                <Detalhes open={this.state.open} onClose={this.closeModal}>
                    {this.state.filme}
                </Detalhes>
                <Popup open={this.state.open1} onClose={this.closeModal}>
                    <Formulario
                        filme={this.state.filme}
                        tipo={this.state.tipo}
                        onClose={this.closeModal}
                    />
                </Popup>
            </div>
        )
    }
}
