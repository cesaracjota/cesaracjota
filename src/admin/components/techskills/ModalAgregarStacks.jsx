import React, { useState } from 'react';
import {
    Button,
    FormControl,
    FormHelperText,
    FormLabel,
    Icon,
    Image,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Radio,
    RadioGroup,
    Select,
    Stack,
    Textarea,
} from '@chakra-ui/react'
import { VscAdd } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import { LockIcon } from '@chakra-ui/icons';
import { createTechStack } from '../../../features/techstackSlice';

export const ModalAgregarStacks = () => {

    const dispatch = useDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const fileInputRef = React.useRef();

    const { user } = useSelector((state) => state.auth);

    const initialValues = {
        title: '',
        description: '',
        link: '',
        image: null,
        category: '',
        estado: 'ACTIVO',
    }

    const [indice, setIndice] = useState(initialValues);
    const [isLoading, setIsLoading] = useState(false);
    const [previewImage, setPreviewImage] = useState(null);

    const handleModalOpen = () => {
        setIsModalOpen(!isModalOpen)
    }

    const handleModalClose = () => {
        setIsModalOpen(false)
        setPreviewImage(null)
        setIndice(initialValues)
    }

    const handleSave = async () => {
        setIsLoading(true);
        try {
            await dispatch(createTechStack(indice));
            handleModalClose();
            setIndice(initialValues);
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    }

    const handlePreviewImage = (e) => {
        const file = e.target.files[0];
        setIndice({ ...indice, image: file })
        setPreviewImage(URL.createObjectURL(file));
    }

    const bytesForHuman = (bytes) => {

        let units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']

        let i = 0

        for (i; bytes > 1024; i++) {
            bytes /= 1024;
        }

        return bytes.toFixed(1) + ' ' + units[i]
    }

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
                    backdropBlur='4px'
                />
                <ModalContent _dark={{ bg: "primary.900" }} borderRadius="2xl">
                    <ModalHeader textAlign="center">AGREGAR NUEVO SKILL</ModalHeader>
                    <ModalCloseButton size={'lg'} />
                    <ModalBody>
                        <Stack mt={-4} spacing={2} direction={{ base: "column", lg: "row" }} justifyContent="space-between" px={4} py={2}>
                            <FormControl>
                                <FormLabel fontWeight="semibold">TITULO</FormLabel>
                                <Input
                                    placeholder="Ingrese el nombre de skill"
                                    type="text"
                                    onChange={(e) => setIndice({ ...indice, title: e.target.value })}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel fontWeight="semibold">CATEGORIA</FormLabel>
                                <Select
                                    onChange={(e) => setIndice({ ...indice, category: e.target.value })}
                                    placeholder="SELECCIONE CATEGORIA"
                                >
                                    <option value={'frontend'}>FRONTEND</option>
                                    <option value={'backend'}>BACKEND</option>
                                    <option value={'devops'}>DEVOPS</option>
                                    <option value={'mobile'}>MOBILE</option>
                                    <option value={'design'}>DESIGN</option>
                                    <option value={'others'}>OTROS</option>
                                </Select>
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
                        <Stack spacing={2} direction="row" px={4} py={2}>
                            <FormControl id="image" alignSelf={'center'}>
                                <FormLabel fontWeight="semibold">IMAGEN</FormLabel>
                                <Input
                                    type="file"
                                    accept="image/*"
                                    ref={fileInputRef}
                                    onChange={handlePreviewImage}
                                />
                                {
                                    indice?.image && (
                                        <>
                                            <FormHelperText fontSize="sm" fontWeight={'bold'} color="primary.100">Size: {bytesForHuman(indice?.image?.size)}</FormHelperText>
                                        </>
                                    )
                                }
                            </FormControl>
                            <Image
                                src={previewImage || 'https://cdn.icon-icons.com/icons2/2529/PNG/512/img_filetype_icon_151817.png'}
                                alt="preview"
                                borderRadius="xl"
                                objectFit="cover"
                                width="100%"
                                height="100%"
                                maxHeight="80px"
                                maxWidth="80px"
                                boxShadow={'base'}
                                alignSelf={'center'}
                            />
                        </Stack>
                        <Stack spacing={2} px={4} py={2}>
                            <FormControl>
                                <FormLabel fontWeight="semibold">SITIO WEB</FormLabel>
                                <Input
                                    placeholder="Ingrese el link de sus sitio web"
                                    type="text"
                                    onChange={(e) => setIndice({ ...indice, link: e.target.value })}
                                />
                            </FormControl>
                        </Stack>
                        <Stack spacing={2} direction={{ base: "column", lg: "row" }} justifyContent="space-between" px={4} py={2}>
                            <FormControl isRequired>
                                <FormLabel fontWeight="semibold">ESTADO</FormLabel>
                                <RadioGroup
                                    onChange={(e) => setIndice({ ...indice, estado: e })}
                                    defaultValue='ACTIVO'
                                >
                                    <Stack spacing={5} direction='row'>
                                        <Radio colorScheme='red' value={'INACTIVO'}>
                                            INACTIVO
                                        </Radio>
                                        <Radio colorScheme='green' value={'ACTIVO'} size={'lg'}>
                                            ACTIVO
                                        </Radio>
                                    </Stack>
                                </RadioGroup>
                            </FormControl>
                        </Stack>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="red" borderRadius="xl" _dark={{ bg: "red.500", color: "white", _hover: { bg: "red.600" } }} size="lg" mr={3} onClick={handleModalClose}>
                            CANCELAR
                        </Button>

                        <Button
                            bg="primary.100"
                            _hover={{
                                bg: "primary.300",
                            }}
                            color="white"
                            _dark={{ bg: "primary.100", color: "white", _hover: { bg: "primary.300" } }}
                            size="lg"
                            borderRadius="2xl"
                            isLoading={isLoading}
                            loadingText="Guardando..."
                            mr={3}
                            onClick={handleSave}
                            isDisabled={indice.title === '' || indice.category === '' || indice.estado === ''}
                        >
                            GUARDAR
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}