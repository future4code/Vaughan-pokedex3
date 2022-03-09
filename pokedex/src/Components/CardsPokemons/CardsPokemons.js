import React from "react";
import { Navigate } from "react-router-dom";
import { ContainerCard, EstiloCard, } from "./style";


function CardsPokemons({nome, imagem, adicionarPokemon}) {

    return (
        <ContainerCard>
            <EstiloCard>
                <img 
                    alt="Imagens dos Pokemons"
                    src={imagem}
                    lazy="Loading"
                />

                <h3>{nome}</h3>
                <button onClick={adicionarPokemon}>adicionar</button>
                <button>ver detalhes</button>
            </EstiloCard>
        </ContainerCard>
    )
}
export default CardsPokemons;