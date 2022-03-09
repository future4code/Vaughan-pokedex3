import React, { useState } from "react"
import { BASE_URL } from "../Constants/Urls";
import useRequestData from "../Hooks/UseRequestData";
import GlobalStateContext from "./GlobalStateContext"


function GlobalState(props) {
    const [listaPoke, setListaPoke] = useRequestData([], `${BASE_URL}/pokemon`)
    const [pokemons, setPokemons] = useState([])


    return (
        <GlobalStateContext.Provider value={{ listaPoke, setListaPoke,pokemons, setPokemons}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState;