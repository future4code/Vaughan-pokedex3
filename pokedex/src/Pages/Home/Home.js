import React, { useContext, useEffect } from "react";
import CardsPokemons from "../../Components/CardsPokemons/CardsPokemons";
import Header from "../../Components/Header/Header";
import GlobalStateContext from "../../Global/GlobalStateContext";
import { ContainerHome, ContainerPagina } from "./Styled";
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';


function Home() {
    const { listaPoke, paginaAtual, setPaginaAtual, setPagina, pokemons, setPokemons } = useContext(GlobalStateContext)
   

    const mudarPagina = (event, number) => {
        setPaginaAtual(number);
        setPagina((number - 1) * 20);
    };

    const adicionarPokemon = (pokes) => {
        const newPokemonList = pokemons.find((p) => pokes.name === p.name);
        if(newPokemonList){
          alert('Pokemon ja foi adicionado Pokédex!')
        }else{
          const adicionarPoke = window.confirm(`Quer adiconar o ${pokes.name} a pokedex?`)
          if(adicionarPoke){
            const novosPokes = [ ...pokemons, pokes]
            setPokemons(novosPokes);
          }
        }
      };


   
    
    const listaMapeada = listaPoke.results && listaPoke.results.map((pokes) => {
        return (
            <CardsPokemons
                adicionarPokemon={() => adicionarPokemon(pokes)}
                key={pokes.name}
                nome={pokes.name}
            />
        )
    })
    return (
        <div>
            <Header />
            <ContainerHome>
                {listaMapeada}
            </ContainerHome>
            <ContainerPagina>
                <Stack spacing={2}>
                    <Pagination  className="paginacao"  color="primary" 
                        count={57}
                        page={paginaAtual}
                        onChange={mudarPagina}
        
                    />
                </Stack>
            </ContainerPagina>
        </div>
    )
}
export default Home;