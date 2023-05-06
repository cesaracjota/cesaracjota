import React from "react";
import { AspectRatio, Box, IconButton, Stack } from "@chakra-ui/react";
import { FiCopy, FiShare2 } from "react-icons/fi";

const YoutubeCard = ({ data }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <AspectRatio w='full' maxH={{ base: '200px', md: '240px', lg: '200px' }} h="auto" ratio={1}>
            <iframe
                title='naruto'
                src={data?.url}
                allowFullScreen
                allow="autoplay"
                width="100%"
                height="100%"
                className="youtube-card"
                data-src={data?.url}
            />
      </AspectRatio>
      <Box p="4">
        <Stack w="full" display="flex" spacing={4} direction="row" justifyContent={'flex-end'} align={'flex-end'}>
          <IconButton 
            icon={<FiShare2 />}
            rounded={'full'}
            />
          <IconButton 
            icon={<FiCopy />}
            rounded={'full'}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default YoutubeCard;