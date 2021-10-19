import "./style.css"
import React from "react"
import Popup from "reactjs-popup"
import Formulario from "./components/Formulario"
import Header from './components/Header'
import ListaFilmes from "./components/ListaFilmes"
import Detalhes from './components/Detalhes'
import { lerFilmes } from './Servico'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filme: null,
            openDetalhes: false,
            openForm: false,
            filmes: [],
            filmesAcao: []
        }
    }

    componentDidMount() {
        const script = document.createElement("script")
        script.src =
            "https://cdnjs.cloudflare.com/ajax/libs/dragscroll/0.0.8/dragscroll.min.js"
        script.async = true
        document.body.appendChild(script)
        this.fetchData()
    }

    fetchData = _ => {
        lerFilmes()
            .then(res => this.setState({ filmes: res.data }))
        lerFilmes('Ação')
            .then(res => this.setState({ filmesAcao: res.data }))
    }

    mostrarDetalhes = filme => this.setState({
        filme: filme,
        openDetalhes: true,
        openForm: false
    })

    fecharDetalhes = _ => this.setState({
        filme: null,
        openDetalhes: false
    })

    mostrarCadastro = filme => this.setState({
        filme: filme,
        openDetalhes: false,
        openForm: true
    })

    fecharCadastro = _ => {
        this.setState({
            filme: null,
            openForm: false
        })
        this.fetchData()
    }

    render() {
        return (
            <div className="App">
                <Header onClick={() => this.mostrarCadastro(null)} />
                <ListaFilmes
                    titulo="Últimos Filmes"
                    filmes={this.state.filmes}
                    mostrarCadastro={this.mostrarCadastro}
                    mostrarDetalhes={this.mostrarDetalhes}
                />
                <ListaFilmes
                    titulo="Ação"
                    filmes={this.state.filmesAcao}
                    mostrarCadastro={this.mostrarCadastro}
                    mostrarDetalhes={this.mostrarDetalhes}
                />
                {this.state.openDetalhes &&
                    <Detalhes open={this.state.openDetalhes} onClose={this.fecharDetalhes}>
                        {this.state.filme}
                    </Detalhes>}
                {this.state.openForm &&
                    <Popup open={this.state.openForm} onClose={this.fecharCadastro}>
                        <Formulario
                            filme={this.state.filme}
                            onClose={this.fecharCadastro}
                        />
                    </Popup>}
            </div>
        )
    }
}
