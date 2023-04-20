import { Box, Heading, Text } from "@chakra-ui/react";

function AboutMe() {
    return (
        <Box p={8}>
            <Heading as="h2" size="xl" pb={4}>
                Sobre Mí
            </Heading>
            <Text fontSize="lg">
                ¡Hola! Soy [nombre], un desarrollador web apasionado que disfruta creando soluciones
                digitales creativas y efectivas. Me encanta aprender nuevas tecnologías y mejorar mis habilidades
                como desarrollador. Además, soy una persona amante de la música y un entusiasta de la fotografía.
            </Text>
        </Box>
    );
}

export default AboutMe;