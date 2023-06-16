import {
    Button,
    FormControl,
    FormLabel,
    Heading,
    Image,
    Input,
    Stack,
    Text,
    Textarea
} from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import ContactLogo from '../../assets/img/contact.svg';
import { useDispatch, useSelector } from 'react-redux';
import { createMessage } from '../../features/mensajeSlice';
import { ToastChakra } from '../../helpers/toast';
import { t } from 'i18next';

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
                spacing={{
                    base: 0,
                    lg: 10
                }}
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
                        {t("contacts.title")}
                    </Heading>

                    <Stack spacing={2}>
                        <Text
                            color={'gray.800'}
                            _dark={{
                                color: 'gray.200'
                            }}
                            fontSize={'lg'}
                        >
                        {t("contacts.subtitle")}
                        </Text>
                    </Stack>
                </Stack>

                <Stack
                    spacing={{
                        base: 0,
                        lg: 6
                    }}
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
                            <Stack spacing={4}>
                                <FormControl isRequired>
                                    <FormLabel>
                                    {t("contacts.form.name")}
                                    </FormLabel>
                                        <Input
                                            ref={usernameRef}
                                            type='text'
                                            placeholder={t("contacts.ph.name")}
                                            _focus={{
                                                borderColor: 'primary.100',
                                                boxShadow: 'none',
                                            }}
                                            onChange={(e) => setIndice({ ...indice, nombres_usuario: e.target.value })}
                                        />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>
                                    {t("contacts.form.email")}
                                    </FormLabel>
                                    <Input
                                        ref={emailRef}
                                        type='email'
                                        placeholder={t("contacts.ph.email")}
                                        _focus={{
                                            borderColor: 'primary.100',
                                            boxShadow: 'none',
                                        }}
                                        onChange={(e) => setIndice({ ...indice, email: e.target.value })}
                                    />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>{t("contacts.form.phone_number")}</FormLabel>
                                    <Input
                                        ref={telefonoRef}
                                        type='tel'
                                        placeholder={t("contacts.ph.phone_number")}
                                        _focus={{
                                            borderColor: 'primary.100',
                                            boxShadow: 'none',
                                        }}
                                        onChange={(e) => setIndice({ ...indice, telefono: e.target.value })}
                                    />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>{t("contacts.form.message_subject")}</FormLabel>
                                    <Input
                                        ref={asuntoRef}
                                        type='text'
                                        onChange={(e) => setIndice({ ...indice, asunto_mensaje: e.target.value })}
                                        _focus={{
                                            borderColor: 'primary.100',
                                            boxShadow: 'none',
                                        }}
                                        placeholder={t("contacts.ph.message_subject")}
                                    />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>{t("contacts.form.message")}</FormLabel>
                                    <Textarea
                                        ref={messageRef}
                                        type='text'
                                        onChange={(e) => setIndice({ ...indice, mensaje: e.target.value })}
                                        _focus={{
                                            borderColor: 'primary.100',
                                            boxShadow: 'none',
                                        }}
                                        placeholder={t("contacts.ph.message")}
                                    />
                                </FormControl>
                                <Button
                                    type='submit'
                                    mt={6}
                                    colorScheme='purple'
                                    isLoading={isLoading ? true : false}
                                    loadingText={t("contacts.form.loadingText")}
                                    _dark={{
                                        bg: 'primary.100',
                                        _hover: {
                                            bg: 'primary.200',
                                        },
                                        color: '#FFF',
                                    }}
                                >
                                    {t("contacts.form.button_send")}
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