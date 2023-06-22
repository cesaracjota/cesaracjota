import React, { useState } from 'react';
import {
    Button,
    FormControl,
    FormHelperText,
    FormLabel,
    Icon,
    IconButton,
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
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../../features/userSlice';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { MdEdit } from 'react-icons/md';

export const ModalEditarUsuario = ({ row }) => {

    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const initialValues = {
        _id: null,
        name: '',
        username: '',
        email: '',
        password: '',
        role: '',
        image: '',
        estado: ''
    }

    const [indice, setIndice] = useState(initialValues);

    const handleModalOpen = (row) => {
        setIsModalOpen(!isModalOpen);
        setIndice(row);
    }

    const handleModalClose = () => {
        setIsModalOpen(false)
        setIndice(initialValues)
    }

    const handleSave = () => {
        dispatch(updateUser(indice));
        setIsModalOpen(false)
        setIndice(initialValues)
    }

    const [showPassword, setShowPassword] = useState(false);
    const handleShowClick = () => setShowPassword(!showPassword);

    return (
        <>
            <IconButton
                icon={<Icon as={MdEdit} />}
                fontSize="2xl"
                size={'md'}
                rounded="xl"
                colorScheme="purple"
                color="white"
                variant={'solid'}
                _dark={{ color: "white", bg: "purple.500", _hover: { bg: "purple.700" } }}
                onClick={() => handleModalOpen(row)}
                isDisabled={user.usuario.role !== 'ADMIN'}
                ml={2}
            />
            <Modal isOpen={isModalOpen} onClose={handleModalClose} size="6xl" isCentered>
                <ModalOverlay 
                    bg="rgba(0,0,0,0.8)"
                    backdropFilter='auto'
                    backdropBlur='2px'
                />
                <ModalContent _dark={{ bg: "primary.900" }} borderRadius="2xl">
                    <ModalHeader textAlign="center">EDITAR USUARIO</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack spacing={2} direction={{ base: "column", lg: "row"}} justifyContent="space-between" p={4}>
                            <FormControl>
                                <FormLabel fontWeight="semibold">NOMBRES</FormLabel>
                                <Input
                                    placeholder="Ingrese los nombres"
                                    defaultValue={indice? indice.name : ''}
                                    type="text"
                                    onChange={(e) => setIndice({ ...indice, name: e.target.value })}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel fontWeight="semibold">USERNAME</FormLabel>
                                <Input
                                    placeholder="Ingrese su username"
                                    defaultValue={indice? indice.username : ''}
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
                                    defaultValue={indice? indice.image : ''}
                                    onChange={(e) => setIndice({ ...indice, image: e.target.value })}
                                />
                            </FormControl>
                        </Stack>
                        <Stack spacing={2} direction={{ base: "column", lg: "row"}} justifyContent="space-between" p={4}>
                            <FormControl>
                                <FormLabel fontWeight="semibold">EMAIL</FormLabel>
                                <Input
                                    placeholder="Ingrese el email"
                                    defaultValue={indice? indice.email : ''}
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
                                        type={ showPassword ? "text" : "password" }
                                        placeholder='Ingrese la nueva contraseña'
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
                        <Stack spacing={2} direction={{ base: "column", lg: "row"}} justifyContent="space-between" p={4}>
                            <FormControl isRequired>
                                <FormLabel fontWeight="semibold">ROL USUARIO</FormLabel>
                                <Select
                                    onChange={(e) => setIndice({ ...indice, role: e.target.value })}
                                    placeholder="SELECCIONE ROL"
                                    value={indice?.role}
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
                                    value={indice?.estado}
                                >
                                    <option value={'ACTIVO'}>ACTIVO</option>
                                    <option value={'INACTIVO'}>INACTIVO</option>
                                </Select>
                            </FormControl>
                        </Stack>
                    </ModalBody>
                    <ModalFooter>
                        <Button borderRadius="xl" colorScheme="red" _dark={{ bg: "red.500", color: "white", _hover: { bg: "red.600" } }} size="lg" mr={3} onClick={handleModalClose}>
                            CANCELAR
                        </Button>

                        <Button
                            colorScheme="messenger"
                            _dark={{ bg: "messenger.500", color: "white", _hover: { bg: "messenger.600" } }}
                            size="lg"
                            borderRadius="xl"
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
