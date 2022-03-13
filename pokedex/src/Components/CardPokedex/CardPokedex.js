import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../Constants/Urls";
import useRequestData from "../../Hooks/UseRequestData";
import {Pokebola} from "../../icons/icons";
import { irParaDetalhes } from "../../Routes/Coordenadas";
import { ContainerCard, resolveBackground, RESOLVE_STYLE } from "./style";


function CardsPokemons({ nome, imagem, adicionarPokemon, removerPokemon}) {

    const navigate = useNavigate()
    const poke = nome
    const pokemonData = useRequestData({}, `${BASE_URL}/pokemon/${poke}`)[0];

    
    return (
        <ContainerCard background={pokemonData.types && pokemonData.types[0].type.name}>
                <div className="main">
                    <div className="pokedex">
                        <div className="cartoes-pokemon">
                            <div className="cartao-pokemon">
                                <div className="cartao-topo" >
                                    <div className="detalhes">
                                        <h1 class="nome">{nome}</h1>
                                        <span>#{pokemonData.id && pokemonData.id}</span>
                                    </div>

                                    <span className="tipo">
                                        {pokemonData.types && pokemonData.types[0].type.name}
                                        </span>


                                    <div className="cartao-imagem">
                                        <img
                                            className="imagem"
                                            src={pokemonData.sprites && pokemonData.sprites.other.dream_world.front_default}
                                            alt={`Imagem do pokemon ${nome}`}
                                        />
                                    </div>
                                </div>

                                <div className="cartao-informacoes">
                                    <div className="buttons">
                                        <button className="btn item1" onClick={adicionarPokemon}>Adicionar à Pokédex <Pokebola className="pokebola"/></button>
                                        <button className="btn item2" onClick={()=> irParaDetalhes(navigate, nome)}>Mais detalhes</button>
                                       
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