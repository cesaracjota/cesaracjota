import React, { useState } from 'react';
import {
    Button,
    FormControl,
    FormLabel,
    Icon,
    IconButton,
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
import { useDispatch, useSelector } from 'react-redux';
import { updateCertificado } from '../../../features/certificadoSlice';
import { MdEdit } from 'react-icons/md';
import { ModalPreviewFile } from './PreviewFile';

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
        logo: null,
        image: null,
        estado: '',
    }

    const [indice, setIndice] = useState(initialValues);
    const [isLoading, setIsLoading] = useState(false);
    const [previewLogo, setPreviewLogo] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const fileInputRef = React.useRef();

    const handleModalOpen = () => {
        setIsModalOpen(!isModalOpen)
        setIndice(row);
    }

    const handleModalClose = () => {
        setIsModalOpen(false)
        setIndice(initialValues)
        setPreviewLogo(null)
    }

    const handleSave = async () => {
        setIsLoading(true);
        try {
            await dispatch(updateCertificado(indice));
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
            <Modal isOpen={isModalOpen} onClose={handleModalClose} size="6xl">
                <ModalOverlay
                    bg="rgba(0,0,0,0.8)"
                    backdropFilter='auto'
                    backdropBlur='2px'
                />
                <ModalContent _dark={{ bg: "primary.900" }} borderRadius="2xl">
                    <ModalHeader textAlign="center">EDITAR CERTIFICADO</ModalHeader>
                    <ModalCloseButton size="lg" />
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
                                </FormControl>
                                <Image
                                    src={ indice?.logo?.secure_url || previewLogo || 'https://cdn.icon-icons.com/icons2/2529/PNG/512/img_filetype_icon_151817.png'}
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
                                            accept='application/pdf'
                                            ref={fileInputRef}
                                            onChange={handlePreviewImage}
                                        />
                                        {
                                            !indice?.image?.secure_url && (
                                                <InputRightElement mr={1}>
                                                    <ModalPreviewFile open={isOpen} onOpen={onOpen} onClose={onClose} file={indice.image} />
                                                </InputRightElement>
                                            )
                                        }
                                    </InputGroup>
                                </FormControl>
                                {
                                    indice?.image?.secure_url && (
                                        <Image
                                            src={indice?.image?.secure_url || previewLogo || 'https://cdn.icon-icons.com/icons2/2529/PNG/512/img_filetype_icon_151817.png'}
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
                                    )
                                }
                            </Stack>
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
                            <FormControl isRequired>
                                <FormLabel fontWeight="semibold">ESTADO</FormLabel>
                                <RadioGroup
                                    onChange={(e) => setIndice({ ...indice, estado: e })}
                                    defaultValue={ indice ? indice.estado : ""}
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
                            colorScheme="green"
                            _dark={{ bg: "green.500", color: "white", _hover: { bg: "green.600" } }}
                            size="lg"
                            isLoading={isLoading}
                            loadingText="Guardando..."
                            borderRadius="xl"
                            mr={3}
                            onClick={handleSave}
                            isDisabled={ indice.title === '' || indice.logo === '' }
                        >
                            ACTUALIZAR
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
