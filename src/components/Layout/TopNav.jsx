import {
    Box,
    Container,
    Flex,
    HStack,
    IconButton,
    Stack,
    useBreakpointValue,
    Link as ChakraLink,
    Divider,
    ButtonGroup,
    Heading,
    Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { ColorModeSwitcher } from '../../theme/ColorModeSwitcher';
import "@fontsource/fira-sans-condensed";
import { NavLink } from 'react-router-dom';
import LanguageMenu from '../../helpers/LanguageMenu';
import '@fontsource/smooch';
import "@fontsource/fira-sans-condensed";

export const TopNav = (props) => {

    const isDesktop = useBreakpointValue({
        base: false,
        lg: true,
    });

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
            nameEN: 'Contact',
            nameES: 'Contacto',
            path: '/contact',
        },
    ];

    return (
        <Box
            as="nav"
            role="navigation"
            pos={{ base: "fixed", lg: "fixed" }}
            bg={"rgba(255, 255, 255, 0.85)"}
            backdropFilter="saturate(180%) blur(8px)"
            zIndex="2"
            top="0"
            align="space-between"
            w="full"
            _dark={{
                bg: "rgba(26, 26, 26, 0.85)",
                backdropFilter: "saturate(180%) blur(8px)"
            }}
        >
            <Container
                py={2.5}
                maxW={'6xl'}
            >
                <HStack spacing="10" justify="space-between">
                    {isDesktop ? (
                        <Flex justify="space-between" flex="1">
                            <ChakraLink as={NavLink} to={'/'} alignSelf="center" _hover={{ textDecoration: 'none' }}>
                                <Stack spacing={0} direction="row" alignSelf={'center'}>
                                    <Heading as="h1" fontWeight={'500'} fontSize="30px" color={'gray.700'} _dark={{ color: 'gray.200' }} fontFamily={`'Smooch', sans-serif`}>
                                        {`</Cesar Acjota/>`}
                                    </Heading>
                                </Stack>
                            </ChakraLink>
                            <HStack spacing="4">
                                <ButtonGroup
                                    variant="link"
                                    spacing="5"
                                    _focus={{ boxShadow: 'none' }}
                                >
                                    {menus.map((item, index) => (
                                        <Text
                                            key={index}
                                            as={NavLink}
                                            to={item.path}
                                            fontSize={'16px'}
                                            fontFamily={`"Fira Sans Condensed", sans-serif`}
                                            _light={{
                                                color: 'black',
                                                _activeLink: {
                                                    color: 'primary.100',
                                                },
                                                _hover: {
                                                    color: 'primary.100',
                                                },
                                                textDecoration: 'none',
                                            }}
                                            _dark={{
                                                color: 'white',
                                                _activeLink: {
                                                    color: 'primary.100',
                                                },
                                                _hover: {
                                                    color: 'primary.100',
                                                },
                                                textDecoration: 'none',
                                            }}
                                            transition=".3s ease all"
                                        >
                                            {language === 'en' ? item.nameEN : item.nameES}
                                        </Text>
                                    ))}
                                </ButtonGroup>
                                <Divider orientation='vertical' h={6} borderColor={'gray.700'} _dark={{ borderColor: 'gray.200' }} />
                                <LanguageMenu />
                                <Divider orientation='vertical' h={6} borderColor={'gray.700'} _dark={{ borderColor: 'gray.200' }} />
                                <ColorModeSwitcher />
                            </HStack>
                        </Flex>
                    ) : (
                        <Flex justify="space-between" flex="1">
                            <ChakraLink as={NavLink} to={'/'} alignSelf="center" _hover={{ textDecoration: 'none' }}>
                                <Stack spacing={1} direction="row">
                                    <Heading as="h1" fontWeight={'500'} fontSize="24px" color={'black'} _dark={{ color: 'white' }} fontFamily={`'Smooch', sans-serif`}>
                                        {`</Cesar Acjota/>`}
                                    </Heading>
                                </Stack>
                            </ChakraLink>
                            <Stack spacing={1} direction="row">
                                <LanguageMenu />
                                <ColorModeSwitcher />
                                <Menu
                                    placement="bottom-end"
                                    autoSelect={true}
                                    closeOnSelect={true}
                                >
                                    <MenuButton
                                        as={IconButton}
                                        aria-label='Options'
                                        variant="ghost"
                                        icon={<FiMenu fontSize="1.25rem" />}
                                        size={'md'}
                                        rounded={'lg'}
                                    />
                                    <MenuList
                                        _dark={{
                                            bg: 'primary.1000',
                                            color: 'white',
                                        }}
                                    >{
                                        menus.map((item, index) => (
                                            <MenuItem
                                                key={index}
                                                as={NavLink}
                                                to={item.path}
                                                fontSize={'16px'}
                                                fontFamily={`"Fira Sans Condensed", sans-serif`}
                                                _light={{
                                                    _activeLink: {
                                                        color: 'primary.100',
                                                    },
                                                    _hover: {
                                                        color: 'primary.100',
                                                        bg: 'none'
                                                    },
                                                    textDecoration: 'none',
                                                }}
                                                _dark={{
                                                    bg: 'primary.1000',
                                                    _activeLink: {
                                                        color: 'primary.100',
                                                    },
                                                    _hover: {
                                                        color: 'primary.100',
                                                        bg: 'none'
                                                    },
                                                    textDecoration: 'none',
                                                }}
                                                transition=".3s ease all"
                                            >
                                                {language === 'en' ? item.nameEN : item.nameES}
                                            </MenuItem>
                                        ))}
                                    </MenuList>
                                </Menu>
                            </Stack>
                        </Flex>
                    )}
                </HStack>
            </Container>
        </Box>
    )
}