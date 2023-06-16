import React, { useState } from 'react';
import {
    Button,
    FormControl,
    FormLabel,
    IconButton,
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
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { LockIcon } from '@chakra-ui/icons';
import { updateTechStack } from '../../../features/techstackSlice';
import { FiEdit2 } from 'react-icons/fi';

export const ModalEditarStacks = ({ row }) => {

    const dispatch = useDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const fileInputRef = React.useRef();

    const { user } = useSelector((state) => state.auth);

    const initialValues = {
        _id: null,
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
        setIsModalOpen(!isModalOpen);
        setIndice(row);
    }

    const handleModalClose = () => {
        setIsModalOpen(false)
        setPreviewImage(null)
        setIndice(initialValues)
    }

    const handleSave = async () => {
        setIsLoading(true);
        try {
            await dispatch(updateTechStack(indice)); 
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

    return (
        <>

            <IconButton
                colorScheme="purple"
                _dark={{ bg: "purple.500", color: "white", _hover: { bg: "purple.600" } }}
                aria-label="Agregar"
                icon={user.usuario.role !== 'ADMIN' ? <LockIcon/> : <FiEdit2/>}
                variant="solid"
                rounded="xl"
                fontSize="xl"
                onClick={() => handleModalOpen(row)}
                isDisabled={user.usuario.role !== 'ADMIN'}
                isTruncated={user.usuario.role !== 'ADMIN'}
            />
            <Modal isOpen={isModalOpen} onClose={handleModalClose} size="6xl">
                <ModalOverlay
                    bg="rgba(0,0,0,0.9)"
                    backdropFilter='auto'
                    backdropBlur='4px'
                />
                <ModalContent _dark={{ bg: "primary.900" }} borderRadius="2xl">
                    <ModalHeader textAlign="center">AGREGAR NUEVO SKILL</ModalHeader>
                    <ModalCloseButton size={'lg'}/>
                    <ModalBody>
                        <Stack mt={-4} spacing={2} direction={{ base: "column", lg: "row" }} justifyContent="space-between" px={4} py={2}>
                            <FormControl>
                                <FormLabel fontWeight="semibold">TITULO</FormLabel>
                                <Input
                                    placeholder="Ingrese el nombre de skill"
                                    type="text"
                                    onChange={(e) => setIndice({ ...indice, title: e.target.value })}
                                    defaultValue={indice ? indice.title : ""}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel fontWeight="semibold">CATEGORIA</FormLabel>
                                <Select
                                    onChange={(e) => setIndice({ ...indice, category: e.target.value })}
                                    placeholder="SELECCIONE CATEGORIA"
                                    defaultValue={indice ? indice.category : ""}
                                >
                                    <option value={'frontend'}>FRONTEND</option>
                                    <option value={'backend'}>BACKEND</option>
                                    <option value={'devops'}>DEVOPS</option>
                                    <option value={'mobile'}>MOBILE</option>
                                    <option value={'design'}>DESIGN</option>
                                    <option value={'others'}>OTHERS</option>
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
                                    defaultValue={indice ? indice.description : ""}
                                />
                            </FormControl>
                        </Stack>
                        <Stack spacing={4} direction="row" px={4} py={2}>
                            <FormControl id="image" alignSelf={'center'}>
                                <FormLabel fontWeight="semibold">IMAGEN</FormLabel>
                                <Input
                                    type="file"
                                    accept="image/*"
                                    ref={fileInputRef}
                                    onChange={handlePreviewImage}
                                />
                            </FormControl>
                            <Image
                                src={indice?.image?.secure_url || previewImage || 'https://cdn.icon-icons.com/icons2/2529/PNG/512/img_filetype_icon_151817.png'}
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
                        <Stack spacing={2} px={4}>
                            <FormControl>
                                <FormLabel fontWeight="semibold">SITIO WEB</FormLabel>
                                <Input
                                    placeholder="Ingrese el link de sus sitio web"
                                    type="text"
                                    onChange={(e) => setIndice({ ...indice, link: e.target.value })}
                                    defaultValue={indice ? indice.link : ""}
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
                            bg="green.500"
                            color="white"
                            _hover={{
                                bg: "green.600",
                            }}
                            _dark={{ bg: "green.500", color: "white", _hover: { bg: "green.600" } }}
                            size="lg"
                            borderRadius="2xl"
                            isLoading={isLoading}
                            loadingText="Guardando..."
                            mr={3}
                            onClick={handleSave}
                        >
                            ACTUALIZAR
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
