import React, { useState } from 'react';
import {
    Button,
    FormControl,
    FormLabel,
    Icon,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
    Stack,
    Textarea,
    Tooltip,
} from '@chakra-ui/react'
import { VscAdd } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import { createCertificado } from '../../../features/certificadoSlice';
import { LockIcon } from '@chakra-ui/icons';

export const ModalAgregarCertificado = () => {

    const dispatch = useDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const { user } = useSelector((state) => state.auth);

    const initialValues = {
        title: '',
        hover_title: '',
        description: '',
        link: '',
        logo: '',
        image: '',
        brand_color: '',
        estado: 'ACTIVO',
    }

    const [indice, setIndice] = useState(initialValues);

    const handleModalOpen = () => {
        setIsModalOpen(!isModalOpen)
    }

    const handleModalClose = () => {
        setIsModalOpen(false)
        setIndice(initialValues)
    }

    const handleSave = () => {
        dispatch(createCertificado(indice));
        setIsModalOpen(false);
        setIndice(initialValues);
    }

    return (
        <>
            <Tooltip
                label={user.usuario.role !== 'ADMIN' ? 'No tiene privilegios para realizar estas acciones' : 'Agregar nuevo usuario'}
                fontSize="md"
                placement="bottom"
                hasArrow
            >
                <Button
                    colorScheme="messenger"
                    _dark={{ bg: "messenger.500", color: "white", _hover: { bg: "messenger.600" } }}
                    aria-label="Agregar"
                    leftIcon={<Icon as={user.usuario.role !== 'ADMIN' ? LockIcon : VscAdd} fontSize="2xl" />}
                    variant="solid"
                    borderRadius="none"
                    onClick={handleModalOpen}
                    isDisabled={user.usuario.role !== 'ADMIN'}
                >
                    Nuevo Registro
                </Button>
            </Tooltip>
            <Modal isOpen={isModalOpen} onClose={handleModalClose} size="6xl">
                <ModalOverlay
                    bg="rgba(0,0,0,0.7)"
                    backdropFilter='auto'
                    backdropBlur='2px'
                />
                <ModalContent _dark={{ bg: "primary.900" }} borderRadius="none">
                    <ModalHeader textAlign="center">AGREGAR NUEVO CERTIFICADO</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack mt={-4} spacing={2} direction={{ base: "column", lg: "row" }} justifyContent="space-between" px={4} py={2}>
                            <FormControl>
                                <FormLabel fontWeight="semibold">TITULO</FormLabel>
                                <Input
                                    placeholder="Ingrese los titulos"
                                    type="text"
                                    onChange={(e) => setIndice({ ...indice, title: e.target.value })}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel fontWeight="semibold">HOVER TITULO</FormLabel>
                                <Input
                                    placeholder="Ingrese el hover title"
                                    type="text"
                                    onChange={(e) => setIndice({ ...indice, hover_title: e.target.value })}
                                />
                            </FormControl>
                        </Stack>
                        <Stack px={4}>
                            <FormControl>
                                <FormLabel fontWeight="semibold">DESCRIPCIÓN</FormLabel>
                                <Textarea
                                    placeholder="Ingrese la descripcion"
                                    type="text"
                                    rows={2}
                                    onChange={(e) => setIndice({ ...indice, description: e.target.value })}
                                />
                            </FormControl>
                        </Stack>
                        <Stack spacing={2} direction={{ base: 'column', lg: 'row' }} px={4} py={2}>
                            <FormControl>
                                <FormLabel fontWeight="semibold">LOGO INSTITUCIÓN</FormLabel>
                                <Input
                                    placeholder="Ingrese la url del logo"
                                    type="text"
                                    onChange={(e) => setIndice({ ...indice, logo: e.target.value })}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel fontWeight="semibold">IMAGEN</FormLabel>
                                <Input
                                    placeholder="Ingrese la url imagen"
                                    type="text"
                                    onChange={(e) => setIndice({ ...indice, image: e.target.value })}
                                />
                            </FormControl>
                        </Stack>
                        <Stack spacing={2} px={4} py={2}>
                            <FormControl>
                                <FormLabel fontWeight="semibold">LINK DEL CERTIFICADO</FormLabel>
                                <Input
                                    placeholder="Ingrese la url del certificado"
                                    type="text"
                                    onChange={(e) => setIndice({ ...indice, link: e.target.value })}
                                />
                            </FormControl>
                        </Stack>
                        <Stack spacing={2} direction={{ base: "column", lg: "row" }} justifyContent="space-between" px={4} py={2}>
                            <FormControl>
                                <FormLabel fontWeight="semibold">BRAND COLOR</FormLabel>
                                <Input
                                    type="color"
                                    onChange={(e) => setIndice({ ...indice, brand_color: e.target.value })}
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel fontWeight="semibold">ESTADO</FormLabel>
                                <Select
                                    onChange={(e) => setIndice({ ...indice, estado: e.target.value })}
                                    placeholder="SELECCIONE ESTADO"
                                >
                                    <option value={'ACTIVO'}>ACTIVO</option>
                                    <option value={'INACTIVO'}>INACTIVO</option>
                                </Select>
                            </FormControl>
                        </Stack>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="red" borderRadius="none" _dark={{ bg: "red.500", color: "white", _hover: { bg: "red.600" } }} size="lg" mr={3} onClick={handleModalClose}>
                            CANCELAR
                        </Button>

                        <Button
                            colorScheme="messenger"
                            _dark={{ bg: "messenger.500", color: "white", _hover: { bg: "messenger.600" } }}
                            size="lg"
                            borderRadius="none"
                            mr={3}
                            onClick={handleSave}
                            isDisabled={indice.title === '' || indice.hover_title === '' || indice.brand_color === '' || indice.estado === ''}
                        >
                            GUARDAR
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
