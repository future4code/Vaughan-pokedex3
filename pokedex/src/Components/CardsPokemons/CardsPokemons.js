import React, { useContext } from "react";
import { Box } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../Constants/Urls";
import useRequestData from "../../Hooks/UseRequestData";
import { Pokebola } from "../../icons/icons";
import { irParaDetalhes } from "../../Routes/Coordenadas";
import { ContainerCard } from "./style";
import GlobalStateContext from "../../Global/GlobalStateContext";


function CardsPokemons({ nome, adicionarPokemon}) {
    const { listapoke, pokemons } = useContext(GlobalStateContext)

    const navigate = useNavigate()
    const poke = nome
    const pokemonData = useRequestData({}, `${BASE_URL}/pokemon/${poke}`)[0];

    
   
    return (
        <ContainerCard background={pokemonData.types && pokemonData.types[0].type.name}>
            <div className="main">
                <div className="pokedex" >
                    <div className="cartoes-pokemon">
                        <div className="cartao-pokemon">
                            <div className="cartao-topo" >
                                <div className="detalhes">
                                    <Box textTransform={'capitalize'}>
                                        <h1 className="nome">{nome}</h1>
                                    </Box>
                                    <span>#00{pokemonData.id && pokemonData.id}</span>
                                </div>

                                <Box textTransform={'capitalize'}>
                                    <span className="tipo">
                                        {pokemonData.types && pokemonData.types[0].type.name}
                                    </span>
                                </Box>

                                <div className="cartao-imagem">
                                    <img
                                        onClick={() => irParaDetalhes(navigate, nome)}
                                        className="imagem"
                                        src={pokemonData.sprites && pokemonData.sprites.other.dream_world.front_default}
                                        alt={`Imagem do pokemon ${nome}`}
                                    />
                                </div>
                            </div>

                            <div className="cartao-informacoes">
                                <div className="buttons">

                                    <button className="btn item1" onClick={adicionarPokemon}> 
                                    Adicionar à Pokédex<Pokebola/>
                                    </button>
                                    <button className="btn item2" onClick={() => irParaDetalhes(navigate, nome)}>Detalhes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ContainerCard >
    )
}
export default CardsPokemons;