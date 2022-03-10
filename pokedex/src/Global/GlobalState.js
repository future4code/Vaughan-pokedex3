import React, {useState} from "react"
import { BASE_URL } from "../Constants/Urls";
import useRequestData from "../Hooks/UseRequestData";
import GlobalStateContext from "./GlobalStateContext"

function GlobalState(props) {
    const [listaPoke, setListaPoke] = useRequestData([], `${BASE_URL}/pokemon`)
    const [pokemons, setPokemons] = useState([])
    
    const adicionarPokemon = () => {
        
        const pokeAdd= [...listaPoke.results]
        if (pokes ) {
            pokeAdd.push({ ...pokemons});
          alert("deu certo")
        }
        setPokemons(pokes)
        console.log(pokemons)
      };
    return (
        <GlobalStateContext.Provider value={{ listaPoke, setListaPoke,pokemons, setPokemons,adicionarPokemon}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState;