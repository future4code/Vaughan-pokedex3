import React, {useState} from "react"
import { useParams } from "react-router-dom";
import { BASE_URL } from "../Constants/Urls";
import useRequestData from "../Hooks/UseRequestData";
import GlobalStateContext from "./GlobalStateContext"

function GlobalState(props) {
    const [listaPoke, setListaPoke] = useRequestData([], `${BASE_URL}/pokemon`)
    const [pokemons, setPokemons] = useState([])
    
    const adicionarPokemon = (pokes) => {

        const pokeAdd= [...pokemons]
        if (pokes ) {
            pokeAdd.push({...pokes});
          alert("deu certo")
          
        }
        setPokemons(pokeAdd)
      };
    return (
        <GlobalStateContext.Provider value={{ listaPoke, setListaPoke,pokemons, setPokemons,adicionarPokemon}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState;