import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { styled } from '@mui/material/styles';
import { Box } from '@chakra-ui/react'
import { BASE_URL } from '../../../Constants/Urls'
import { useParams } from 'react-router-dom'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { GiPointySword, GiShieldEchoes, GiMagicTrident, GiShieldOpposition, GiRunningNinja, GiHeartBottle } from 'react-icons/gi'
import { PageContainer, PokeContainer, DetalhesContainer, BoxMoves, AtaqueMovesContainer, TiposContainer, Tipo, Status, DetalhesHeader, StatusContainer, MovesContainer } from './Style'


function RequisicaoDetalhes() {
    const { id } = useParams()
    const [detalhePokemon, setDetalhePokemon] = useState([])

    const StyleProgresso = styled(LinearProgress)(() => ({
        height: 10,
        width: 250,
        borderRadius: 8,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: '#d9ebd8',
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: '#7aff75',
        },
    }))

    useEffect(() => {
        axios
            .get(`${BASE_URL}/pokemon/${id}`)
            .then((res) => {
                setDetalhePokemon([res.data])
            })
            .catch((err) => {
                alert("Ocorreu um erro, tente novamente!")
            });
    }, []);

    const renderizarPokemon = detalhePokemon && detalhePokemon.map((poke) => {
        return (
            <PageContainer key={poke.name}>
                <PokeContainer background={poke.types && poke.types[0].type.name}>

                    <DetalhesHeader>
                        <TiposContainer>
                            <Box textTransform={'capitalize'} >
                                <Tipo background={poke.types && poke.types[0].type.name}>{poke.types[0].type.name}</Tipo>
                                <Tipo >{poke.types[1] ? poke.types[1].type.name : 'N/A'}</Tipo>
                            </Box>
                        </TiposContainer>
                        <Box>
                            <button >Adicionar à Pokedéx</button>
                        </Box>
                    </DetalhesHeader>

                    <div>
                        <img src={poke.sprites.other.dream_world.front_default} />
                    </div>

                    <DetalhesContainer>
                        <Box>
                            <Box textTransform={'capitalize'}><h1>{poke.name}</h1></Box>
                        </Box>

                        <Box>
                            <AtaqueMovesContainer>

                                <StatusContainer>
                                        <h1>Stats</h1>

                                    <Status>
                                        <div>
                                            <p> <GiHeartBottle /> <b>HP:</b> {poke.stats[0].base_stat}
                                                <StyleProgresso variant="determinate" value={poke.stats[0].base_stat} /></p>

                                            <p> <GiPointySword /> <b>Ataque:</b> {poke.stats[1].base_stat ? poke.stats[1].base_stat : 'N/A'}
                                                <StyleProgresso variant="determinate" value={poke.stats[1].base_stat ? poke.stats[1].base_stat : 'N/A'} /></p>

                                            <p> <GiShieldEchoes /> <b>Defesa:</b> {poke.stats[2].base_stat ? poke.stats[2].base_stat : 'N/A'}
                                                <StyleProgresso variant="determinate" value={poke.stats[2].base_stat ? poke.stats[2].base_stat : 'N/A'} /></p>
                                        </div>

                                        <div>
                                            <p> <GiRunningNinja /> <b>Velocidade: </b> {poke.stats[5].base_stat ? poke.stats[5].base_stat : 'N/A'}
                                                <StyleProgresso variant="determinate" value={poke.stats[5].base_stat ? poke.stats[5].base_stat : 'N/A'} /></p>

                                            <p> <GiMagicTrident /> <b>Ataque-Especial:</b> {poke.stats[3].base_stat ? poke.stats[3].base_stat : 'N/A'}
                                                <StyleProgresso variant="determinate" value={poke.stats[3].base_stat ? poke.stats[3].base_stat : 'N/A'} /></p>

                                            <p> <GiShieldOpposition /> <b>Defesa-Especial: </b> {poke.stats[4].base_stat ? poke.stats[4].base_stat : 'N/A'}
                                                <StyleProgresso variant="determinate" value={poke.stats[4].base_stat ? poke.stats[4].base_stat : 'N/A'} /></p>
                                        </div>
                                    </Status>
                                </StatusContainer>

                                <MovesContainer>

                                    <h1>Attacks</h1>
                                    
                                    <BoxMoves textTransform={'capitalize'}>
                                        <p>- {poke.moves[0].move.name}</p>
                                        <p>- {poke.moves[1] ? poke.moves[1].move.name : 'N/A'}</p>
                                        <p>- {poke.moves[2] ? poke.moves[2].move.name : 'N/A'}</p>
                                        <p>- {poke.moves[3] ? poke.moves[3].move.name : 'N/A'}</p>
                                        <p>- {poke.moves[4] ? poke.moves[4].move.name : 'N/A'}</p>
                                    </BoxMoves>
                                </MovesContainer>

                            </AtaqueMovesContainer>
                        </Box>
                    </DetalhesContainer>

                </PokeContainer>
            </PageContainer >
        )
    })

    return (
        <div>
            {renderizarPokemon && renderizarPokemon.length > 0 ? renderizarPokemon : <h1>Carregando...</h1>}
        </div>
    )
}

export default RequisicaoDetalhes