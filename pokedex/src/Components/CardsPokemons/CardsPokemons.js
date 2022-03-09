import React from "react";
import { ContainerCard, EstiloCard, } from "./style";


function CardsPokemons({nome, imagem}) {

    return (
        <ContainerCard>
            <EstiloCard>
                <img 
                    alt="Imagens dos Pokemons"
                    src={imagem}
                    lazy="Loading"
                />

                <h3>{nome}</h3>
                <button>adicionar</button>
                <button>ver detalhes</button>
            </EstiloCard>
        </ContainerCard>
    )
}
export default CardsPokemons;