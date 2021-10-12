import React from 'react'
import Filme from './Filme'
import axios from "axios"
import '../style.css'

export default class ListaFilme extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filmes: []
        }
        this.titulo = props.titulo
        this.categoria = props.categoria
    }

    componentDidMount() {
        this.getFilmes()
    }

    getFilmes = _ => axios
        .get(this.getURL())
        .then(res => this.setState({ filmes: res.data }))
        .catch((err) => console.log(err))

    getURL = _ => this.categoria ?
        `https://frameworks-web.herokuapp.com/api/filmes?categoria=${this.categoria}` :
        `https://frameworks-web.herokuapp.com/api/filmes`


    render = _ => <div>
        <h3>{this.titulo}</h3>
        <div className="scrollmenu row dragscroll">
            {this.state.filmes.map(filme => <Filme
                key={filme._id}
                data={filme}
                mostrarCadastro={() => props.mostrarCadastro(filme, "Alterar")}
                mostrarDetalhes={() => props.mostrarDetalhes(filme)}
                deleteFilme={() => props.deleteFilme(filme._id)}
            />)}
        </div>
    </div>
}



