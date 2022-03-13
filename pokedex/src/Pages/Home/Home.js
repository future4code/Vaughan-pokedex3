import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CardsPokemons from "../../Components/CardsPokemons/CardsPokemons";
import Header from "../../Components/Header/Header";
import { BASE_URLING } from "../../Constants/Urls";
import GlobalStateContext from "../../Global/GlobalStateContext";
import useRequestData from "../../Hooks/UseRequestData";
import { irParaPokedex } from "../../Routes/Coordenadas";
import { ContainerHome } from "./Styled";


function Home() {
    const { listaPoke } = useContext(GlobalStateContext)
    const { adicionarPokemon } = useContext(GlobalStateContext)
    const navigate = useNavigate()



    const listaMapeada = listaPoke.results && listaPoke.results.map((pokes, i) => {
        return (
            <CardsPokemons
                adicionarPokemon={() => adicionarPokemon(pokes)}
                key={pokes.name}
                imagem={`${BASE_URLING}/${i + 1}.gif`}
                nome={pokes.name}

            />
        )
    })
    return (
        <div>
            <Header />
            <ContainerHome>
                {listaMapeada}
            </ContainerHome>
        </div>
    )
}
export default Home;