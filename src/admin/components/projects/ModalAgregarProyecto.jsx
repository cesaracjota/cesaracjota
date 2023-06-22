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
    Stack,
    Textarea,
} from '@chakra-ui/react'
import { VscAdd } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import { LockIcon } from '@chakra-ui/icons';
import { createProject } from '../../../features/projectSlice';
import { Select } from "chakra-react-select";

export const ModalAgregarProyecto = () => {

    const dispatch = useDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const { user } = useSelector((state) => state.auth);

    const initialValues = {
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
    const [previewLogo, setPreviewLogo] = useState(null);
    const [autores, setAutores] = useState([]);
    const [inputAutorValue, setInputAutorValue] = useState('');
    const [topics, setTopis] = useState([]);
    const [inputTopicValue, setInputTopicValue] = useState('');

    const fileInputRef = React.useRef();

    const handleModalOpen = () => {
        setIsModalOpen(!isModalOpen)
    }

    const handleModalClose = () => {
        setIsModalOpen(false)
        setIndice(initialValues)
        setPreviewLogo(null)
        setAutores([])
        setInputAutorValue('')
        setTopis([])
        setInputTopicValue('')
    }

    const handleSave = async () => {
        setIsLoading(true);
        try {
            await dispatch(createProject(indice));
            handleModalClose();
            setIndice(initialValues);
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    }

    const handleChangeImage = (e) => {
        const file = e.target.files[0];
        setIndice({ ...indice, image: file })
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

    const opcionesAutores = autores.map((autor) => ({ value: autor, label: `@${autor}` }));
    const opcionesTopics = topics.map((topic) => ({ value: topic, label: `#${topic}` }));

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
            <Modal isOpen={isModalOpen} onClose={handleModalClose} size="8xl">
                <ModalOverlay
                    bg="rgba(0,0,0,0.8)"
                    backdropFilter='auto'
                    backdropBlur='2px'
                />
                <ModalContent _dark={{ bg: "primary.900" }} borderRadius="2xl">
                    <ModalHeader textAlign="center">AGREGAR NUEVO REGISTRO</ModalHeader>
                    <ModalCloseButton size={'lg'} />
                    <ModalBody>
                        <Stack spacing={2} mt={-4} direction="row" px={4} py={2} justifyContent={'space-around'} w="full">
                            <Stack spacing={2} direction={"column"} justifyContent={'space-between'} w="full" alignSelf={'center'}>
                                <FormControl>
                                    <FormLabel fontWeight="semibold">TITULO DEL PROYECTO</FormLabel>
                                    <Input
                                        placeholder="Ingrese el titulo del proyecto"
                                        type="text"
                                        onChange={(e) => setIndice({ ...indice, title: e.target.value })}
                                    />
                                </FormControl>
                                <FormControl>
                                    <FormLabel fontWeight="semibold">DESCRIPCIÓN</FormLabel>
                                    <Textarea
                                        placeholder="Ingrese la descripcion del proyecto"
                                        type="text"
                                        rows={2}
                                        onChange={(e) => setIndice({ ...indice, description: e.target.value })}
                                    />
                                </FormControl>
                            </Stack>
                            <Stack direction={'column'} w="full" alignSelf={'center'}>
                                <Image
                                    src={previewLogo || 'https://cpitech.io/_nuxt/img/software-development-intro-bg.b4f0ca5.jpg'}
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
                                        onChange={handleChangeImage}
                                        accept='image/*'
                                    />
                                    {
                                        indice?.image && (
                                            <>
                                                <FormHelperText fontSize="sm" fontWeight={'bold'} color="primary.100">Size: {bytesForHuman(indice?.image?.size)}</FormHelperText>
                                            </>
                                        )
                                    }
                                </FormControl>
                            </Stack>
                        </Stack>
                        <Stack spacing={2} px={4} py={2}>
                            <FormControl>
                                <FormLabel fontWeight="semibold">URL DEL PROYECTO</FormLabel>
                                <Input
                                    placeholder="Ingrese la url del proyecto"
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
                                    defaultInputValue={opcionesAutores}
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
                            <FormControl>
                                <FormLabel fontWeight="semibold">FEATURED</FormLabel>
                                <RadioGroup
                                    onChange={(e) => setIndice({ ...indice, isFeatured: e === 'true' })}
                                    defaultValue={false.toString()}
                                >
                                    <Stack spacing={5} direction='row'>
                                        <Radio colorScheme='red' value={false.toString()}>
                                            INACTIVO
                                        </Radio>
                                        <Radio colorScheme='green' value={true.toString()} size={'lg'}>
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
                            isDisabled={indice.title === '' || indice.description === '' || indice.estado === ''}
                        >
                            GUARDAR
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
