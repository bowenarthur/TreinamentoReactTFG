import React from 'react'
import Filme from './Filme'

export default props => (
    <div>
        <h3>{props.titulo}</h3>
        <div className="scrollmenu row dragscroll">
            {props.filmes.map(filme => (
                <Filme
                    key={filme._id}
                    id={filme._id}
                    nome={filme.nome}
                    foto={filme.foto}
                    mostrarCadastro={() => props.mostrarCadastro(filme)}
                    mostrarDetalhes={() => props.mostrarDetalhes(filme)}
                >
                    {filme}
                </Filme>
            ))}
        </div>
    </div>
)