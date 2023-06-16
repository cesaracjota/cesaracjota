import React, { useState } from 'react';
import {
    Button,
    FormControl,
    FormLabel,
    Icon,
    IconButton,
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
import { useDispatch, useSelector } from 'react-redux';
import { updateCertificado } from '../../../features/certificadoSlice';
// import { LockIcon } from '@chakra-ui/icons';
import { MdEdit } from 'react-icons/md';

export const ModalEditarCertificado = ({ row }) => {

    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const initialValues = {
        _id: null,
        title: '',
        hover_title: '',
        description: '',
        link: '',
        logo: '',
        image: null,
        brand_color: '',
        estado: 'ACTIVO',
    }

    const [indice, setIndice] = useState(initialValues);

    const handleModalOpen = () => {
        setIsModalOpen(!isModalOpen)
        setIndice(row);
    }

    const handleModalClose = () => {
        setIsModalOpen(false)
        setIndice(initialValues)
    }

    const handleSave = () => {
        dispatch(updateCertificado(indice));
        setIsModalOpen(false);
        setIndice(initialValues);
    }

    return (
        <>
            <Tooltip hasArrow label={user.usuario.role !== 'ADMIN' ? 'No tiene privilegios para realizar estas acciones' : 'Editar'} placement='auto'>
                <IconButton
                    icon={<Icon as={MdEdit} />}
                    fontSize="2xl"
                    size={'md'}
                    colorScheme="yellow"
                    color="white"
                    variant={'solid'}
                    _dark={{ color: "white", bg: "yellow.500", _hover: { bg: "yellow.800" } }}
                    onClick={() => handleModalOpen(row)}
                    isDisabled={user.usuario.role !== 'ADMIN'}
                    ml={2}
                />
            </Tooltip>
            <Modal isOpen={isModalOpen} onClose={handleModalClose} size="6xl">
                <ModalOverlay
                    bg="rgba(0,0,0,0.7)"
                    backdropFilter='auto'
                    backdropBlur='2px'
                />
                <ModalContent _dark={{ bg: "primary.900" }} borderRadius="none">
                    <ModalHeader textAlign="center">EDITAR CERTIFICADO</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack mt={-4} spacing={2} direction={{ base: "column", lg: "row" }} justifyContent="space-between" px={4} py={2}>
                            <FormControl>
                                <FormLabel fontWeight="semibold">TITULO</FormLabel>
                                <Input
                                    placeholder="Ingrese los titulos"
                                    defaultValue={indice ? indice.title : ''}
                                    type="text"
                                    onChange={(e) => setIndice({ ...indice, title: e.target.value })}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel fontWeight="semibold">HOVER TITULO</FormLabel>
                                <Input
                                    placeholder="Ingrese el hover title"
                                    defaultValue={indice ? indice.hover_title : ''}
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
                                    defaultValue={indice ? indice.description : ''}
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
                                    defaultValue={indice ? indice.logo : ''}
                                    type="text"
                                    onChange={(e) => setIndice({ ...indice, logo: e.target.value })}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel fontWeight="semibold">IMAGEN</FormLabel>
                                <Input
                                    placeholder="Ingrese la url imagen"
                                    defaultValue={indice ? indice.image : ''}
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
                                    defaultValue={indice ? indice.link : ''}
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
                                    defaultValue={indice ? indice.brand_color : ''}
                                    onChange={(e) => setIndice({ ...indice, brand_color: e.target.value })}
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel fontWeight="semibold">ESTADO</FormLabel>
                                <Select
                                    placeholder="SELECCIONE ESTADO"
                                    defaultValue={indice ? indice.estado : ''}
                                    onChange={(e) => setIndice({ ...indice, estado: e.target.value })}
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
                            isDisabled={ indice.title === '' || indice.hover_title === '' }
                        >
                            ACTUALIZAR
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
