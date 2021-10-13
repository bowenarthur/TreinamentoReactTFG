import React from 'react'
import Filme from './Filme'
import axios from "axios"
import '../style.css'

export default class ListaFilme extends React.Component {
    constructor(props) {
        super(props)
        this.state = { filmes: [] }
    }

    componentDidMount() {
        this.getFilmes()
    }

    getFilmes = _ => axios
        .get(this.getURL())
        .then(res => this.setState({ filmes: res.data }))
        .catch((err) => console.log(err))

    getURL = _ => this.props.categoria ?
        `https://frameworks-web.herokuapp.com/api/filmes?categoria=${this.props.categoria}` :
        `https://frameworks-web.herokuapp.com/api/filmes`


    render = _ => (
        <div>
            <h3>{this.props.titulo}</h3>
            <div className="scrollmenu row dragscroll">
                {this.state.filmes.map(filme => (
                    <Filme
                        key={filme._id}
                        mostrarCadastro={() => this.props.mostrarCadastro(filme, "Alterar")}
                        mostrarDetalhes={() => this.props.mostrarDetalhes(filme)}
                    >
                        {filme}
                    </Filme>
                ))}
            </div>
        </div>
    )
}



