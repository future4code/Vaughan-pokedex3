import React from 'react'
import { irParaHome } from '../../Routes/Coordenadas'
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Icon, Flex, Image } from '@chakra-ui/react'
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
            bg={"#161b25"}
            borderBottonColor={"#000000"}
            boxShadow={'2xl'} h={['125px']}
            justify={'space-around'}
            align={'center'}
        >

            <Image
                src={logoPokedex}
                onClick={() => irParaHome(navigate)}
                _hover={{ cursor: "pointer" }}
                maxW={'250px'} />

            <Flex justify={'flex-end'} align={'center'}>
                <Menu>
                    <MenuButton
                        marginRight={'16px'}
                        as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon color={'white'} />}
                        variant='outline'
                        bg={'#161b25'}
                        border={'5px'}
                        borderRadius={'10px'}
                        boxShadow={'base'}
                        p={'6'}
                        width={'50px'}
                        height={'50px'}
                        _hover={{
                            bg: "#696f81"
                        }}
                    />
                    <MenuList justify={'center'} align={'center'} >
                        <MenuItem >
                            <Icon as={ImHome} w={'20px'} h={'20px'} marginRight={'8px'} />
                            <p>Home</p>
                        </MenuItem>
                        <MenuItem >
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