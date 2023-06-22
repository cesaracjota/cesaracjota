import { Box, Heading, Image as ImageChakra, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ColorThief from "colorthief";
import IMGPreview from '../../assets/img/IMGPreview.png';

const CardTechStack = ({ image, title, description, link }) => {

  const [backgroundColor, setBackgroundColor] = useState("");

  const imageUrl = image?.secure_url;

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
    imagen.src = imageUrl;
    imagen.onload = () => {
      const dominantColor = colorThief.getColor(imagen);
      const darkenedColor = darkenColor(dominantColor, 0.6); // Ajusta el valor de "0.7" según lo oscuro que desees el color
      const rgbColor = `rgb(${darkenedColor[0]}, ${darkenedColor[1]}, ${darkenedColor[2]})`;
      setBackgroundColor(rgbColor);
    };
  }, [imageUrl]);

  return (
    <Link to={link} target='_blank'>
      <Box
        w="full"
        borderWidth="1px"
        borderRadius="lg"
        p={4}
        bgImage="white"
        _dark={{
          bg: 'primary.900',
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
        transition='all 0.3s ease-in-out'
        css={{
          transition: "background-color 0.9s ease-in-out",
        }}
      >
        <Stack direction={'row'}>
          <Box
            rounded={'lg'}
            p={2}
            bg={backgroundColor}
            alignSelf={'center'}
          >
            <ImageChakra
              src={image?.secure_url || IMGPreview}
              alt={title}
              boxSize={10}
              maxW={10}
              maxH={10}
              objectFit={'cover'}
              alignSelf={'center'}
              transition="all 0.3s ease-in-out"
            />
          </Box>
          <Stack direction={'column'} justifyContent={'space-between'} alignSelf={'center'}>
            <Heading
              as="h3"
              size={["sm","md"]}
              noOfLines={1}
            >
              {title}
            </Heading>
            <Text
              mt={2}
              fontSize={["xs","sm"]}
              noOfLines={1}
            >
              {description}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Link>
  )
}

export default CardTechStack;