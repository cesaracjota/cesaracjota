import { Box, Flex, IconButton, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box position="fixed" w="100%" bg={colorMode === "light" ? "white" : "gray.800"} boxShadow="md" zIndex="999">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        px="6"
        py="3"
        maxW="1200px"
        mx="auto"
      >
        {/* Inserta tu logo aquí */}
        <Box>
          Mi Portafolio
        </Box>
        <Flex>
          {/* Inserta tus enlaces de navegación aquí */}
          <Box mx="3">Inicio</Box>
          <Box mx="3">Proyectos</Box>
          <Box mx="3">Contacto</Box>
          {/* Componente para cambiar de tema */}
          <IconButton
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            variant="ghost"
            aria-label="Toggle theme"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;