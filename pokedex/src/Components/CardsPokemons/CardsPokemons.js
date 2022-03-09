import React from "react";
import { useNavigate } from "react-router-dom";
import { ContainerCard} from "./style";


function CardsPokemons({nome, imagem}) {
    const navigate = useNavigate()
    return (
        <ContainerCard>
                <div className="imagemPoke">
                <img 
                    alt={nome}
                    src={imagem}
                />
                </div>
               <h3>Tipo:</h3>
                <h3>{nome}</h3>
                <button>Adicionar à pokedex</button>
                <button>Detalhes</button>
        </ContainerCard>
    )
}
export default CardsPokemons;