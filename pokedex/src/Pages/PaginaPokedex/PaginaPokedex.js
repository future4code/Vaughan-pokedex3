import React, { useContext } from "react";
import CardPokedex from '../../Components/CardPokedex/CardPokedex'
import Header from "../../Components/Header/Header";
import GlobalStateContext from "../../Global/GlobalStateContext";



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
  console.log(pokemons)
  return (
    <div>
      <Header/>
      {listPoke}
    </div>

  );
}
export default PaginaPokedex;