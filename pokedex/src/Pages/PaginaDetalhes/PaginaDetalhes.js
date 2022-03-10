import React, { useContext } from 'react'
import GlobalStateContext from "../../Global/GlobalStateContext";

function PaginaDetalhes() {
    const { pokemon } = useContext(GlobalStateContext);

    const pokemonMoves = pokemon && pokemon.move.map((poke) => {
        return (
            <div key={poke.id}>
                <p>{poke.move.name}</p>
            </div>
        )
    })

    return (
        <div>
            {pokemonMoves}
        </div>
    )
}

export default PaginaDetalhes