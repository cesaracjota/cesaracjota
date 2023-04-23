import React from 'react'
import {
    Box,
    Flex,
    Link,
    useColorModeValue,
} from '@chakra-ui/react'

import { NavLink } from 'react-router-dom';
import "@fontsource/fira-sans-condensed";

const NavItem = (props) => {

    const activeLinkcolor = useColorModeValue("white", "white");
    const bgActiveLinkColor = useColorModeValue("primary.100", "primary.100")

    const { children, ...rest } = props;

    return (
        <Flex
            py="8px"
            px="10"
            cursor="pointer"
            _hover={{
                bg: bgActiveLinkColor,
                color: activeLinkcolor,
            }}
            textAlign={'center'}
            justifyContent="center"
            alignItems="center"
            role="group"
            fontWeight="semibold"
            transition=".3s ease-in"
            scrollMarginY={10}
            {...rest}
        >
            {children}
        </Flex>
    );
};


const SidebarContent = (props) => {

    const activeLinkcolor = useColorModeValue('primary.200', 'primary.200');
    const bgActiveLinkColor = useColorModeValue('primary.100', 'primary.100');

    const language = localStorage.getItem('language');

    const menus = [
        {
            nameEN: 'Home',
            nameES: 'Inicio',
            path: '/',
        },
        {
            nameEN: 'Projects',
            nameES: 'Proyectos',
            path: '/projects',
        },
        {
            nameEN: 'About',
            nameES: 'Acerca de',
            path: '/about',
        },
        {
            nameEN: 'Blog',
            nameES: 'Blog',
            path: '/blogs',
        },
        {
            nameEN: 'Contact',
            nameES: 'Contacto',
            path: '/contact',
        }
    ];

    return (
        <>
            <Box
                alignSelf={'center'}
                height={'100%'}
                verticalAlign={'center'}
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="100%"
                _dark={{ bg: 'primary.1000', color: 'primary.200' }}
                color="primary.1000"
                boxShadow={'base'}
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
                <Flex
                    direction="column"
                    fontSize="16px"
                    fontWeight="bold"
                    fontFamily={`"Fira Sans Condensed", sans-serif`}
                    color="primary.100"
                    _dark={{
                        color: '#ffffffa1'
                    }}
                    aria-label="Main Navigation"
                    alignSelf={'center'}
                >
                    {menus?.map((item, index) => (
                        <Link
                            key={index}
                            mb={'4px'}
                            as={NavLink}
                            to={item.path}
                            _activeLink={{
                                color: activeLinkcolor,
                                fontWeight: 'extrabold',
                                bg: bgActiveLinkColor,
                            }}
                            _focus={{ boxShadow: 'none' }}
                            justifyContent="center"
                            alignItems="center"
                            _hover={{ textDecoration: 'none' }}
                        >
                            <NavItem>
                                {language === 'en' ? item.nameEN : item.nameES}
                            </NavItem>
                        </Link>
                    ))}
                </Flex>
            </Box>
        </>
    )
}

export default SidebarContent;