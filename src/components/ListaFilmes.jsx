import React from 'react'
import Filme from './Filme'

export default props => (
    <div>
        <h3>{props.titulo}</h3>
        <div className="scrollmenu row dragscroll">
            {props.filmes.map(filme => (
                <Filme
                    key={filme._id}
                    filme={filme}
                    mostrarForm={() => props.mostrarForm(filme)}
                    mostrarDetalhes={() => props.mostrarDetalhes(filme)}
                ></Filme>
            ))}
        </div>
    </div>
)