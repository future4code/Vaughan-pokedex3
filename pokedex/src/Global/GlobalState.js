import { Alert } from "@chakra-ui/react";
import React, {useEffect, useState} from "react"
import { BASE_URL } from "../Constants/Urls";
import useRequestData from "../Hooks/UseRequestData";
import GlobalStateContext from "./GlobalStateContext"

function GlobalState(props) {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [pagina, setPagina] = useState(0)
    const [listaPoke, setListaPoke] = useRequestData([], `${BASE_URL}/pokemon?limit=20&offset=${pagina}`)
    const [pokemons, setPokemons] = useState([])

 

    const removerPokemon = (pokemon) => {
      const newPokedex = pokemons.filter((p) => p.name !== pokemon.name);
      setPokemons(newPokedex);
      const newPokemonList = [...listaPoke, pokemon];
      setListaPoke(newPokemonList);
    };

    const data = {
      listaPoke,
      paginaAtual,
      setPaginaAtual,
      pagina,
      setPagina,
      setListaPoke,
      pokemons,
      setPokemons,
      removerPokemon
    }


    return (
        <GlobalStateContext.Provider value={ data }>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState;