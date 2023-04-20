import {
    Box,
    Container,
    Flex,
    HStack,
    IconButton,
    Image,
    Stack,
    useBreakpointValue,
    Link,
    Divider,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi';
import { ColorModeSwitcher } from '../../theme/ColorModeSwitcher';
import LOGO from '../../assets/img/logo.svg';
import "@fontsource/fira-sans-condensed";
import { NavLink } from 'react-router-dom';
import SidebarContent from './Sidebar';
import LanguageMenu from '../../helpers/LanguageMenu';
import { useEffect, useState } from 'react';

export const TopNav = (props) => {

    const isDesktop = useBreakpointValue({
        base: false,
        lg: true,
    });

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Box
            as="nav"
            role="navigation"
            pos={{ base: "fixed", lg: "fixed" }}
            bg={scrolled ? "primary.100" : "transparent"}
            zIndex="2"
            top="0"
            align="space-between"
            w="full"
            css={{
                backdropFilter: scrolled ? 'saturate(180%) blur(20px)' : 'saturate(50%) blur(8px)',
                backgroundColor: scrolled ? 'primary.100' : 'rgba(0,0,0,0)',
            }}
            _dark={{
                bg: scrolled ? "primary.100" : "transparent",
            }}
            transition="background-color 0.5s linear"
        >
            <Container
                py={3}
                maxW={'4xl'}
            >
                <HStack spacing="10" justify="space-between">
                    {isDesktop ? (
                        <Flex justify="space-between" flex="1">
                            <Link as={NavLink} to={'/'} alignSelf="center">
                                <Stack spacing={0} direction="row" alignSelf={'center'}>
                                    <Image src={LOGO} w={'full'} h={'full'} maxW={10} alignSelf={'center'} alt={'Cesar Acjota'} />
                                </Stack>
                            </Link>
                            <Drawer
                                isOpen={props.isOpen}
                                onClose={props.onClose}
                                placement="right"
                                size="sm"
                                isFullHeight
                            >
                                <DrawerOverlay />
                                <DrawerContent justifyContent={'center'} justify="center" alignItems={'center'}>
                                    <DrawerCloseButton size={'lg'} />
                                    <SidebarContent w="full" borderRight="none" />
                                </DrawerContent>
                            </Drawer>
                            <HStack spacing="3">
                                <LanguageMenu scrolled = { scrolled } />
                                <Divider orientation='vertical' h={6} />
                                <ColorModeSwitcher scrolled = { scrolled } />
                                <Divider orientation='vertical' h={6} />
                                <IconButton
                                    variant="ghost"
                                    icon={<FiMenu fontSize="1.25rem" />}
                                    size={'md'}
                                    rounded={'full'}
                                    aria-label="Open Menu"
                                    onClick={props.onOpen}
                                    colorScheme={
                                        scrolled ? "whiteAlpha" : "gray"
                                    }
                                    _dark={{
                                        color: 'white',
                                    }}
                                    color={
                                        scrolled ? "white" : "black"
                                    }
                                />
                            </HStack>
                        </Flex>
                    ) : (
                        <Flex justify="space-between" flex="1">
                            <Drawer
                                isOpen={props.isOpen}
                                onClose={props.onClose}
                                placement="right"
                                size="lg"
                            // isFullHeight
                            >
                                <DrawerOverlay />
                                <DrawerContent justifyContent={'center'} justify="center" alignItems={'center'}>
                                    <DrawerCloseButton size={'lg'} />
                                    <SidebarContent w="full" borderRight="none" />
                                </DrawerContent>
                            </Drawer>
                            <Link as={NavLink} to={'/'} alignSelf="center">
                                <Stack spacing={1} direction="row">
                                    <Image src={LOGO} maxW={8} w="8" h="8" alt={'Agyl Academy'} />
                                    {/* <Heading textAlign='center' alignSelf="center" as={'h2'} size={'sm'} fontWeight={'extrabold'}>CESAR</Heading>
                                    <Heading size={'xs'} alignSelf="center" fontWeight={'normal'}>Acjota</Heading> */}
                                </Stack>
                            </Link>
                            <Stack spacing={1} direction="row">
                                <LanguageMenu scrolled = { scrolled } />
                                <ColorModeSwitcher scrolled = { scrolled } />
                                <IconButton
                                    variant="ghost"
                                    icon={<FiMenu fontSize="1.25rem" />}
                                    size={'md'}
                                    rounded={'full'}
                                    aria-label="Open Menu"
                                    onClick={props.onOpen}
                                    colorScheme={
                                        scrolled ? "whiteAlpha" : "gray"
                                    }
                                    _dark={{
                                        color: 'white',
                                    }}
                                    color={
                                        scrolled ? "white" : "black"
                                    }
                                />
                            </Stack>
                        </Flex>
                    )}
                </HStack>
            </Container>
        </Box>
    )
}