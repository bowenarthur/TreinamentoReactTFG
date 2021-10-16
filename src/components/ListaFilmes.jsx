import React from 'react'
import Filme from './Filme'

export default props => (
    <div>
        <h3>{props.categoria ?? "Últimos Filmes"}</h3>
        <div className="scrollmenu row dragscroll">
            {props.filmes.map(filme => (
                <Filme
                    key={filme._id}
                    mostrarCadastro={() => props.mostrarCadastro(filme)}
                    mostrarDetalhes={() => props.mostrarDetalhes(filme)}
                >
                    {filme}
                </Filme>
            ))}
        </div>
    </div>
)