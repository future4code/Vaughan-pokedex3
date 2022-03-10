import React, { useContext } from "react";
import CardsPokemons from "../../Components/CardsPokemons/CardsPokemons";
import { BASE_URLING } from "../../Constants/Urls";
import GlobalStateContext from "../../Global/GlobalStateContext";
import { irParaHome } from "../../Routes/Coordenadas";


function PaginaPokedex() {
  const { pokemons, setPokemons } = useContext(GlobalStateContext)
  const listPoke = pokemons.map((pikachu, i) => {
  

    return (
      <div>
        <CardsPokemons
          nome={pikachu.name}
          imagem={`${BASE_URLING}/${i + 1}.gif`}
        />
      </div>
    )
  })
  console.log(pokemons)
  return (
    <div>
      {listPoke}
    </div>

  );
}
export default PaginaPokedex;