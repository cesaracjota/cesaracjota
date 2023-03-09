import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    Heading,
    IconButton,
    Image,
    Stack,
    useBreakpointValue,
    Link,
    Divider,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton
} from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi';
import { ColorModeSwitcher } from '../../theme/ColorModeSwitcher';
import LOGO from '../../assets/img/logo.svg';
import "@fontsource/fira-sans-condensed";
import { NavLink } from 'react-router-dom';
import SidebarContent from './Sidebar';

export const Navbar = (props) => {

    const isDesktop = useBreakpointValue({
        base: false,
        lg: true,
    });

    return (
        <Box
            as="nav"
            boxShadow="base"
            role="navigation"
            bg="#fffffff0"
            _dark={{ bg: 'primary.1000', borderBottomWidth: '.5px', borderColor: 'gray.900' }}
            pos={{ base: "fixed", md: "fixed" }}
            zIndex="2"
            top="0"
            align="space-between"
            w="full"
        >
            <Container
                py={2}
                maxW={'8xl'}
            >
                <HStack spacing="10" justify="space-between">
                    {isDesktop ? (
                        <Flex justify="space-between" flex="1">
                            <Link as={NavLink} to={'/'} alignSelf="center">
                                <Stack spacing={0} direction="row" alignSelf={'center'}>
                                    <Image src={LOGO} w={'full'} h={'full'} maxW={10} alignSelf={'center'} alt={'Agyl Academy'} />
                                    <Heading fontSize="md" as="h1" fontWeight={'black'} alignSelf={'center'} noOfLines={1}>AGYL <span style={{ fontWeight: 'normal', fontSize: '12px', alignSelf: 'center' }}>academy</span></Heading>
                                </Stack>
                            </Link>
                            <ButtonGroup variant="link" spacing="8">
                                {props.menus?.map((item, index) => (
                                    <Link as={NavLink} key={index} to={item.path} alignSelf={'center'}>
                                        <Button fontFamily={`"Fira Sans Condensed", sans-serif`} textColor="gray.600" _dark={{ color: 'gray.200' }}>{item.name}</Button>
                                    </Link>
                                ))}
                            </ButtonGroup>
                            <HStack spacing="3">
                                <ColorModeSwitcher />
                                <Divider orientation='vertical' h={6} />
                                <Link href='https://sga.vercel.app' isExternal>
                                    <Button variant="ghost" colorScheme="gray" textColor={'gray.600'} _dark={{ color: 'white' }} fontWeight="bold" fontFamily={`"Fira Sans Condensed", sans-serif`}>
                                        Ingresar
                                    </Button>
                                </Link>
                            </HStack>
                        </Flex>
                    ) : (
                        <Flex justify="space-between" flex="1">
                            <Drawer
                                isOpen={props.isOpen}
                                onClose={props.onClose}
                                placement="top"
                                size="full"
                                isFullHeight
                            >
                                <DrawerOverlay />
                                <DrawerContent justifyContent={'center'} justify="center" alignItems={'center'}>
                                <DrawerCloseButton size={'lg'}/>
                                    <SidebarContent w="full" borderRight="none" />
                                </DrawerContent>
                            </Drawer>
                            <Link as={NavLink} to={'/'} alignSelf="center">
                                <Stack spacing={1} direction="row">
                                    <Image src={LOGO} maxW={8} w="8" h="8" alt={'Agyl Academy'} />
                                    <Heading textAlign='center' alignSelf="center" as={'h2'} size={'sm'} fontWeight={'extrabold'}>AGYL</Heading>
                                    <Heading size={'xs'} alignSelf="center" fontWeight={'normal'}>academy</Heading>
                                </Stack>
                            </Link>
                            <Stack spacing={1} direction="row">
                                <ColorModeSwitcher />
                                <IconButton
                                    variant="ghost"
                                    icon={<FiMenu fontSize="1.25rem" />}
                                    size={'md'}
                                    rounded={'full'}
                                    aria-label="Open Menu"
                                    onClick={props.onOpen}
                                />
                            </Stack>
                        </Flex>
                    )}
                </HStack>
            </Container>
        </Box>
    )
}
