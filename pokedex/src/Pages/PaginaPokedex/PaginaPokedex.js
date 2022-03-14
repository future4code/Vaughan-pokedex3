import React, { useContext, useEffect} from "react";
import {Box} from '@chakra-ui/react'
import CardPokedex from '../../Components/CardPokedex/CardPokedex'
import Header from "../../Components/Header/Header";
import GlobalStateContext from "../../Global/GlobalStateContext";
import Pokedexs from "../../Assets/Pokedexs.png"
import { VazioImg, ContainerListaPokedex } from "./Styled";

function PaginaPokedex() {
  const { pokemons, setPokemons, removerPokemon } = useContext(GlobalStateContext)


  const listPoke = pokemons.map((pikachu) => {
    
    return (
      
      <div key={pikachu.name}>
        <Box textTransform={'capitalize'}>
        <CardPokedex
          nome={pikachu.name}
          removerPokemon={()=>removerPokemon(pikachu)}
        />
        </Box>

      </div>
    )
  })
  
  return (
    <div>
      
      <Header/>

      <ContainerListaPokedex>
      {listPoke.length ===0 ? <VazioImg src={Pokedexs}/>: listPoke}
      </ContainerListaPokedex>

    </div>

  );
}
export default PaginaPokedex;