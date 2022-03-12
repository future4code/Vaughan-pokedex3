import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { irParaDetalhes } from "../../Routes/Coordenadas";
import { ContainerCard } from "./style";


function CardsPokemons({ nome, imagem, adicionarPokemon}) {

    const navigate = useNavigate()

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
                                    <div className="status">
                                        <h3>Status</h3>

                                        <ul className="ul">
                                            <li>Hp: 300</li>
                                            <li>Ataque: 600</li>
                                            <li>Defesa: 500</li>
                                            <li>Velocidade: 300</li>
                                            <li>Total: 1700</li>
                                        </ul>
                                    </div>
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