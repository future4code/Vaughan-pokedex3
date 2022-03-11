import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { PageContainer, PokeContainer } from './Style'
import { Box, styled } from '@chakra-ui/react'
import { BASE_URL } from '../../../Constants/Urls'
import { useParams } from 'react-router-dom'

function RequisicaoDetalhes() {
    const { id } = useParams()
    const [detalhePokemon, setdetalhePokemon] = useState([])

    useEffect(() => {
        axios
            .get(`${BASE_URL}/pokemon/${id}`)
            .then((res) => {
                setdetalhePokemon([res.data])
            })
            .catch((err) => {
                alert("Ocorreu um erro, tente novamente!")
            });
    }, []);

    const renderizarPokemon = detalhePokemon && detalhePokemon.map((poke) => {
        return (
            <PageContainer key={poke.name}>
                    <img src={poke.sprites.other.home.front_default} alt={`${id}`}/>

                    <Box textTransform={'capitalize'}><h1>{poke.name}</h1></Box>

                    <h1>Stats</h1>
                    <p><b>Hp:</b> {poke.stats[0].base_stat}</p>
                    <p><b>Attack:</b> {poke.stats[1].base_stat ? poke.stats[1].base_stat : 'N/A'}</p>
                    <p><b>Defense:</b> {poke.stats[2].base_stat ? poke.stats[2].base_stat : 'N/A'}</p>
                    <p><b>Special-Attack:</b> {poke.stats[3].base_stat ? poke.stats[3].base_stat : 'N/A'}</p>
                    <p><b>Special-Defense: </b> {poke.stats[4].base_stat ? poke.stats[4].base_stat : 'N/A'}</p>
                    <p><b>Speed: </b> {poke.stats[5].base_stat ? poke.stats[5].base_stat : 'N/A'}</p>

                    <Box textTransform={'capitalize'}>
                        <h1>Type</h1>
                        <p>{poke.types[0].type.name}</p>
                        <p>{poke.types[1] ? poke.types[1].type.name : 'N/A'}</p>
                    </Box>

                    <Box textTransform={'capitalize'}>
                        <h1>Attacks</h1>
                        <p>- {poke.moves[0].move.name}</p>
                        <p>- {poke.moves[1] ? poke.moves[1].move.name : 'N/A'}</p>
                        <p>- {poke.moves[2] ? poke.moves[2].move.name : 'N/A'}</p>
                        <p>- {poke.moves[3] ? poke.moves[3].move.name : 'N/A'}</p>
                        <p>- {poke.moves[4] ? poke.moves[4].move.name : 'N/A'}</p>
                    </Box>
            </PageContainer>
        )
    })

    return (
        <div>
            {renderizarPokemon && renderizarPokemon.length > 0 ? renderizarPokemon : <h1>Caregando...</h1>}
        </div>
    )
}

export default RequisicaoDetalhes