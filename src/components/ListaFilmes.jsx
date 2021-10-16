import React from 'react'
import Filme from './Filme'
import { lerFilmes } from '../Servico'

export default class ListaFilme extends React.Component {
    constructor(props) {
        super(props)
        this.state = { filmes: [] }
    }

    componentDidMount() {
        lerFilmes(this.props.categoria)
            .then(res => this.setState({ filmes: res.data }))
    }

    render() {
        return (
            <div>
                <h3>{this.props.categoria ?? "Últimos Filmes"}</h3>
                <div className="scrollmenu row dragscroll">
                    {this.state.filmes.map(filme => (
                        <Filme
                            key={filme._id}
                            mostrarCadastro={() => this.props.mostrarCadastro(filme)}
                            mostrarDetalhes={() => this.props.mostrarDetalhes(filme)}
                        >
                            {filme}
                        </Filme>
                    ))}
                </div>
            </div>
        )
    }
}



