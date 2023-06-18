import React, { useState } from 'react';
import {
    Button,
    FormControl,
    FormHelperText,
    FormLabel,
    Icon,
    Image,
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
    Radio,
    RadioGroup,
    Stack,
    Textarea,
    useDisclosure,
} from '@chakra-ui/react'
import { VscAdd } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import { createCertificado } from '../../../features/certificadoSlice';
import { LockIcon } from '@chakra-ui/icons';
import { ModalPreviewFile } from './PreviewFile';

export const ModalAgregarCertificado = () => {

    const dispatch = useDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const { user } = useSelector((state) => state.auth);

    const initialValues = {
        title: '',
        hover_title: '',
        description: '',
        link: '',
        logo: null,
        image: null,
        estado: 'ACTIVO',
    }

    const [indice, setIndice] = useState(initialValues);
    const [isLoading, setIsLoading] = useState(false);
    const [previewLogo, setPreviewLogo] = useState(null);
    
    const fileInputRef = React.useRef();

    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleModalOpen = () => {
        setIsModalOpen(!isModalOpen)
    }

    const handleModalClose = () => {
        setIsModalOpen(false)
        setIndice(initialValues)
    }

    const handleSave = async () => {
        setIsLoading(true);
        try {
            await dispatch(createCertificado(indice));
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
    }

    const handlePreviewLogo = (e) => {
        const file = e.target.files[0];
        setIndice({ ...indice, logo: file })
        setPreviewLogo(URL.createObjectURL(file));
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
                leftIcon={<Icon as={user.usuario.role !== 'ADMIN' ? LockIcon : VscAdd} fontSize="2xl" />}
                variant="solid"
                borderRadius="xl"
                onClick={handleModalOpen}
                isDisabled={user.usuario.role !== 'ADMIN'}
            >
                Nuevo Registro
            </Button>
            <Modal isOpen={isModalOpen} onClose={handleModalClose} size="6xl">
                <ModalOverlay
                    bg="rgba(0,0,0,0.8)"
                    backdropFilter='auto'
                    backdropBlur='2px'
                />
                <ModalContent _dark={{ bg: "primary.900" }} borderRadius="2xl">
                    <ModalHeader textAlign="center">AGREGAR NUEVO CERTIFICADO</ModalHeader>
                    <ModalCloseButton size={'lg'} />
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
                        <Stack spacing={2} direction="row" px={4} py={2} justifyContent={'space-between'}>
                            <Stack w="full" direction={'row'}>
                                <FormControl id="logo" alignSelf={'center'}>
                                    <FormLabel fontWeight="semibold">LOGO INSTITUCIÓN</FormLabel>
                                    <Input
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={handlePreviewLogo}
                                        accept='image/*'
                                    />
                                    {
                                        indice?.logo && (
                                            <>
                                                <FormHelperText fontSize="sm" fontWeight={'bold'} color="primary.100">Size: {bytesForHuman(indice?.logo?.size)}</FormHelperText>
                                            </>
                                        )
                                    }
                                </FormControl>
                                <Image
                                    src={previewLogo || 'https://cdn.icon-icons.com/icons2/2529/PNG/512/img_filetype_icon_151817.png'}
                                    alt="preview"
                                    borderRadius="xl"
                                    objectFit="cover"
                                    width="100%"
                                    height="100%"
                                    maxHeight="100px"
                                    maxWidth="100px"
                                    boxShadow={'base'}
                                    alignSelf={'center'}
                                />
                            </Stack>
                            <Stack w="full" direction={'row'}>
                                <FormControl alignSelf={'center'}>
                                    <FormLabel fontWeight="semibold">CERTIFICADO</FormLabel>
                                    <InputGroup alignSelf={'center'}>
                                        <Input
                                            type="file"
                                            ref={fileInputRef}
                                            onChange={handlePreviewImage}
                                        />
                                        {
                                            indice?.image && (
                                                <InputRightElement mr={1}>
                                                    <ModalPreviewFile open={isOpen} onOpen={onOpen} onClose={onClose} file={indice.image} />
                                                </InputRightElement>
                                            )
                                        }
                                    </InputGroup>
                                </FormControl>
                            </Stack>
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
