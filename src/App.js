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
            filme: null,
            openDetalhes: false,
            openForm: false
        }
    }

    componentDidMount() {
        const script = document.createElement("script")
        script.src =
            "https://cdnjs.cloudflare.com/ajax/libs/dragscroll/0.0.8/dragscroll.min.js"
        script.async = true
        document.body.appendChild(script)
    }

    mostrarDetalhes = filme => this.setState({
        filme: filme,
        openDetalhes: true,
        openForm: false
    })

    mostrarCadastro = filme => this.setState({
        filme: filme,
        openDetalhes: false,
        openForm: true
    })

    closeModal = _ => this.setState({
        filme: null,
        openDetalhes: false,
        openForm: false
    })

    render() {
        return (
            <div className="App">
                <Header onClick={() => this.mostrarCadastro(null)} />
                <ListaFilmes
                    mostrarCadastro={this.mostrarCadastro}
                    mostrarDetalhes={this.mostrarDetalhes}
                />
                <ListaFilmes
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
                            onClose={this.closeModal}
                        />
                    </Popup>}
            </div>
        )
    }
}
