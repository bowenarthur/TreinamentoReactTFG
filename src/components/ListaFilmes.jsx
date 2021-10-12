import React from 'react'
import '../style.css'

export default props => (
    <>
        <h3>{props.titulo}</h3>
        <div className="scrollmenu row dragscroll">
            {props.children.map(filme => {
                return (
                    <div className="column" key={filme._id}>
                        <div className="botoes">
                            <a
                                className="edit"
                                onClick={() => props.mostrarCadastro(filme, "Alterar")}
                            >
                                &#9998;
                            </a>
                            <a className="delete" onClick={() => props.deleteFilme(filme._id)}>
                                &#128465;
                            </a>
                        </div>
                        <div className="card">
                            <div onClick={() => props.mostrarDetalhes(filme)}>
                                <img alt="" src={filme.foto} />
                                <p>{filme.nome}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </>
)



