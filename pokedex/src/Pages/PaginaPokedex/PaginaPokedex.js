import React, { useContext, useEffect } from "react";
import CardPokedex from '../../Components/CardPokedex/CardPokedex'
import Header from "../../Components/Header/Header";
import GlobalStateContext from "../../Global/GlobalStateContext";
import Pokedexs from "../../Assets/Pokedexs.png"
import { VazioImg, ContainerPokedex } from "./Styled";

function PaginaPokedex() {
  const { pokemons, setPokemons, removerPokemon } = useContext(GlobalStateContext)

  useEffect(()=>{
    atualizaPagina()
},[])

  const atualizaPagina = () =>{
    const pokes = JSON.parse(localStorage.getItem(`pokedex`))
    if(pokes){
        setPokemons(pokes)
    }
}

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