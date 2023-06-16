import React from "react";
import { Box, Image } from "@chakra-ui/react";

const CardProjects = ({ image, alt, ...props }) => {
    return (
        <Box
            overflow="hidden"
            h={{ base: '220px', lg: '180px' }}
            w="320px"
            p={4}
            borderWidth={'1px'}
            _dark={{
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
            {...props}
        >
            <Image
                borderRadius="2xl"
                src={image}
                alt={alt}
                objectFit="cover"
                h="full"
                w="full"
                boxShadow={'base'}
                cursor={'pointer'}
                _hover={{ transform: "scale(1.1)" }}
                transition="all 0.2s ease-in-out"
            />
        </Box>
    );
};

export default CardProjects;