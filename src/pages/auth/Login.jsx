import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Text,
    Checkbox,
    HStack,
    Flex,
    Image,
    Link,
    Icon,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    useColorModeValue,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { login, reset } from '../../features/authSlice';
import { ToastChakra } from '../../helpers/toast';
import Logo from '../../assets/img/logo.svg';
import { FaRegUser } from 'react-icons/fa';
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { FiLock } from 'react-icons/fi';
// import { Loading } from '../../components/configuration/Loading';
// import { Spinner } from 'react-loading-io/dist/Spinner';

const LoginPage = () => {

    const bgAuth = useColorModeValue('gray.50', '#131516');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);
    const { ROLE, isLoading, isError, isSuccess, message } = useSelector(state => state.auth);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {

        if (isError) {
            ToastChakra('Error', message, 'error', 1500, 'top-right');
        }

        dispatch(reset());

    }, [dispatch, isSuccess, isError, message, navigate, ROLE]);


    const correoUsuario = window.localStorage.getItem('usuario_correo');

    const handleLogin = (e) => {
        e.preventDefault();
        const userData = {
            email,
            password,
        };
        if (checked === true) {
            window.localStorage.setItem('usuario_correo', userData.email);
        } else {
            window.localStorage.removeItem('usuario_correo');
        }
        dispatch(login(userData)).then(() => {
            navigate('/admin/dashboard');
        })
    };

    const [showPassword, setShowPassword] = useState(false);
    const handleShowClick = () => setShowPassword(!showPassword);

    return (
        <form onSubmit={handleLogin}>
            <HStack display="flex" justify={'center'} w={'full'} h={'100vh'} bg={bgAuth} py={{ base: 14, lg: 16 }}>
                <Flex w={{ base: 450, md: 500, lg: 550 }} h="full" alignSelf={'center'}>
                    <Box borderWidth={1} w="full" h="full" px={{ base: 8, md: 10, lg: 12 }} bg="white" _dark={{ bg: 'primary.900' }} alignItems={'center'} justifyContent={'center'} borderRadius="lg" boxShadow={'base'}>
                        <Stack w="full" h="full" spacing={4} alignItems="center" justifyContent="center">
                            <Image src={Logo} w={20} />
                            <Heading textAlign={'center'} fontSize="xl" fontWeight="bold" mt={2}>
                                Login - Admin
                            </Heading>
                            <FormControl id="email">
                                <FormLabel mt={4}>Correo Electrónico</FormLabel>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        color="gray.500"
                                        _dark={{ color: 'gray.400' }}
                                        children={<FaRegUser color="gray.500" fontSize={18} />}
                                    />
                                    <Input
                                        type="email"
                                        value={correoUsuario ? correoUsuario : email}
                                        placeholder='Ingrese su correo'
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </InputGroup>
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Password</FormLabel>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        color="gray.500"
                                        _dark={{ color: 'gray.400' }}
                                        children={<FiLock color="gray.500" fontSize={20} />}
                                    />
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        placeholder='Ingrese su contraseña'
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <InputRightElement width="3rem">
                                        <Button h="1.75rem" color={'white'} bg="primary.100" _hover={{ bg: 'primary.100' }} size="sm" onClick={handleShowClick} >
                                            {showPassword ? <Icon as={ViewIcon} /> : <Icon as={ViewOffIcon} />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <Stack direction="row" align={'start'} justifyContent="space-between" w="full" fontSize={'sm'}>
                                <Checkbox
                                    defaultChecked={!correoUsuario ? false : true}
                                    value={checked}
                                    onChange={(e) => setChecked(e.target.checked)}
                                    isDisabled={correoUsuario ? true : false}
                                    colorScheme='purple'
                                >
                                    Recuerdame
                                </Checkbox>
                                <Link as={NavLink} to="#" color='primary.100' _hover={{ textDecoration: 'none' }}>
                                    ¿Olvidó su contraseña?
                                </Link>
                            </Stack>
                            <FormControl>
                                <Button
                                    w="full"
                                    bg={'primary.100'}
                                    color={'white'}
                                    _hover={{ bg: 'primary.200' }}
                                    isLoading={isLoading ? true : false}
                                    loadingText={'Iniciando Sesión...'}
                                    _dark={{
                                        bg: "primary.100",
                                        color: "white",
                                        _hover: {
                                            bg: "primary.200"
                                        }
                                    }}
                                    type="submit"
                                    isDisabled={password === '' || email === ''}
                                >
                                    Iniciar Sesión
                                </Button>
                            </FormControl>
                            <Heading fontSize="sm" color="black" _dark={{ color: 'white' }}>
                                ¿No tiene una cuenta? <Text as={NavLink} to="/" color="primary.100" _dark={{ color: 'primary.100' }} _hover={{ color: "purple.800", fontWeight: 'bold' }}>Regrese</Text>
                            </Heading>
                        </Stack>
                    </Box>
                </Flex>
            </HStack>
        </form>
    )
};

export default LoginPage;
