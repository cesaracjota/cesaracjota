import { Box, Card, CardBody, CardHeader, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CardCertifications = ({ data }) => {

    const [isHovered, setIsHovered] = useState(false);

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
            borderRadius={'lg'}
            bg="white"
            borderWidth="1px"
            _dark={{
                bg: 'primary.1000',
                borderColor: 'none',
                _hover: {
                    borderColor: 'primary.200',
                    color: 'primary.200',
                    cursor: 'pointer'
                }
            }}
            borderColor="none"
            _hover={{
                borderColor: 'primary.200',
                color: 'primary.200',
                cursor: 'pointer'
            }}
            transition="all 0.3s ease-in-out"
        >
            <CardHeader
                as={Link}
                to={data?.link}
                target='_blank'
                position="relative"
                bg={data?.brand_color}
                w={'full'}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                cursor={'pointer'}
                borderTopRadius={'lg'}
                css={{
                    transition: "background-color 0.9s ease-in-out",
                    "&:hover": {
                        backgroundColor: data?.brand_color, // Reemplaza "NEW_COLOR" con el color deseado para el fondo en hover
                    },
                }}
            >
                <Box
                    w={'full'}
                    h={'full'}
                    justifyContent={'center'}
                    alignItems="center"
                    display={'flex'}
                    transition="opacity 0.5s ease-in-out"
                >
                    <Image
                        src={data?.logo}
                        w={'65px'}
                        h={'65px'}
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
                        bg={convertirHexATransparente(data?.brand_color, 0.65, 1)}
                        _dark={{
                            bg: convertirHexATransparente(data?.brand_color, 0.65, 1)
                        }}
                        zIndex={1}
                        transition="opacity 0.5s ease-in-out"
                        transitionDelay={'0.9'}
                        borderTopRadius={'lg'}
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
                            size="md"
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
                borderBottomRadius={'lg'}
                py={4}
            >
                <Stack
                    direction={'column'}
                    spacing={1}
                    _hover={{
                        color: 'primary.100',
                        textDecoration: 'none'
                    }}
                >
                    <Heading
                        as={Link}
                        to={data?.link}
                        target='_blank'
                        size={'md'}
                        fontWeight={'extrabold'}
                    >
                        {data?.title}
                    </Heading>
                    <Text
                        fontSize={'x-small'}
                        noOfLines={1}
                        textAlign={'center'}
                    >
                        {data?.description}
                    </Text>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default CardCertifications