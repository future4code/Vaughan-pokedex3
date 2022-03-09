import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Icon, Flex } from '@chakra-ui/react'
import { ImHome } from 'react-icons/im'
import { MdOutlineCatchingPokemon } from 'react-icons/md'
import { HamburgerIcon } from '@chakra-ui/icons'

function Header() {

    return (
        <Flex
            w={"100%"}
            bg={"#161b25"}
            borderBottonColor={"#000000"}
            boxShadow={'2xl'} h={['125px']}
            justify={'space-around'}
            align={'center'}
        >
            <Flex justify={'flex-end'} align={'center'}>
                <Menu>
                    <MenuButton
                        marginRight={'16px'}
                        as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon color={'white'} />}
                        variant='outline'
                        bg={'#161b25'}
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
