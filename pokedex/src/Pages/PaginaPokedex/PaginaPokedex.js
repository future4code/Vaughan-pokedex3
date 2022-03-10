import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CardsPokemons from "../../Components/CardsPokemons/CardsPokemons";
import { BASE_URLING } from "../../Constants/Urls";
import GlobalStateContext from "../../Global/GlobalStateContext";
import { irParaHome } from "../../Routes/Coordenadas";


function PaginaPokedex() {
  const { pokemons, setPokemons } = useContext(GlobalStateContext)
  const listPoke = pokemons.map((pikachu, i) => {
  const navigate = useNavigate()

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
      <button onClick={() => irParaHome(navigate)}>ir para pokedex</button>
    </div>

  );
}
export default PaginaPokedex;