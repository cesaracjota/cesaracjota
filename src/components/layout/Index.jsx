import { Container, Flex, useDisclosure } from '@chakra-ui/react'
import React from 'react';
import { Footer } from './Footer';
import SidebarContent from './Sidebar';
import { TopNav } from './TopNav';
import ScrollTopButton from './ScrollTopButton';

const Index = ({ componente: Component, loading, progress }) => {

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
    ];

    return (
        <Flex 
            direction="column" 
            flex="1"
            bg={'white'} 
            _dark={{ bg: 'primary.900' }}
            minH="100vh"
            overflow="hidden"
        >
            <SidebarContent menu={menus} display={'none'} />
            <TopNav menus={menus} isOpen={sidebar.isOpen} onClose={sidebar.onClose} onOpen={sidebar.onOpen}/>
            <Flex as="main" role="main" direction="column" flex="1" py="5">
                <Container flex="1" maxW={'4xl'} mt={12}>
                    {Component}
                </Container>
            </Flex>
            <ScrollTopButton />
            <Footer />
        </Flex>
    )
}

export default Index;