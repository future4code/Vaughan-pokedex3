import React, { useContext } from "react";
import CardsPokemons from "../../Components/CardsPokemons/CardsPokemons";
import Header from "../../Components/Header/Header";
import GlobalStateContext from "../../Global/GlobalStateContext";
import { ContainerHome } from "./Styled";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


function Home() {
    const { listaPoke } = useContext(GlobalStateContext)
    const { adicionarPokemon } = useContext(GlobalStateContext)

    const changeCurrentPage = (event, number) => {
        setCurrentPage(number);
        setOffset((number - 1) * 20);
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

                <Stack spacing={2}>
                    <Pagination count={57} 
                     page={currentPage}
                     onChange={changeCurrentPage}
                    />

                </Stack>
            </ContainerHome>
        </div>
    )
}
export default Home;