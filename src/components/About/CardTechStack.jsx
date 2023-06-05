import { Box, Heading, Image as ImageChakra, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ColorThief from "colorthief";

const CardTechStack = ({ imageUrl, title, description, link }) => {

  const [backgroundColor, setBackgroundColor] = useState("");

  const darkenColor = (rgbColor, amount) => {
    const [r, g, b] = rgbColor;
    const darkenedR = Math.floor(r * amount);
    const darkenedG = Math.floor(g * amount);
    const darkenedB = Math.floor(b * amount);
    return [darkenedR, darkenedG, darkenedB];
  };

  useEffect(() => {
    const colorThief = new ColorThief();
    const image = new Image();
    image.src = imageUrl;
    image.onload = () => {
      const dominantColor = colorThief.getColor(image);
      const darkenedColor = darkenColor(dominantColor, 0.6); // Ajusta el valor de "0.7" según lo oscuro que desees el color
      const rgbColor = `rgb(${darkenedColor[0]}, ${darkenedColor[1]}, ${darkenedColor[2]})`;
      setBackgroundColor(rgbColor);
    };
  }, [imageUrl]);

  return (
    <Link to={link}>
      <Box 
        w="full" 
        borderWidth="1px" 
        borderRadius="lg" 
        p={4} 
        bgImage="white"
        _dark={{ 
          bg: 'primary.900', 
          borderColor: 'gray.600', 
          _hover:{
            borderColor: 'primary.100',
            color: 'primary.100',
            cursor: 'pointer'
          } 
        }}
        borderColor="gray.200" 
        _hover={{
          borderColor: 'primary.100',
          color: 'primary.100',
          cursor: 'pointer'
        }}
        transition='all 0.3s ease-in-out'
      >
          <Stack direction={'row'}>
            <Box
              rounded={'lg'} 
              p={3}
              bg={backgroundColor}
              maxW={16}
              maxH={16}
              w={16}
              h={16}
              overflow={'hidden'}
              alignSelf={'center'}
            >
              <ImageChakra 
                src={imageUrl}
                alt={title}
                w={'full'}
                h={'full'}
                alignSelf={'center'}
              />
            </Box>
            <Stack direction={'column'}>
              <Heading as="h3" size="md">
                {title}
              </Heading>
              <Text mt={2} fontSize={'sm'}>
                {description}
              </Text>
            </Stack>
          </Stack>
      </Box>
    </Link>
  )
}

export default CardTechStack;