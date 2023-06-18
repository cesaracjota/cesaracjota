import { Box, Card, CardBody, CardHeader, Heading, IconButton, Image as ImageChakra, Stack, Text, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ColorThief from "colorthief";
import { ModalPreviewFile } from './ModalPreviewFile';
import { BiLinkAlt } from 'react-icons/bi';

const CardCertifications = ({ data }) => {

    const [isHovered, setIsHovered] = useState(false);

    const [backgroundColor, setBackgroundColor] = useState("");
    const [darkenColorValue, setDarkenColorValue] = useState("");

    const { isOpen, onOpen, onClose } = useDisclosure();

    const resultLogo = data?.logo?.secure_url;

    const darkenColor = (rgbColor, amount) => {
        const [r, g, b] = rgbColor;
        const darkenedR = Math.floor(r * amount);
        const darkenedG = Math.floor(g * amount);
        const darkenedB = Math.floor(b * amount);
        return [darkenedR, darkenedG, darkenedB];
    };

    useEffect(() => {
        const colorThief = new ColorThief();
        const imagen = new Image();
        imagen.crossOrigin = 'Anonymous';
        imagen.src = resultLogo;
        imagen.onload = () => {
            const dominantColor = colorThief.getColor(imagen);
            const darkenedColor = darkenColor(dominantColor, 0.7); // Ajusta el valor de "0.7" según lo oscuro que desees el color
            const rgbColor = `rgb(${darkenedColor[0]}, ${darkenedColor[1]}, ${darkenedColor[2]})`;
            const r = dominantColor[0];
            const g = dominantColor[1];
            const b = dominantColor[2];
            const rgb = b | (g << 8) | (r << 16);
            const color = '#' + (0x1000000 + rgb).toString(16).slice(1);
            setDarkenColorValue(color);
            setBackgroundColor(rgbColor);
        };
    }, [resultLogo]);

    function convertirHexATransparente(hex, opacidad = 0.6, oscurecimiento = 0.2) {
        let r = parseInt(hex.slice(1, 3), 16),
            g = parseInt(hex.slice(3, 5), 16),
            b = parseInt(hex.slice(5, 7), 16);

        // Aplicar el oscurecimiento al color
        r = Math.round((1 - oscurecimiento) * r);
        g = Math.round((1 - oscurecimiento) * g);
        b = Math.round((1 - oscurecimiento) * b);

        return `rgba(${r}, ${g}, ${b}, ${opacidad})`;
    }

    return (
        <Card
            bg="white"
            borderWidth="1px"
            _dark={{
                bg: 'primary.1000',
                borderColor: 'none',
                _hover: {
                    borderColor: darkenColorValue,
                    cursor: 'pointer'
                }
            }}
            borderColor="none"
            _hover={{
                borderColor: darkenColorValue,
                cursor: 'pointer'
            }}
            transition="all 0.3s ease-in-out"
        >
            <CardHeader
                as={Link}
                to={data?.link}
                target='_blank'
                position="relative"
                bg={backgroundColor}
                w={'full'}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                cursor={'pointer'}
                borderTopRadius={'md'}
                css={{
                    transition: "background-color 0.9s ease-in-out",
                    "&:hover": {
                        backgroundColor: backgroundColor, // Reemplaza "NEW_COLOR" con el color deseado para el fondo en hover
                    },
                }}
                py={3}
            >
                <Box
                    w={'full'}
                    h={'full'}
                    justifyContent={'center'}
                    alignItems="center"
                    display={'flex'}
                    transition="opacity 0.5s ease-in-out"
                >
                    <ImageChakra
                        src={resultLogo}
                        w={'50px'}
                        h={'50px'}
                        objectFit={'scale-down'}
                        alignSelf={'center'}
                        objectPosition="center center"
                    />
                </Box>
                {isHovered && (
                    <Box
                        position="absolute"
                        top={0}
                        left={0}
                        height="100%"
                        width="100%"
                        bg={convertirHexATransparente(darkenColorValue, 0.65, 1)}
                        _dark={{
                            bg: convertirHexATransparente(darkenColorValue, 0.65, 1)
                        }}
                        zIndex={1}
                        transition="opacity 0.5s ease-in-out"
                        transitionDelay={'0.9'}
                        borderTopRadius={'md'}
                    />
                )}
                {isHovered && (
                    <Box
                        position="absolute"
                        top="50%"
                        left="50%"
                        textAlign="center"
                        zIndex={2}
                        transform={isHovered ? "translate(-50%, -50%)" : "translate(-50%, -80%)"}
                        transition="opacity 0.6s ease-in-out, transform 0.6s ease-in-out"
                        transitionDelay={'10.9'}
                    >
                        <Heading
                            color="white"
                            size="xs"
                            fontWeight={'extrabold'}
                            transition="opacity 0.5s ease-in-out"
                            transitionDelay={'0.9'}
                        >
                            {data?.hover_title}
                        </Heading>
                    </Box>
                )}
            </CardHeader>
            <CardBody
                textAlign="center"
                bg={'white'}
                _dark={{
                    color: 'white',
                    bg: 'primary.1000'
                }}
                borderBottomRadius={'md'}
                py={3}
            >
                <Stack
                    direction={'row'}
                    justifyContent={'space-between'}
                    spacing={1}
                >
                    <Stack
                        direction={'column'}
                        justifyContent={'space-between'}
                        spacing={1}
                    >
                        <Heading
                            as={Link}
                            to={data?.link}
                            target='_blank'
                            size={'sm'}
                            fontWeight={'extrabold'}
                            textAlign={'justify'}
                            _hover={{
                                color: darkenColorValue,
                                textDecoration: 'none'
                            }}
                        >
                            {data?.title}
                        </Heading>
                        <Text
                            fontSize={'x-small'}
                            noOfLines={1}
                            textAlign={'justify'}
                        >
                            {data?.description}
                        </Text>
                    </Stack>
                    {
                        data?.image?.secure_url ? (
                            <ModalPreviewFile open={isOpen} onOpen={onOpen} onClose={onClose} data={data} color={darkenColorValue} />              
                        ) : (
                            <IconButton
                                as={Link}
                                to={data?.link}
                                target='_blank'
                                variant='solid'
                                color={darkenColorValue}
                                onClick={onOpen}
                                aria-label='Ver certificado'
                                icon={<BiLinkAlt fontSize={'22px'} />}
                            />
                        )
                    }
                </Stack>
            </CardBody>
        </Card>
    )
}

export default CardCertifications