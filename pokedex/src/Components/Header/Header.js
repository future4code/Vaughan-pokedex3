import React from 'react'
import styled from 'styled-components'
import { irParaHome, irParaPokedex } from '../../Routes/Coordenadas'
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Icon, Flex, Image, Box } from '@chakra-ui/react'
import { ImHome } from 'react-icons/im'
import logoPokedex from '../../Assets/pokedex.png'
import { MdOutlineCatchingPokemon } from 'react-icons/md'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'


function Header() {
    const navigate = useNavigate()

    return (
        <Flex
            w={"100%"}
            bg={"#000000"}
            borderBottonColor={"#000000"}
            boxShadow={'2xl'} h={['90px']}
            justify={'space-around'}
            align={'center'}
        >

            <Image
                src={logoPokedex}
                onClick={() => irParaHome(navigate)}
                _hover={{ cursor: "pointer" }}
                maxW={'200px'} />

            <Flex justify={'flex-end'} align={'center'}>
                <Menu>
                        <MenuButton
                            marginRight={'16px'}
                            as={IconButton}
                            aria-label='Options'
                            icon={<HamburgerIcon color={'#fff'}
                            />}
                            variant='outline'
                            bg={'#000000'}
                            border={'1px solid white'}
                            borderRadius={'10px'}
                            boxShadow={'base'}
                            p={'6'}
                            width={'50px'}
                            height={'50px'}
                            _hover={{
                                bg: "#FFB100",
                                cursor: "pointer",
                            }}
                        />
                    <MenuList justify={'center'} align={'center'}
                        boxShadow={'2xl'}>
                        <MenuItem onClick={() => irParaHome(navigate)}
                            _hover={{
                                bg: "#AEFCFF",
                                cursor: "pointer"
                            }}
                            border={'2px'}
                            borderTopLeftRadius={"5px"}
                            borderTopRightRadius={"5px"}
                            width={'100px'}
                        >
                            <Icon as={ImHome} w={'20px'} h={'20px'} marginRight={'8px'} />
                            <p>Home</p>
                        </MenuItem>
                        <MenuItem onClick={() => irParaPokedex(navigate)}
                            _hover={{
                                bg: "#AEFCFF",
                                cursor: "pointer"
                            }}
                            border={'2px'}
                            borderBottomLeftRadius={"5px"}
                            borderBottomRightRadius={"5px"}
                            width={'100px'}
                        >
                            <Icon as={MdOutlineCatchingPokemon} w={'20px'} h={'20px'} marginRight={'8px'} />
                            <p>Pokédex</p>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Flex>

        </Flex >
    )
}

export default Header
