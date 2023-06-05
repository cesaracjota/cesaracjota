import { Box, Heading, Image as ImageChakra, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ColorThief from "colorthief";

const CardTechStack = ({ imageUrl, title, description, link }) => {

  const [backgroundColor, setBackgroundColor] = useState(null);

  useEffect(() => {
    const colorThief = new ColorThief();
    const image = new Image();
    image.src = imageUrl;
    image.onload = () => {
      const dominantColor = colorThief.getColor(image);
      const rgbColor = `rgb(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]})`;
      setBackgroundColor(rgbColor);
    };
  }, [imageUrl]);

  return (
    <Link to={link}>
      <Box borderWidth="1px" borderRadius="lg" p={4} w="full" bg="white" _dark={{ bg: 'primary.900' }}>
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
              <Text mt={2} color="gray.600" fontSize={'sm'}>
                {description}
              </Text>
            </Stack>
          </Stack>
      </Box>
    </Link>
  )
}

export default CardTechStack;