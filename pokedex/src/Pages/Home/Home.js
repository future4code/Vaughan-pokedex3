import React from "react";
import CardsPokemons from "../../Components/CardsPokemons/CardsPokemons";
import { BASE_URLING } from "../../Constants/Urls";
import GlobalStateContext from "../../Global/GlobalStateContext";
import { ContainerHome } from "./Styled";


function Home(){
    return(
        <ContainerHome>
            <div>oi</div>
           {listaMapeada}
           <div>oi</div>
        </ContainerHome>
    )
}
export default Home;