import { Avatar, Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormLabel, Heading, IconButton, Stack, Switch, Text, Tooltip, useColorMode, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../features/authSlice";
import { Link, NavLink } from "react-router-dom";
import { FiEdit2, FiLogOut } from "react-icons/fi";

export const DrawerHeaderConponent = ({ user }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = useRef();
    const dispatch = useDispatch();

    const { toggleColorMode } = useColorMode();

    const bgTransparency = useColorModeValue('rgba(0, 0, 0, .07)', 'rgba(255, 255, 255, .1)');

    const lightenDarkenColor = (colorCode, amount) => {

        let usePound = false;

        if (colorCode[0] === "#") {
            colorCode = colorCode.slice(1);
            usePound = true;
        }
        const num = parseInt(colorCode, 16);
        let r = (num >> 16) + amount;

        if (r > 255) {
            r = 255;
        } else if (r < 0) {
            r = 0;
        }

        let b = ((num >> 8) & 0x00FF) + amount;

        if (b > 255) {
            b = 255;
        } else if (b < 0) {
            b = 0;
        }

        let g = (num & 0x0000FF) + amount;

        if (g > 255) {
            g = 255;
        } else if (g < 0) {
            g = 0;
        }
        let color = (g | (b << 8) | (r << 16)).toString(16);
        while (color.length < 6) {
            color = 0 + color;
        }
        return (usePound ? '#' : '') + color;
    }

    const bgColorModified = lightenDarkenColor(`${user?.brand_color}`, - 100);

    const handleLogout = () => {
        dispatch(logout());
        window.location.reload();
    }

    const handleClickTheme = () => {
        toggleColorMode();
    }

    const colorModeValue = localStorage.getItem('chakra-ui-color-mode');

    return (
        <>
            <Avatar
                src={user?.image}
                name={user?.name}
                onClick={onOpen}
                objectFit='cover'
                borderColor={bgTransparency}
                color={'white'}
                fontWeight={'bold'}
                fontSize={'md'}
                size={'sm'}
                rounded="full"
                cursor={'pointer'}
            />

            <Drawer
                isOpen={isOpen}
                placement='right'
                initialFocusRef={firstField}
                onClose={onClose}
                size={'sm'}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton size={'lg'} mt={1} />
                    <DrawerHeader borderBottomWidth='1px' _dark={{ bg: 'primary.900' }}>
                        Mi Perfil
                    </DrawerHeader>
                    <DrawerBody _dark={{ bg: 'primary.900' }}>
                        <Box bgColor={user?.brand_color ? bgColorModified : bgTransparency} h="160px" mx={-6} />
                        <Stack direction={'row'} align={'start'} justifyContent={'space-between'}>
                            <Avatar
                                src={user?.image}
                                name={user?.name}
                                size={'xl'}
                                mt={-14}
                                fontWeight={'extrabold'}
                                objectFit='cover'
                                color={'white'}
                                borderWidth={6}
                                borderColor={bgColorModified}
                            />
                        </Stack>
                        <Stack mt={4} spacing={6} alignSelf={'center'}>
                            <Stack spacing={2} direction="row" justifyContent={'space-between'}>
                                <Box>
                                    <Heading fontSize='xl' fontWeight='bold' textTransform={'capitalize'}>{user?.name}</Heading>
                                    <Text fontSize='md'>{user?.email}</Text>
                                </Box>
                                <Box alignSelf={'center'}>
                                    <Tooltip label="Editar y Ver Detalles" aria-label="Editar y Ver Detalles" alignSelf={'center'}>
                                        <Link as={NavLink} to={'/perfil'}>
                                            <IconButton aria-label="Editar y Ver Detalles" alignSelf={'center'} colorScheme="purple" _dark={{ bg: 'purple.600', color: 'white' }} icon={<FiEdit2 size={26} />} size={'lg'} />
                                        </Link>
                                    </Tooltip>
                                </Box>
                            </Stack>

                            <Box>
                                <Stack direction={{ base: 'column', lg: 'row' }} spacing={4} justifyContent={'space-between'} w={'full'}>
                                    <FormLabel htmlFor='theme'>Tema por defecto</FormLabel>
                                    <Switch isChecked={colorModeValue === 'dark' ? true : false} colorScheme='purple' size='lg' onChange={handleClickTheme} />
                                </Stack>
                            </Box>

                            <Box>
                                <Heading fontSize='xl' fontWeight='bold'>Support</Heading>
                                <Text fontSize='md' color='gray.500' >Found an issue, have a question or just want to chat?</Text>
                            </Box>
                        </Stack>
                    </DrawerBody>

                    <DrawerFooter borderTopWidth='1px' _dark={{ bg: 'primary.900' }}>
                        <Tooltip
                            label="Cerrar Sesión"
                            aria-label="Cerrar Sesión"
                            alignSelf={'center'}
                            placement={'top'}
                        >
                            <Button rightIcon={<FiLogOut />} size={'md'} bg='red.500' _hover={{ bg: 'red.700', color: 'white' }} color='white' _dark={{ bg: 'red.500', _hover: { bg: 'red.700', color: 'white' } }} variant={'solid'} onClick={handleLogout}>
                                Cerrar Sesión
                            </Button>
                        </Tooltip>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}