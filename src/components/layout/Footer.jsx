import { Box, Container, ButtonGroup, IconButton, Stack, Text, Divider } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import "@fontsource/fira-sans-condensed";

export const Footer = (props) => {
    return (
        <Box as="footer" role="contentinfo" bg="white" _dark={{ bg: 'primary.900', color: 'gray.100' }} fontFamily={`"Fira Sans Condensed", sans-serif`} {...props}>
            <Container
                maxW={'4xl'}
                py={{
                    base: "5rem",
                    lg: 4,
                }}
            >
                <Divider mb={6}/>
                <Stack justify="space-between" direction={{ base: "column", lg: "row" }} align="center">
                    <Text fontSize="sm" color="subtle">
                        &copy; {new Date().getFullYear()} CesarAcjota, Inc. All rights reserved.
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
};