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

const THEMES = [
    { label: "Purple", value: "purple" },
    { label: "Teal", value: "teal" },
    { label: "Blue", value: "blue" },
];

const Configuracion = () => {

    const [isPublic, setIsPublic] = useState(true);
    const [allowComments, setAllowComments] = useState(true);
    const [autoplay, setAutoplay] = useState(true);
    const [volume, setVolume] = useState(50);
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box
            mx="auto"
            p="6"
            w="100%"
            borderWidth="1px"
            borderRadius="md"
            overflow="hidden"
            bg="white"
            shadow="sm"
            _dark={{
                bg: "primary.1000",
            }}
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
                    <Select>
                        {THEMES.map((t) => (
                            <option key={t.value} value={t.value}>
                                {t.label}
                            </option>
                        ))}
                    </Select>
                </FormControl>

                <Divider />
                <FormControl display="flex" alignItems="center">
                    <FormLabel htmlFor="switch" mb="0">
                        Modo oscuro
                    </FormLabel>
                    <Switch
                        id="switch"
                        isChecked={colorMode === "dark"}
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
