import { Alert } from "@chakra-ui/react";
import React, {useState} from "react"
import { BASE_URL } from "../Constants/Urls";
import useRequestData from "../Hooks/UseRequestData";
import GlobalStateContext from "./GlobalStateContext"

function GlobalState(props) {
    const [listaPoke,setListaPoke] = useRequestData([], `${BASE_URL}/pokemon`)
    const [pokemons, setPokemons] = useState([])
     
    // const adicionarPokemon = (pokes) => {

    //     const pokeAdd= [...pokemons]
    //     if (pokes ) {
    //         pokeAdd.push({...pokes});
    //       alert("deu certo")
          
    //     }
    //     setPokemons(pokeAdd)
    //     console.log(pokeAdd)
    //   };

    // const removerPokemon =(index)=>{
    //   const novo = pokemons.slice()
    //   novo.splice(index, 1)
    //   setPokemons({pokemons})
    //   console.log(pokemons)
      
      
    // }
    const adicionarPokemon = (pokemon) => {
      setPokemons([...pokemons, pokemon]);
      const newPokemonList = listaPoke.filter((p) => p.name !== pokemon.name);
      setListaPoke(newPokemonList);
        alert('As senhas não conferem!' );
      
      
    };
  
    const removerPokemon= (pokemon) => {
      const newPokedex = pokemons.filter((p) => p.name !== pokemon.name);
      setPokemons(newPokedex);
      const newPokemonList = [...listaPoke, pokemon];
      setListaPoke(newPokemonList);
    };
    

    return (
        <GlobalStateContext.Provider value={{ listaPoke,setListaPoke,pokemons, setPokemons,adicionarPokemon, removerPokemon}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState;