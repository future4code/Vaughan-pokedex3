import React, { useContext } from "react";
import CardsPokemons from "../../Components/CardsPokemons/CardsPokemons";
import Header from "../../Components/Header/Header";
import { BASE_URLING } from "../../Constants/Urls";
import GlobalStateContext from "../../Global/GlobalStateContext";



function PaginaPokedex() {
  const { pokemons, setPokemons } = useContext(GlobalStateContext)
  const {removerPokemon}= useContext(GlobalStateContext)


  const listPoke = pokemons.map((pikachu, i) => {
    return (
      <div>
        <CardsPokemons
          nome={pikachu.name}
          imagem={`${BASE_URLING}/${i + 1}.gif`}
        />
        <button onClick={removerPokemon}>remover</button>
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