import { Stack } from '@chakra-ui/react';
import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectContent = () => {

    return (
        <Stack direction={'column'} spacing={4}>
            <ProjectCard />
            {/* <SimpleGrid columns={1} spacing={4}>
            </SimpleGrid> */}

            {/* 
                <Box mt={4} textAlign="center">
                    <Button
                        bg="primary.100"
                        leftIcon={<FaList />}
                        color="white"
                        _hover={{
                            bg: 'primary.200',
                        }}
                        mx="auto">
                        Cargar más
                    </Button>
                </Box> 
            */}
        </Stack>
    )
}

export default ProjectContent;
