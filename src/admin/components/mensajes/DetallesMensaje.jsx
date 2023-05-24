import React, { useState } from 'react';
import {
    Button,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    IconButton,
    HStack,
    Accordion,
    AccordionItem,
    AccordionButton,
    Box,
    AccordionIcon,
    AccordionPanel,
    Flex,
    Spacer,
    Text,
    VStack,
    Tooltip,
    Heading,
    Stack,
    Divider,
    Avatar,
    Icon,
} from '@chakra-ui/react';
import { FiCheckCircle } from 'react-icons/fi';
import { AiFillMessage } from 'react-icons/ai';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { mensajeMarcadoLeido } from '../../../features/mensajeSlice';

const DetallesMensaje = ({ row }) => {

    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleModalOpen = () => {
        setIsDrawerOpen(!isDrawerOpen);
    }

    const handleDrawerClose = () => {
        setIsDrawerOpen(false)
    }

    const handleMarcarLeidoMensaje = () => {
        dispatch(mensajeMarcadoLeido(row)).then(() => {
            handleDrawerClose()
        })
    }

    return (
        <>
            <Tooltip hasArrow label={user.usuario.role !== 'ADMIN' ? 'No tiene privilegios para realizar esta acción' : 'Ver Mensaje'}  placement='auto'>
                <IconButton
                    icon={<Icon as={AiFillMessage} />}
                    fontSize="2xl"
                    size={'md'}
                    colorScheme="purple"
                    color="white"
                    variant={'solid'}
                    _dark={{ color: "white", bg: "purple.500", _hover: { bg: "purple.800" } }}
                    onClick={handleModalOpen}
                    ml={2}
                    isDisabled={user.usuario.role !== 'ADMIN'}
                />
            </Tooltip>

            <Drawer
                isOpen={isDrawerOpen}
                onClose={handleDrawerClose}
                closeOnOverlayClick={true}
                size={'md'}
            >
                <DrawerOverlay
                    bg="rgba(0,0,0,0.7)"
                    backdropFilter='auto'
                    backdropBlur='2px'
                />
                <DrawerContent
                    _dark={{ bg: "primary.900" }}
                >
                    <DrawerHeader>
                        <HStack
                            w="full"
                            alignItems={'center'}
                            justifyContent={'center'}
                        >
                            <Text textAlign={'center'} fontWeight="extrabold">DETALLES DEL CORREO</Text>
                        </HStack>
                    </DrawerHeader>
                    <DrawerCloseButton />
                    <DrawerBody>
                        <Flex
                            direction="column"
                            as="nav"
                            my={0}
                            mt={0}
                            justify="space-between"
                            h="100%"
                        >
                            <Stack
                                direction={'row'}
                                spacing={1}
                                w={'100%'}
                                borderRadius={'lg'}
                                p={4}
                                boxShadow={'base'}
                            >
                                <Heading size={'sm'} fontWeight={'bold'}>FECHA: </Heading>
                                <Spacer />
                                <Text>{moment(row.createdAt).format('YYYY-MM-DD  |  H:mm:ss A')}</Text>
                            </Stack>
                            <VStack spacing={'10px'}>
                                <Stack
                                    direction={'column'}
                                    spacing={1}
                                    mt={4}
                                    w={'100%'}
                                    borderRadius={'lg'}
                                    p={4}
                                    boxShadow={'base'}
                                >
                                    <Heading size={'sm'} fontWeight={'bold'}>ASUNTO DEL MENSAJE</Heading>
                                    <Divider />
                                    <Text textAlign={'justify'}>{row?.asunto_mensaje}</Text>
                                </Stack>
                                <Stack
                                    direction={'column'}
                                    spacing={1}
                                    mt={4}
                                    w={'100%'}
                                    borderRadius={'lg'}
                                    p={4}
                                    boxShadow={'base'}
                                >
                                    <Heading size={'sm'} fontWeight={'bold'}>MENSAJE</Heading>
                                    <Divider />
                                    <Text textAlign={'justify'}>{row?.mensaje}</Text>
                                </Stack>
                            </VStack>
                            <Spacer />
                            <Accordion defaultIndex={[0]} mt={4} allowToggle>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton >
                                            <Box flex="1" ml={0} textAlign="left" fontWeight={'bold'}>
                                                DETALLES DEL USUARIO QUIEN ENVIO EL MENSAJE
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        <Stack direction={{ base: 'column', lg: 'row' }} spacing={4} mt={4}>
                                            <Avatar
                                                size={'xl'}
                                                name={row?.nombres_usuario}
                                                color="white"
                                                fontWeight="bold"
                                            />
                                            <Stack direction={'column'} spacing={1} mt={4} alignSelf={'center'}>
                                                <Heading size={'md'} fontWeight={'bold'}>{row?.nombres_usuario} {row?.apellido}</Heading>
                                                <Text>{row?.email}</Text>
                                                <Text>{row?.telefono}</Text>
                                            </Stack>
                                        </Stack>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </Flex>
                    </DrawerBody>
                    <DrawerFooter>
                        {
                            row?.leido === true ? (
                                <Button rightIcon={<FiCheckCircle fontSize={18} />} colorScheme="purple" _dark={{ bg: "purple.500", color: "white", _hover: { bg: "purple.600" } }} onClick={handleDrawerClose}>
                                    OK
                                </Button>
                            ) : (
                                <Button rightIcon={<FiCheckCircle fontSize={18} />} colorScheme="purple" _dark={{ bg: "purple.500", color: "white", _hover: { bg: "purple.600" } }} onClick={handleMarcarLeidoMensaje}>
                                    MARCAR COMO LEIDO
                                </Button>
                            )
                        }
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default DetallesMensaje;