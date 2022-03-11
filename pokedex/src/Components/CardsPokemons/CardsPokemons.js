import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../Constants/Urls";
import useRequestData from "../../Hooks/UseRequestData";
import  {Pokebola}  from "../../icons/icons";
import { irParaDetalhes } from "../../Routes/Coordenadas";
import { ContainerCard } from "./style";


function CardsPokemons({ nome, imagem, adicionarPokemon}) {
    

    const navigate = useNavigate()
    
    const nomePoke = nome
    const pokemonData = useRequestData([], `${BASE_URL}/pokemon/${nomePoke}`)[0]

    
    return (
        <ContainerCard>
                <div className="main">
                    <div className="pokedex">
                        <div className="cartoes-pokemon">
                            <div className="cartao-pokemon">
                                <div className="cartao-topo">
                                    <div className="detalhes">
                                        <h1 class="nome">{nome}</h1>
                                        <span>#001</span>
                                    </div>

                                    <span className="tipo">raio</span>

                                    <div className="cartao-imagem">
                                        <img
                                            className="imagem"
                                            src={imagem}
                                            alt={`Imagem do pokemon ${nome}`}
                                        />
                                    </div>
                                </div>

                                <div className="cartao-informacoes">
                                    <div className="buttons">
                               
                                        <button className="btn item1" onClick={adicionarPokemon}>Adicionar à Pokédex</button>
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