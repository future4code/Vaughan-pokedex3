import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { PageContainer, PokeContainer, DetalhesContainer, TiposContainer, Tipo, DetalhesHeader, StatusContainer, MovesContainer } from './Style'
import { Box } from '@chakra-ui/react'
import { BASE_URL } from '../../../Constants/Urls'
import { useParams } from 'react-router-dom'
import { GiPointySword, GiShieldEchoes, GiMagicTrident, GiShieldOpposition, GiRunningNinja, GiHeartBottle } from 'react-icons/gi'

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

    const StyleProgresso = styled(LinearProgress)(({ theme }) => ({
        height: 18,
        width: 300,
        borderRadius: 8,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.mode === 'light' ? '#000' : '#000',
        },
    }))

    const adicionarPoke = (pokemon) => {
        setPokedex([...pokedex, pokemon]);
        const newPokemonList = pokemonlist.filter((p) => p.name !== pokemon.name);
        setPokemonlist(newPokemonList);
      };
    
      const removerPoke = (pokemon) => {
        const newPokedex = pokedex.filter((p) => p.name !== pokemon.name);
        setPokedex(newPokedex);
        const newPokemonList = [...pokemonlist, pokemon];
        setPokemonlist(newPokemonList);
      };
    

    const renderizarPokemon = detalhePokemon && detalhePokemon.map((poke) => {
        return (
            <PageContainer key={poke.name}>
                <PokeContainer>

                    <DetalhesHeader>
                        <TiposContainer>
                            <Box textTransform={'capitalize'}>
                                <Tipo>{poke.types[0].type.name}</Tipo>
                                <Tipo>{poke.types[1] ? poke.types[1].type.name : 'N/A'}</Tipo>
                            </Box>
                        </TiposContainer>
                        <Box>
                            <button>Adicionar à Pokedéx</button>
                        </Box>
                    </DetalhesHeader>

                    <img src={poke.sprites.other.dream_world.front_default} />

                    <div>
                        <Box textTransform={'capitalize'}><h1>{poke.name}</h1></Box>
                    </div>

                    <DetalhesContainer>

                        <StatusContainer>
                            <h1>Stats</h1>

                            <div>
                                <p> <GiHeartBottle /> <b>HP:</b> {poke.stats[0].base_stat}
                                    <StyleProgresso variant="determinate" value={poke.stats[0].base_stat} /></p>

                                <p> <GiPointySword /> <b>Ataque:</b> {poke.stats[1].base_stat ? poke.stats[1].base_stat : 'N/A'}
                                    <StyleProgresso variant="determinate" value={poke.stats[1].base_stat ? poke.stats[1].base_stat : 'N/A'} /></p>

                                <p> <GiShieldEchoes /> <b>Defesa:</b> {poke.stats[2].base_stat ? poke.stats[2].base_stat : 'N/A'}
                                    <StyleProgresso variant="determinate" value={poke.stats[2].base_stat ? poke.stats[2].base_stat : 'N/A'} /></p>

                                <p> <GiMagicTrident /> <b>Ataque-Especial:</b> {poke.stats[3].base_stat ? poke.stats[3].base_stat : 'N/A'}
                                    <StyleProgresso variant="determinate" value={poke.stats[3].base_stat ? poke.stats[3].base_stat : 'N/A'} /></p>

                                <p> <GiShieldOpposition /> <b>Defesa-Especial: </b> {poke.stats[4].base_stat ? poke.stats[4].base_stat : 'N/A'}
                                    <StyleProgresso variant="determinate" value={poke.stats[4].base_stat ? poke.stats[4].base_stat : 'N/A'} /></p>

                                <p> <GiRunningNinja /> <b>Velocidade: </b> {poke.stats[5].base_stat ? poke.stats[5].base_stat : 'N/A'}
                                    <StyleProgresso variant="determinate" value={poke.stats[5].base_stat ? poke.stats[5].base_stat : 'N/A'} /></p>
                            </div>

                        </StatusContainer>

                        <MovesContainer>
                            <Box textTransform={'capitalize'}>
                                <h1>Attacks</h1>
                                <p>- {poke.moves[0].move.name}</p>
                                <p>- {poke.moves[1] ? poke.moves[1].move.name : 'N/A'}</p>
                                <p>- {poke.moves[2] ? poke.moves[2].move.name : 'N/A'}</p>
                                <p>- {poke.moves[3] ? poke.moves[3].move.name : 'N/A'}</p>
                                <p>- {poke.moves[4] ? poke.moves[4].move.name : 'N/A'}</p>
                            </Box>
                        </MovesContainer>

                    </DetalhesContainer>
                </PokeContainer>
            </PageContainer>
        )
    })

    return (
        <div>
            {renderizarPokemon && renderizarPokemon.length > 0 ? renderizarPokemon : <h1>Carregando...</h1>}
        </div>
    )
}

export default RequisicaoDetalhes