import { Box, Container, ButtonGroup, IconButton, Stack, Text, Image, Divider, SimpleGrid, List, ListItem, Heading } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import LOGO from '../../assets/img/logo.svg';
import { Link } from 'react-router-dom';
import "@fontsource/fira-sans-condensed";

export const Footer = (props) => {
    return (
        <Box as="footer" role="contentinfo" bg="white" _dark={{ bg: 'primary.1000', color: 'gray.100' }} fontFamily={`"Fira Sans Condensed", sans-serif`} {...props}>
            <Container
                maxW={'8xl'}
                py={{
                    base: '4',
                    lg: 8,
                }}
            >
                <Stack justifyContent={'stretch'} direction={{ base: "column", lg: "row" }} align="center" spacing={{ base: 5, lg: 10 }}>
                    <Stack direction={{ base: 'column', lg: 'row' }} alignSelf={'center'} justifyContent={'center'} alignItems={'center'} spacing={0}>
                        <Image src={LOGO} w='full' h='full' boxSize={'16'} textAlign={'center'} alt={'Agyl Academy'} />
                        <Heading fontSize="xl" as="h1" fontWeight={'black'} alignSelf={'center'}>AGYL <span style={{ fontWeight: 'normal', fontSize: '18px'}}>academy</span></Heading>
                    </Stack>
                    <Divider display={{ base: 'flex', lg: 'none' }} />
                    <Divider display={{ base: 'none', lg: 'flex' }} orientation='vertical' h={40} />
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={'20px'} justifyContent={'space-between'} w="full" textAlign={{ base: 'center', lg: 'justify' }}>
                        <Box>
                            <Text fontSize="md" fontWeight={'bold'}>
                                Acerca de la empresa
                            </Text>
                            <List fontSize={'sm'} spacing={2} mt={4} textColor="gray.600">
                                <ListItem _hover={{ textColor: 'primary.100' }}>
                                    <Link>¿Qué es Agyl Academy?</Link>
                                </ListItem>
                                <ListItem _hover={{ textColor: 'primary.100' }}>
                                    <Link>Los Profesores</Link>
                                </ListItem>
                                <ListItem _hover={{ textColor: 'primary.100' }}>
                                    <Link>Nuestra identidad visual</Link>
                                </ListItem>
                                <ListItem _hover={{ textColor: 'primary.100' }}>
                                    <Link>Enunciado de misión</Link>
                                </ListItem>
                                <ListItem _hover={{ textColor: 'primary.100' }}>
                                    <Link>Marca y logotipo</Link>
                                </ListItem>
                                <ListItem _hover={{ textColor: 'primary.100' }}>
                                    <Link>Cultura</Link>
                                </ListItem>
                            </List>
                        </Box>
                        <Box>
                            <Text fontSize="md" fontWeight={'bold'}>
                                Conecta con Agyl Academy
                            </Text>
                            <List fontSize={'sm'} spacing={2} mt={4} textColor="gray.600">
                                <ListItem _hover={{ textColor: 'primary.100' }}>
                                    <Link>Soporte al cliente</Link>
                                </ListItem>
                                <ListItem _hover={{ textColor: 'primary.100' }}>
                                    <Link>Política de privacidad</Link>
                                </ListItem>
                                <ListItem _hover={{ textColor: 'primary.100' }}>
                                    <Link>Terminos y condiciones</Link>
                                </ListItem>
                                <ListItem _hover={{ textColor: 'primary.100' }}>
                                    <Link>Política de reembolsos</Link>
                                </ListItem>
                                <ListItem _hover={{ textColor: 'primary.100' }}>
                                    <Link>Servicios para colegios y universidades</Link>
                                </ListItem>
                            </List>
                        </Box>
                        <Box>
                            <Text fontSize="md" fontWeight={'bold'}>
                                Nuestros productos
                            </Text>
                            <List fontSize={'sm'} spacing={2} mt={4} textColor="gray.600">
                                <ListItem _hover={{ textColor: 'primary.100' }}>
                                    <Link>Servicios para empresas</Link>
                                </ListItem>
                                <ListItem _hover={{ textColor: 'primary.100' }}>
                                    <Link>Canjea cupones</Link>
                                </ListItem>
                                <ListItem _hover={{ textColor: 'primary.100' }}>
                                    <Link>Regala cursos</Link>
                                </ListItem>
                                <ListItem _hover={{ textColor: 'primary.100' }}>
                                    <Link>Consigue empleo con Turing</Link>
                                </ListItem>
                                <ListItem _hover={{ textColor: 'primary.100' }}>
                                    <Link>Sube a premium</Link>
                                </ListItem>
                            </List>
                        </Box>
                        <Box>
                            <Text fontSize="md" fontWeight={'bold'}>
                                Recursos gratis
                            </Text>
                            <List fontSize={'sm'} spacing={2} mt={4} textColor="gray.600">
                                <ListItem _hover={{ textColor: 'primary.100' }}>
                                    <Link>Cursos gratis</Link>
                                </ListItem>
                                <ListItem _hover={{ textColor: 'primary.100' }}>
                                    <Link>Blog</Link>
                                </ListItem>
                                <ListItem _hover={{ textColor: 'primary.100' }}>
                                    <Link>Conferencias</Link>
                                </ListItem>
                                <ListItem _hover={{ textColor: 'primary.100' }}>
                                    <Link>Comunidad</Link>
                                </ListItem>
                                <ListItem _hover={{ textColor: 'primary.100' }}>
                                    <Link>Todos conectados</Link>
                                </ListItem>
                                <ListItem _hover={{ textColor: 'primary.100' }}>
                                    <Link>Firmas de correo</Link>
                                </ListItem>
                            </List>
                        </Box>
                    </SimpleGrid>
                </Stack>
                <Divider my={8}/>
                <Stack justify="space-between" direction={{ base: "column", lg: "row" }} align="center">
                    <Text fontSize="sm" color="subtle">
                        &copy; {new Date().getFullYear()} AgylCode, Inc. All rights reserved.
                    </Text>
                    <ButtonGroup>
                        <IconButton
                            as="a"
                            href="#"
                            aria-label="Youtube"
                            icon={<FaYoutube fontSize="1.6rem" />}
                            colorScheme='red'
                            variant="ghost"
                            size="lg"
                        />
                        <IconButton
                            as="a"
                            href="#"
                            aria-label="Instagram"
                            icon={<FaInstagram fontSize="1.6rem" />}
                            colorScheme='purple'
                            variant="ghost"
                            size="lg"
                        />
                        <IconButton
                            as="a"
                            href="#"
                            aria-label="Facebook"
                            icon={<FaFacebook fontSize="1.6rem" />}
                            colorScheme='facebook'
                            variant="ghost"
                            size="lg"
                        />
                        <IconButton
                            as="a"
                            href="#"
                            aria-label="LinkedIn"
                            icon={<FaLinkedin fontSize="1.6rem" />}
                            colorScheme='linkedin'
                            variant="ghost"
                            size="lg"
                        />
                        <IconButton
                            as="a"
                            href="#"
                            aria-label="Twitter"
                            icon={<FaTwitter fontSize="1.6rem" />}
                            colorScheme='twitter'
                            variant="ghost"
                            size="lg"
                        />
                        <IconButton
                            as="a"
                            href="#"
                            aria-label="WhatsApp"
                            icon={<FaWhatsapp fontSize="1.6rem" />}
                            colorScheme='whatsapp'
                            variant="ghost"
                            size="lg"
                        />
                    </ButtonGroup>
                </Stack>
            </Container>
        </Box>
    )
}