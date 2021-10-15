import "./style.css"
import React from "react"
import Popup from "reactjs-popup"
import Formulario from "./components/Formulario"
import Header from './components/Header'
import ListaFilmes from "./components/ListaFilmes"
import Detalhes from './components/Detalhes'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filme: {},
            openDetalhes: false,
            openForm: false,
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
        openDetalhes: true,
        openForm: false,
        personagens: filme.personagens
    })

    mostrarCadastro = (filme, tipo) => this.setState({
        openForm: true,
        openDetalhes: false,
        filme: filme,
        tipo: tipo
    })

    closeModal = () => this.setState({
        openDetalhes: false,
        openForm: false,
        filme: {}
    })

    render() {
        return (
            <div className="App">
                <Header onClick={() => this.mostrarCadastro({}, "Cadastro")} />
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
                {this.state.openDetalhes &&
                    <Detalhes open={this.state.openDetalhes} onClose={this.closeModal}>
                        {this.state.filme}
                    </Detalhes>}
                {this.state.openForm &&
                    <Popup open={this.state.openForm} onClose={this.closeModal}>
                        <Formulario
                            filme={this.state.filme}
                            tipo={this.state.tipo}
                            onClose={this.closeModal}
                        />
                    </Popup>}
            </div>
        )
    }
}
