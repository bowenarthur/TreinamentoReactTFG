import React from 'react'
import axios from "axios"
import '../style.css'

export default class Filme extends React.Component {
    constructor(props) {
        super(props)
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
                <a className="edit" onClick={this.props.mostrarCadastro}>
                    &#9998;
                </a>
                <a className="delete" onClick={() => this.deleteFilme(this.props.data._id)}>
                    &#128465;
                </a>
            </div>
            <div className="card" onClick={this.props.mostrarDetalhes}>
                <img alt="" src={this.props.data.foto} />
                <p>{this.props.data.nome}</p>
            </div>
        </div>
    )
}