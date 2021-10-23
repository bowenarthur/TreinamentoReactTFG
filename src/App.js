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
            filme: {},
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
        filme: {},
        openDetalhes: false
    })

    mostrarForm = filme => this.setState({
        filme: filme,
        openDetalhes: false,
        openForm: true
    })

    fecharForm = _ => {
        this.setState({
            filme: {},
            openForm: false
        })
        this.fetchData()
    }

    render() {
        return (
            <div className="App">
                <Header onClick={() => this.mostrarForm({})} />
                <ListaFilmes
                    titulo="Últimos Filmes"
                    filmes={this.state.filmes}
                    mostrarForm={this.mostrarForm}
                    mostrarDetalhes={this.mostrarDetalhes}
                />
                <ListaFilmes
                    titulo="Ação"
                    filmes={this.state.filmesAcao}
                    mostrarForm={this.mostrarForm}
                    mostrarDetalhes={this.mostrarDetalhes}
                />
                <Detalhes open={this.state.openDetalhes} onClose={this.fecharDetalhes}>
                    {this.state.filme}
                </Detalhes>
                <Popup open={this.state.openForm} onClose={this.fecharForm}>
                    <Formulario
                        filme={this.state.filme}
                        onClose={this.fecharForm}
                    />
                </Popup>
            </div>
        )
    }
}
