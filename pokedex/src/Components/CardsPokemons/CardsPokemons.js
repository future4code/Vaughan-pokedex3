import React from "react";
import { BASE_URL, BASE_URLING } from "../../Constants/Urls";
import useRequestData from "../../Hooks/UseRequestData";
import { EstiloCard, ImgPokemons } from "./style";

function CardsPokemons() {
    const [listaPoke] = useRequestData([], `${BASE_URL}/pokemon/?offset=0&limit=10`)

    console.log(listaPoke)
    const listaMapeada = listaPoke.results && listaPoke.results.map((pokes, i) => {
        return (
            <EstiloCard key={pokes.name}>
                <div className="pokenome">
                <h3>{pokes.name}</h3>
                <img
                    alt="Imagens dos Pokemons"
                    src={`${BASE_URLING}/${i + 1}.gif`}
                    lazy="Loading"
                />
                </div>

                <div className="detalhes">

                <button>adicionar</button>
                <button>ver detalhes</button>
                </div>
            </EstiloCard>
        )
    })
    return (
        <div>
            {listaMapeada}
        </div>
    )
}
export default CardsPokemons;