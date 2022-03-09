import React, { useContext } from "react";
import { BASE_URLING } from "../../Constants/Urls";
import GlobalStateContext from "../../Global/GlobalStateContext";
import { ContainerCard, EstiloCard, } from "./style";


function CardsPokemons() {
    const {listaPoke, setListaPoke} = useContext(GlobalStateContext)
    
    const listaMapeada = listaPoke.results && listaPoke.results.map((pokes, i) => {
        return (
            <EstiloCard key={pokes.name}>
                <div className="pokenome"  >
                <img 
                    alt="Imagens dos Pokemons"
                    src={`${BASE_URLING}/${i + 1}.gif`}
                    lazy="Loading"
                />
                </div>

                <div className="detalhes">
                <h3>{pokes.name}</h3>

                <button>adicionar</button>
                <button>ver detalhes</button>
                </div>
            </EstiloCard>
        )
    })
    return (
        <ContainerCard>
            {listaMapeada}
        </ContainerCard>
    )
}
export default CardsPokemons;