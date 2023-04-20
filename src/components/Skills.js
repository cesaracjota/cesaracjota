import { Box, Heading, SimpleGrid } from "@chakra-ui/react";

function Skills() {
    const skills = [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Git",
        "Bootstrap",
    ];

    return (
        <Box p={8}>
            <Heading as="h2" size="xl" pb={4}>
                Habilidades
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                {skills.map((skill) => (
                    <Box key={skill} p={4} border="1px solid gray" borderRadius="md">
                        <Heading as="h3" size="lg" mb={2}>
                            {skill}
                        </Heading>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
}

export default Skills;