import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Proyecto 1",
    description: "Descripción del proyecto 1",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    title: "Proyecto 2",
    description: "Descripción del proyecto 2",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    title: "Proyecto 3",
    description: "Descripción del proyecto 3",
    image: "https://via.placeholder.com/300",
  },
];

const ProjectSlider = () => {
  const bg = useColorModeValue("white", "gray.800");

  return (
    <Box bg={bg} py="12">
      <Box maxW="1200px" mx="auto">
        <Heading mb="6" textAlign="center">
          Proyectos destacados
        </Heading>
        <Flex
          w="100%"
          overflowX="hidden"
          flexWrap="nowrap"
          alignItems="center"
          justifyContent="center"
        >
          {projects.map((project) => (
            <Box
              key={project.id}
              px="6"
              py="12"
              textAlign="center"
              minW="300px"
              flexShrink={0}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Box
                  borderRadius="lg"
                  overflow="hidden"
                  boxShadow="md"
                  mb="6"
                  maxW="300px"
                  mx="auto"
                >
                  <img src={project.image} alt={project.title} />
                </Box>
              </motion.div>
              <Heading size="md" mb="3">
                {project.title}
              </Heading>
              <Text>{project.description}</Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default ProjectSlider;
