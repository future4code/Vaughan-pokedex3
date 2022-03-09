import React, {useState} from "react"
import { BASE_URL } from "../Constants/Urls";
import useRequestData from "../Hooks/UseRequestData";
import GlobalStateContext from "./GlobalStateContext"
import { useParams } from "react-router-dom";

function GlobalState(props){
    const params = useParams()

    const [listaPoke, setListaPoke] = useRequestData([], `${BASE_URL}/pokemon`);
    const [pokemon] = useRequestData([], `${BASE_URL}/pokemon/${params.name}`);
    
    return(
        <GlobalStateContext.Provider value={{listaPoke, setListaPoke, pokemon, pokemons, setPokemons, pokedex, setPokedex}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState;