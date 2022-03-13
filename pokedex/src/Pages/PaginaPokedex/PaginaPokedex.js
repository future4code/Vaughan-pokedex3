import React, { useContext } from "react";
import CardPokedex from '../../Components/CardPokedex/CardPokedex'
import Header from "../../Components/Header/Header";
import GlobalStateContext from "../../Global/GlobalStateContext";
import Pokedexs from "../../Assets/Pokedexs.png"
import { VazioImg, ContainerPokedex } from "./Styled";

function PaginaPokedex() {
  const { pokemons } = useContext(GlobalStateContext)
  const {removerPokemon} = useContext(GlobalStateContext)


  
  const listPoke = pokemons.map((pikachu, i) => {
    
    return (
      
      <div>
        
        <CardPokedex
          nome={pikachu.name}
          removerPokemon={()=>removerPokemon(pikachu)}
        />
      </div>
    )
  })
  
  
  return (
    <ContainerPokedex>
      
      <Header/>

      {listPoke.length ===0 ? <VazioImg src={Pokedexs}/>: listPoke}
      
    </ContainerPokedex>

  );
}
export default PaginaPokedex;