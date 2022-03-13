import { Alert } from "@chakra-ui/react";
import React, {useState} from "react"
import { BASE_URL } from "../Constants/Urls";
import useRequestData from "../Hooks/UseRequestData";
import GlobalStateContext from "./GlobalStateContext"

function GlobalState(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pagina, setPagina] = useState(0)
    const [listaPoke,setListaPoke] = useRequestData([], `${BASE_URL}/pokemon?limit=20&offset=${pagina}`)
    const [pokemons, setPokemons] = useState([])



    const adicionarPokemon = (pokemon) => {
      setPokemons([...pokemons, pokemon]);
      alert('Pokemon adicionado à Pokédex!')
      const newPokemonList = listaPoke.filter((p) => p.name !== pokemon.name);
      setListaPoke(newPokemonList);
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