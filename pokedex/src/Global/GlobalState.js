import React, {useState} from "react"
import { BASE_URL } from "../Constants/Urls";
import useRequestData from "../Hooks/UseRequestData";
import GlobalStateContext from "./GlobalStateContext"

function GlobalState(props) {
    const [listaPoke] = useRequestData([], `${BASE_URL}/pokemon`)
    const [pokemons, setPokemons] = useState([])
    
    const adicionarPokemon = (pokes) => {

        const pokeAdd= [...pokemons]
        if (pokes ) {
            pokeAdd.push({...pokes});
          alert("deu certo")
          
        }
        setPokemons(pokeAdd)
        console.log(pokeAdd)
      };

    const removerPokemon =(index)=>{
      const novo = pokemons.slice()
      novo.splice(index, 1)
      setPokemons({pokemons})
      console.log(pokemons)
      
      
    }

    return (
        <GlobalStateContext.Provider value={{ listaPoke, pokemons, setPokemons,adicionarPokemon, removerPokemon}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState;