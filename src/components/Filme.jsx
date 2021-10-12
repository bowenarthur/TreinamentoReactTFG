import React from 'react'
import axios from "axios"
import '../style.css'

export default class Filme extends React.Component {
    constructor(props) {
        super(props)
        this.data = props.data
        this.mostrarCadastro = props.mostrarCadastro
        this.mostrarDetalhes = props.mostrarDetalhes
    }

    deleteFilme = id => axios
        .delete("https://frameworks-web.herokuapp.com/api/filmes/" + id)
        .then(_ => {
            alert("Filme deletado com sucesso")
            window.location.reload()
        })
        .catch((err) => {
            alert("Ocorreu um erro")
            console.log(err)
        })

    render = _ => (
        <div className="column">
            <div className="botoes">
                <a className="edit" onClick={this.mostrarCadastro}>
                    &#9998;
                </a>
                <a className="delete" onClick={() => this.deleteFilme(this.data._id)}>
                    &#128465;
                </a>
            </div>
            <div className="card" onClick={this.mostrarDetalhes}>
                <img alt="" src={this.data.foto} />
                <p>{this.data.nome}</p>
            </div>
        </div>
    )
}