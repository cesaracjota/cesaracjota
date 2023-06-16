import React from 'react';
import { Container, Flex, useDisclosure } from '@chakra-ui/react';
import { Footer } from './Footer';
import { TopNav } from './TopNav';
import ScrollTopButton from './ScrollTopButton';
import SidebarContent from './Sidebar';

const Layout = ({ componente }) => {

    const sidebar = useDisclosure();

    return (
        <>
            <TopNav isOpen={sidebar.isOpen} onClose={sidebar.onClose} onOpen={sidebar.onOpen} />
            <Flex
                direction="column"
                flex="1"
                bg={'white'}
                _dark={{ bg: 'primary.1200' }}
                minH="100vh"
                overflow="hidden"
            >
                <SidebarContent display={'none'} />
                <Flex as="main" role="main" direction="column" flex="1" py="5">
                    <Container flex="1" maxW={'6xl'} mt={12}>
                        {componente}
                    </Container>
                </Flex>
                <ScrollTopButton />
                <Footer />
            </Flex>
        </>
    );
};

export default Layout;