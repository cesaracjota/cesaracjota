import {
    Button,
    FormControl,
    FormLabel,
    Heading,
    Image,
    Input,
    InputGroup,
    InputLeftElement,
    Stack,
    Text,
    Textarea
} from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import ContactLogo from '../../assets/img/contact.svg';
import { useDispatch, useSelector } from 'react-redux';
import { createMessage } from '../../features/mensajeSlice';
import { ToastChakra } from '../../helpers/toast';
import { EmailIcon, InfoIcon, PhoneIcon } from '@chakra-ui/icons';

const Contact = () => {

    const dispatch = useDispatch();

    const initialValues = {
        nombres_usuario: '',
        email: '',
        telefono: '',
        asunto_mensaje: '',
        mensaje: '',
    }

    const [indice, setIndice] = useState(initialValues);

    const { isError, message } = useSelector((state) => state.mensajes);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        if (isError) {
            ToastChakra('Error', message, 'error', 1500);
            console.log(message);
        }

    }, [isError, message])

    const usernameRef = useRef();
    const emailRef = useRef();
    const telefonoRef = useRef();
    const asuntoRef = useRef();
    const messageRef = useRef();

    const handleSave = (e) => {
        e.preventDefault();
        setIsLoading(true)
        dispatch(createMessage(indice)).then(() => {
            usernameRef.current.value = '';
            emailRef.current.value = '';
            telefonoRef.current.value = '';
            messageRef.current.value = '';
            asuntoRef.current.value = '';
            setIndice(initialValues);
            setTimeout(() => {
                setIsLoading(false);
            }, 1000)
        });
    }

    return (
        <>
            <Stack
                direction="column"
                spacing={10}
            >
                <Stack
                    spacing={0}
                >
                    <Heading
                        as="h1"
                        fontSize={{ base: '2xl', lg: '4xl' }}
                        fontWeight="extrabold"
                        letterSpacing="tight"
                        lineHeight="shorter"
                    >
                        Contact
                    </Heading>

                    <Stack spacing={2}>
                        <Text>
                            To request a quoute or want to meet up for coffee, contact me directly or fill out the form and I will get back to you soon.
                        </Text>
                    </Stack>
                </Stack>

                <Stack
                    spacing={6}
                    direction={{
                        base: 'column',
                        lg: 'row'
                    }}
                    width="full"
                    justifyContent={'space-between'}
                >
                    <Image
                        alt="Contact Us"
                        src={ContactLogo}
                        boxSize={'500'}
                        alignSelf={'center'}
                    />
                    <Stack spacing={2} w="full">
                        <form onSubmit={handleSave}>
                            <Stack spacing={2}>
                                <FormControl isRequired>
                                    <FormLabel>
                                        Your Name
                                    </FormLabel>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents='none'
                                            children={<InfoIcon color='purple.600' />}
                                        />
                                        <Input
                                            ref={usernameRef}
                                            type='text'
                                            placeholder='complete name'
                                            onChange={(e) => setIndice({ ...indice, nombres_usuario: e.target.value })}
                                        />
                                    </InputGroup>
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>
                                        Your Email
                                    </FormLabel>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents='none'
                                            children={<EmailIcon color='purple.600' />}
                                        />
                                        <Input
                                            ref={emailRef}
                                            type='email'
                                            placeholder='email include @'
                                            onChange={(e) => setIndice({ ...indice, email: e.target.value })}
                                        />
                                    </InputGroup>
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Phone Number</FormLabel>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents='none'
                                            children={<PhoneIcon color='purple.600' />}
                                        />
                                        <Input
                                            ref={telefonoRef}
                                            type='tel'
                                            placeholder='+(code) Phone number'
                                            onChange={(e) => setIndice({ ...indice, telefono: e.target.value })}
                                        />
                                    </InputGroup>
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Message Subject</FormLabel>
                                    <Input
                                        ref={asuntoRef}
                                        type='text'
                                        onChange={(e) => setIndice({ ...indice, asunto_mensaje: e.target.value })}
                                        placeholder='type the subject of the message here...'
                                    />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Your Message</FormLabel>
                                    <Textarea
                                        ref={messageRef}
                                        type='text'
                                        onChange={(e) => setIndice({ ...indice, mensaje: e.target.value })}
                                        placeholder='type your message here...'
                                    />
                                </FormControl>
                                <Button
                                    type='submit'
                                    mt={6}
                                    colorScheme='purple'
                                    isLoading={isLoading ? true : false}
                                    loadingText="Enviando Mensaje..."
                                    _dark={{
                                        bg: 'primary.100',
                                        _hover: {
                                            bg: 'primary.200',
                                        },
                                        color: '#FFF',
                                    }}
                                >
                                    Send Message
                                </Button>
                            </Stack>
                        </form>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}

export default Contact;