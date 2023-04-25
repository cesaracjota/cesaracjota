import { useState } from "react";
import {
    Box,
    Text,
    FormControl,
    FormLabel,
    Switch,
    Checkbox,
    Slider,
    Button,
    Stack,
    Divider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    useColorMode,
    Select,
} from "@chakra-ui/react";

const Configuracion = () => {

    const { colorMode, toggleColorMode } = useColorMode();

    const [isPublic, setIsPublic] = useState(true);
    const [allowComments, setAllowComments] = useState(true);
    const [autoplay, setAutoplay] = useState(true);
    const [volume, setVolume] = useState(50);

    return (
        <Box
            mx="auto"
            px="4"
            color={colorMode === "light" ? "gray.800" : "gray.50"}
        >
            <Text fontSize="2xl" fontWeight="bold" mb="6">
                Configuración de Portafolio
            </Text>
            <Stack spacing="4">
                <FormControl display="flex" alignItems="center">
                    <FormLabel htmlFor="public-switch" mb="0">
                        Portafolio público
                    </FormLabel>
                    <Switch
                        id="public-switch"
                        isChecked={isPublic}
                        onChange={() => setIsPublic(!isPublic)}
                        ml="auto"
                    />
                </FormControl>
                <FormControl display="flex" alignItems="center">
                    <FormLabel htmlFor="comments-checkbox" mb="0">
                        Permitir comentarios
                    </FormLabel>
                    <Checkbox
                        id="comments-checkbox"
                        isChecked={allowComments}
                        onChange={() => setAllowComments(!allowComments)}
                        ml="auto"
                    />
                </FormControl>
                <Divider />
                <FormControl display="flex" alignItems="center">
                    <FormLabel htmlFor="theme-select" mb="0">
                        Tema
                    </FormLabel>
                    <Select
                        id="theme-select"
                        value={colorMode}
                        onChange={(e) => toggleColorMode(e.target.value)}
                        ml="auto"
                        w="auto"
                    >
                        <option value="light">Claro</option>
                        <option value="dark">Oscuro</option>
                        <option value="purple">Morado</option>
                    </Select>
                </FormControl>

                <Divider />
                <FormControl display="flex" alignItems="center">
                    <FormLabel htmlFor="switch" mb="0">
                        Modo oscuro
                    </FormLabel>
                    <Switch
                        id="switch"
                        isChecked={ colorMode === "dark" }
                        onChange={toggleColorMode}
                        ml="auto"
                    />
                </FormControl>
                <Divider />
                <FormControl display="flex" alignItems="center">
                    <FormLabel htmlFor="autoplay-switch" mb="0">
                        Reproducción automática
                    </FormLabel>
                    <Switch
                        id="autoplay-switch"
                        isChecked={autoplay}
                        onChange={() => setAutoplay(!autoplay)}
                        ml="auto"
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Control de Volumen</FormLabel>
                    <Slider value={volume} onChange={(value) => setVolume(value)} max={100} min={0} step={1}>
                        <div>
                            <SliderTrack>
                                <SliderFilledTrack />
                            </SliderTrack>
                        </div>
                        <SliderThumb />
                    </Slider>
                </FormControl>
            </Stack>
            <Button mt="6" colorScheme="blue">
                Guardar
            </Button>
        </Box>
    );
};

export default Configuracion;
