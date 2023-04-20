import { Box, Heading, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";

function Contact() {
    return (
        <Box p={8}>
            <Heading as="h2" size="xl" pb={4}>
                Contáctame
            </Heading>
            <Box maxW="sm">
                <FormControl id="name" isRequired>
                    <FormLabel>Nombre</FormLabel>
                    <Input type="text" placeholder="Nombre completo" />
                </FormControl>
                <FormControl id="email" isRequired mt={4}>
                    <FormLabel>Correo electrónico</FormLabel>
                    <Input type="email" placeholder="nombre@ejemplo.com" />
                </FormControl>
                <FormControl id="message" isRequired mt={4}>
                    <FormLabel>Mensaje</FormLabel>
                    <Textarea placeholder="Escribe tu mensaje aquí" />
                </FormControl>
                <Button type="submit" mt={4} colorScheme="blue">
                    Enviar
                </Button>
            </Box>
        </Box>
    );
}

export default Contact;
