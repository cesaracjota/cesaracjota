import { Container, Flex, useDisclosure } from '@chakra-ui/react'
import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import SidebarContent from './Sidebar';

const Index = ({ componente: Component }) => {

    const sidebar = useDisclosure();

    const menus = [
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
        }
    ];

    return (
        <Flex direction="column" flex="1" bg={'primary.200'} _dark={{ bg: 'primary.900' }}>
            <SidebarContent menu={menus} display={'none'} />
            <Navbar menus={menus} isOpen={sidebar.isOpen} onClose={sidebar.onClose} onOpen={sidebar.onOpen}/>
            <Flex as="main" role="main" direction="column" flex="1" py="5">
                <Container flex="1" maxW={'8xl'} minH="lg">
                    {Component}
                </Container>
            </Flex>
            <Footer />
        </Flex>
    )
}

export default Index;