import React, { useContext } from "react";
import CardsPokemons from "../../Components/CardsPokemons/CardsPokemons";
import { BASE_URLING } from "../../Constants/Urls";
import GlobalStateContext from "../../Global/GlobalStateContext";


function Home(){
    const {listaPoke, setListaPoke} = useContext(GlobalStateContext)
    const {pokemons, setPokemons} = useContext(GlobalStateContext)

    const adicionarPokemon = (pokes) => {
        
        const pokeAdd= [...listaPoke.results]
        
        
        if (pokes ) {
            pokeAdd.push({ ...pokes});
          alert("deu certo")
        }
        setPokemons(pokes)
        console.log(pokemons)
      };
          
    const listaMapeada = listaPoke.results && listaPoke.results.map((pokes, i) => {
        return (
            <CardsPokemons
                adicionarPokemon={()=>adicionarPokemon(pokes)}
                key={pokes.name}
                imagem={`${BASE_URLING}/${i + 1}.gif`}
                nome={pokes.name}
            />

            )
        })    
    return(
        <div>
           {listaMapeada}
        </div>
    )
}
export default Home;