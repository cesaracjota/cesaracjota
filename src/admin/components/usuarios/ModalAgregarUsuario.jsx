import React, { useState } from 'react';
import {
    Button,
    FormControl,
    FormHelperText,
    FormLabel,
    Icon,
    Input,
    InputGroup,
    InputRightElement,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
    Stack,
} from '@chakra-ui/react'
import { VscAdd } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../../../features/userSlice';
import { LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export const ModalAgregarUsuario = () => {

    const dispatch = useDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const { user } = useSelector((state) => state.auth);

    const initialValues = {
        name: '',
        username: '',
        email: '',
        password: '',
        role: 'USER',
        image: '',
        estado: 'ACTIVO'
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
        dispatch(createUser(indice));
        setIsModalOpen(false)
        setIndice(initialValues)
    }

    const [showPassword, setShowPassword] = useState(false);
    const handleShowClick = () => setShowPassword(!showPassword);

    return (
        <>
            <Button
                colorScheme="messenger"
                _dark={{ bg: "messenger.500", color: "white", _hover: { bg: "messenger.600" } }}
                aria-label="Agregar"
                leftIcon={<Icon as={user.usuario.role !== 'ADMIN' ? LockIcon : VscAdd} fontSize="xl" />}
                variant="solid"
                borderRadius="xl"
                onClick={handleModalOpen}
                isDisabled={user.usuario.role !== 'ADMIN'}
                isTruncated={user.usuario.role !== 'ADMIN'}
            >
                Nuevo Registro
            </Button>
            <Modal isOpen={isModalOpen} onClose={handleModalClose} size="6xl">
                <ModalOverlay
                    bg="rgba(0,0,0,0.9)"
                    backdropFilter='auto'
                    backdropBlur='2px'
                />
                <ModalContent _dark={{ bg: "primary.900" }} borderRadius="none">
                    <ModalHeader textAlign="center">AGREGAR NUEVO USUARIO</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack spacing={2} direction={{ base: "column", lg: "row" }} justifyContent="space-between" px={4} py={2}>
                            <FormControl>
                                <FormLabel fontWeight="semibold">NOMBRES</FormLabel>
                                <Input
                                    placeholder="Ingrese los nombres"
                                    type="text"
                                    onChange={(e) => setIndice({ ...indice, name: e.target.value })}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel fontWeight="semibold">USERNAME</FormLabel>
                                <Input
                                    placeholder="Ingrese su username"
                                    type="text"
                                    onChange={(e) => setIndice({ ...indice, username: e.target.value })}
                                />
                            </FormControl>
                        </Stack>
                        <Stack
                            px={4}
                        >
                            <FormControl>
                                <FormLabel fontWeight="semibold">IMAGEN</FormLabel>
                                <Input
                                    placeholder="Ingrese la url de la imagen"
                                    type="text"
                                    onChange={(e) => setIndice({ ...indice, image: e.target.value })}
                                />
                            </FormControl>
                        </Stack>
                        <Stack spacing={2} direction={{ base: "column", lg: "row" }} justifyContent="space-between" px={4} py={2}>
                            <FormControl>
                                <FormLabel fontWeight="semibold">EMAIL</FormLabel>
                                <Input
                                    placeholder="Ingrese el email"
                                    type="email"
                                    onChange={(e) => setIndice({ ...indice, email: e.target.value })}
                                />
                                <FormHelperText textColor={'red.500'}>
                                    {
                                        indice?.email.includes("@") ? '' : indice?.email?.length > 0 ? 'El correo debe contener el caracter @' : ''
                                    }
                                </FormHelperText>
                            </FormControl>
                            <FormControl>
                                <FormLabel fontWeight="semibold">PASSWORD</FormLabel>
                                <InputGroup>
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        placeholder='Ingrese la contraseña'
                                        onChange={(e) => setIndice({ ...indice, password: e.target.value })}
                                    />
                                    <InputRightElement width="3rem">
                                        <Button h="1.75rem" color={'white'} bg="messenger.600" _hover={{ bg: 'messenger.700' }} size="sm" onClick={handleShowClick} >
                                            {showPassword ? <Icon as={ViewIcon} /> : <Icon as={ViewOffIcon} />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                <FormHelperText textColor={'red.500'}>
                                    {
                                        indice.password.length > 0 && indice.password.length < 6 ? 'debe tener al menos 6 caracteres' : ''
                                    }
                                </FormHelperText>
                            </FormControl>
                        </Stack>
                        <Stack spacing={2} direction={{ base: "column", lg: "row" }} justifyContent="space-between" px={4} py={2}>
                            <FormControl isRequired>
                                <FormLabel fontWeight="semibold">ROL USUARIO</FormLabel>
                                <Select
                                    onChange={(e) => setIndice({ ...indice, role: e.target.value })}
                                    placeholder="SELECCIONE ROL"
                                >
                                    <option value={'USER'}>USUARIO</option>
                                    <option value={'ADMIN'}>ADMINISTRADOR</option>
                                </Select>
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel fontWeight="semibold">ESTADO DEL USUARIO</FormLabel>
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
                        <Button borderRadius="none" colorScheme="red" _dark={{ bg: "red.500", color: "white", _hover: { bg: "red.600" } }} size="lg" mr={3} onClick={handleModalClose}>
                            CANCELAR
                        </Button>

                        <Button
                            colorScheme="messenger"
                            _dark={{ bg: "messenger.500", color: "white", _hover: { bg: "messenger.600" } }}
                            size="lg"
                            borderRadius="none"
                            mr={3}
                            onClick={handleSave}
                            isDisabled={indice.name === '' || indice.email === '' || indice.password === '' || indice.estado === ''}
                        >
                            GUARDAR
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
