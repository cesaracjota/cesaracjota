import React from 'react'
import {
    Box,
    Flex,
    Image,
    Link,
    Stack,
    useColorModeValue,
} from '@chakra-ui/react'

import { NavLink } from 'react-router-dom';
import LOGO from '../../assets/img/logo.svg';
import "@fontsource/fira-sans-condensed";

const NavItem = (props) => {

    const activeLinkcolor = useColorModeValue("white", "white");
    const bgActiveLinkColor = useColorModeValue("primary.100", "#ffffff1f")

    const { children, ...rest } = props;

    return (
        <Flex
            py="10px"
            px="3"
            cursor="pointer"
            _hover={{
                bg: bgActiveLinkColor,
                color: activeLinkcolor,
            }}
            role="group"
            fontWeight="semibold"
            transition=".5s ease"
            scrollMarginY={10}
            {...rest}
        >
            {children}
        </Flex>
    );
};


const SidebarContent = (props) => {

    const activeLinkcolor = useColorModeValue('primary.200', 'primary.200');
    const bgActiveLinkColor = useColorModeValue('primary.100', 'primary.700');

    const menus = [
        {
            name: 'INICIO',
            path: '/',
        },
        {
            name: '!NUEVOS CICLOS',
            path: '/unsa',
        },
        {
            name: 'BLOG',
            path: '/blog',
        },
        {
            name: 'TUTORIALES',
            path: '/tutoriales',
        },
        {
            name: 'NOSOTROS',
            path: '/nosotros',
        },
        {
            name: 'VER PUNTAJES',
            path: '/maximos-minimos-admision',
        },
    ];

    return (
        <>
            <Box
                as="nav"
                // pos="fixed"
                top="0"
                left="0"
                // zIndex="sticky"
                h="full"
                pb="10"
                overflowX="hidden"
                overflowY="auto"
                bg="#ffffffa1"
                _dark={{ bg: 'primary.1000', color: 'primary.200' }}
                w={'full'}
                color="primary.1000"
                boxShadow={'base'}
                // boxShadow="0px 3px 5px -1px rgba(0,0,0,.2),0px 5px 8px 0px rgba(0,0,0,.14),0px 1px 14px 0px rgba(0,0,0,.12)"
                sx={{
                    '&::-webkit-scrollbar': {
                        width: '4px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: useColorModeValue('rgba(0,0,0,.3)', 'rgba(0,0,0,.4)'),
                        borderRadius: '24px',
                        width: '4px',
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                        backgroundColor: 'rgba(0,0,0,.5)'
                    },
                    '&::-webkit-scrollbar-thumb:active': {
                        backgroundColor: 'rgba(0,0,0,.6)'
                    },
                    '&::-webkit-scrollbar-track': {
                        background: '#d4d4d4',
                        borderRadius: '24px',
                    },
                    '&::-webkit-scrollbar-track:hover': {
                        background: '#d4d4d4',
                    },
                    '&::-webkit-scrollbar-track:active': {
                        background: '#d6d6d6',
                    },
                }}
                {...props}
            >
                <Flex px="2" py="12px" direction={'row'} alignItems="left">
                    <Stack spacing={2} direction="row">
                        <Image src={LOGO} maxW={8} w="8" h="8" alt={'Agyl Academy'} />
                    </Stack>
                </Flex>
                <Flex
                    direction="column"
                    as="nav"
                    fontSize="16px"
                    fontWeight="bold"
                    textAlign={'center'}
                    fontFamily={`"Fira Sans Condensed", sans-serif`}
                    color="primary.100"
                    _dark={{ 
                        color: '#ffffffa1'
                    }}
                    aria-label="Main Navigation"
                    borderTopRadius={'3xl'}
                >
                    {menus?.map((item, index) => (
                        <Link
                            key={index}
                            mb={'5px'}
                            as={NavLink}
                            to={item.path}
                            _activeLink={{
                                color: activeLinkcolor,
                                bg: bgActiveLinkColor,
                                // borderBottom: "4px solid #ffffffa1",
                                // borderRadius: "0 20px 20px 0",
                            }}
                            _hover={{ textDecoration: 'none' }}
                        >
                            <NavItem>{item.name}</NavItem>
                        </Link>
                    ))}
                </Flex>
            </Box>
        </>
    )
}

export default SidebarContent;