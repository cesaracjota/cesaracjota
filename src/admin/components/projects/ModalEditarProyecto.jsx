import React, { useState } from 'react';
import {
    Button,
    FormControl,
    FormLabel,
    Icon,
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
    Stack,
    Textarea,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { MdEdit } from 'react-icons/md';
import { Select } from "chakra-react-select";
import { updateProject } from '../../../features/projectSlice';
// import { ModalPreviewFile } from './PreviewFile';

export const ModalEditarProyecto = ({ row }) => {

    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const initialValues = {
        _id: null,
        title: '',
        description: '',
        url: '',
        image: null,
        topics: [],
        authors: [],
        isFeatured: false,
        estado: 'ACTIVO',
    }

    const [indice, setIndice] = useState(initialValues);
    const [isLoading, setIsLoading] = useState(false);
    const [previewImage, setPreviewImage] = useState(null);
    const [autores, setAutores] = useState([]);
    const [inputAutorValue, setInputAutorValue] = useState('');
    const [topics, setTopis] = useState([]);
    const [inputTopicValue, setInputTopicValue] = useState('');

    const fileInputRef = React.useRef();

    const handleModalOpen = () => {
        setIsModalOpen(!isModalOpen)
        setIndice(row);
    }

    const handleModalClose = () => {
        setIsModalOpen(false)
        setIndice(initialValues)
        setAutores([])
        setInputAutorValue('')
        setTopis([])
        setInputTopicValue('')
    }

    const handleSave = async () => {
        setIsLoading(true);
        try {
            await dispatch(updateProject(indice));
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
        setPreviewImage(URL.createObjectURL(file))
    }


    const handleSelectAutores = (selectedOptions) => {
        const selectedAutores = selectedOptions.map(option => option.value);
        setAutores(selectedAutores);
        setIndice({ ...indice, authors: selectedAutores })
    };

    const handleSelectTopics = (selectedOptions) => {
        const selectedTopics = selectedOptions.map(option => option.value);
        setTopis(selectedTopics);
        setIndice({ ...indice, topics: selectedTopics })
    }

    const handleInputAutorChange = (value) => {
        setInputAutorValue(value);
    };

    const handleInputTopicChange = (value) => {
        setInputTopicValue(value);
    }

    const handleInputConfirmAutor = () => {
        if (inputAutorValue && !autores.includes(inputAutorValue)) {
            setAutores([...autores, inputAutorValue]);
            setIndice({ ...indice, authors: [...autores, inputAutorValue] })
        }
        setInputAutorValue('');
    };

    const handleInputConfirmTopic = () => {
        if (inputTopicValue && !topics.includes(inputTopicValue)) {
            setTopis([...topics, inputTopicValue]);
            setIndice({ ...indice, topics: [...topics, inputTopicValue] })
        }
        setInputTopicValue('');
    }

    const opcionesAutores = indice.authors.map((autor) => ({ value: autor, label: `@${autor}` }));
    const opcionesTopics = indice.topics.map((topic) => ({ value: topic, label: `#${topic}` }));

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
            <Modal isOpen={isModalOpen} onClose={handleModalClose} size="8xl">
                <ModalOverlay
                    bg="rgba(0,0,0,0.8)"
                    backdropFilter='auto'
                    backdropBlur='2px'
                />
                <ModalContent _dark={{ bg: "primary.900" }} borderRadius="2xl">
                    <ModalHeader textAlign="center">EDITAR CERTIFICADO</ModalHeader>
                    <ModalCloseButton size="lg" />
                    <ModalBody>
                    <Stack spacing={2} mt={-4} direction="row" px={4} py={2} justifyContent={'space-around'} w="full">
                            <Stack spacing={2} direction={"column"} justifyContent={'space-between'} w="full" alignSelf={'center'}>
                                <FormControl>
                                    <FormLabel fontWeight="semibold">TITULO DEL PROYECTO</FormLabel>
                                    <Input
                                        placeholder="Ingrese el titulo del proyecto"
                                        type="text"
                                        defaultValue={indice ? indice.title : ''}
                                        onChange={(e) => setIndice({ ...indice, title: e.target.value })}
                                    />
                                </FormControl>
                                <FormControl>
                                    <FormLabel fontWeight="semibold">DESCRIPCIÓN</FormLabel>
                                    <Textarea
                                        placeholder="Ingrese la descripcion del proyecto"
                                        type="text"
                                        defaultValue={indice ? indice.description : ''}
                                        rows={2}
                                        onChange={(e) => setIndice({ ...indice, description: e.target.value })}
                                    />
                                </FormControl>
                            </Stack>
                            <Stack direction={'column'} w="full" alignSelf={'center'}>
                                <Image
                                    src={indice?.image?.secure_url || previewImage || 'https://cpitech.io/_nuxt/img/software-development-intro-bg.b4f0ca5.jpg'}
                                    alt="preview"
                                    borderRadius="xl"
                                    objectFit="cover"
                                    width="100%"
                                    height="100%"
                                    maxHeight="94px"
                                    boxShadow={'base'}
                                    alignSelf={'center'}
                                />
                                <FormControl id="logo" alignSelf={'center'}>
                                    <FormLabel fontWeight="semibold">IMAGEN</FormLabel>
                                    <Input
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={handlePreviewImage}
                                        accept='image/*'
                                    />
                                </FormControl>
                            </Stack>
                        </Stack>
                        <Stack spacing={2} px={4} py={2}>
                            <FormControl>
                                <FormLabel fontWeight="semibold">URL DEL PROYECTO</FormLabel>
                                <Input
                                    placeholder="Ingrese la url del proyecto"
                                    defaultValue={indice ? indice.url : ''}
                                    type="text"
                                    onChange={(e) => setIndice({ ...indice, url: e.target.value })}
                                />
                            </FormControl>
                        </Stack>
                        <Stack spacing={2} direction={{ base: "column", lg: "row" }} justifyContent="space-between" px={4} py={2}>
                            <FormControl>
                                <FormLabel fontWeight="semibold">AUTORES</FormLabel>
                                <Select
                                    placeholder="Agregue sus usuarios de github"
                                    isMulti
                                    value={opcionesAutores}
                                    options={opcionesAutores} // asegúrate de tener el array opcionesAutores con las opciones disponibles
                                    onChange={handleSelectAutores}
                                    inputValue={inputAutorValue}
                                    isClearable
                                    onInputChange={handleInputAutorChange}
                                    onKeyDown={(event) => {
                                        if (event.key === 'Enter') {
                                        handleInputConfirmAutor();
                                        }
                                    }}
                                    onBlur={handleInputConfirmAutor}
                                    menuIsOpen={false}
                                    backspaceRemovesValue
                                    components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel fontWeight="semibold">TOPICS</FormLabel>
                                <Select
                                    placeholder="Agregue topics de lenguajes con un enter"
                                    isMulti
                                    value={opcionesTopics}
                                    defaultInputValue={opcionesTopics}
                                    onChange={handleSelectTopics}
                                    inputValue={inputTopicValue}
                                    isClearable
                                    onInputChange={handleInputTopicChange}
                                    onKeyDown={(event) => {
                                        if (event.key === 'Enter') {
                                            handleInputConfirmTopic();
                                        }
                                    }}
                                    onBlur={handleInputConfirmTopic}
                                    menuIsOpen={false}
                                    backspaceRemovesValue
                                    components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
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
                            <FormControl>
                                <FormLabel fontWeight="semibold">FEATURED</FormLabel>
                                <RadioGroup
                                    onChange={(e) => setIndice({ ...indice, isFeatured: e === 'true' })}
                                    defaultValue={indice.isFeatured.toString()}
                                >
                                    <Stack spacing={5} direction='row'>
                                        <Radio colorScheme='red' value={false.toString()}>
                                            NO
                                        </Radio>
                                        <Radio colorScheme='green' value={true.toString()} size={'lg'}>
                                            SI
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
