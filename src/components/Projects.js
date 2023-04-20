import { Box, Grid } from "@chakra-ui/react";
import { useState } from "react";

function Project({ title, imageUrl, isAnimating, onHoverStart, onHoverEnd }) {
    return (
        <Box
            w="full"
            h="full"
            bgImage={`url(${imageUrl})`}
            bgSize="cover"
            bgPosition="center"
            onMouseEnter={onHoverStart}
            onMouseLeave={onHoverEnd}
            style={{
                transition: "transform 0.5s",
                transform: `translateY(${isAnimating ? "-20px" : "0px"})`,
            }}
        >
            <Box
                position="absolute"
                bottom={0}
                left={0}
                w="full"
                p={2}
                bg="whiteAlpha.800"
            >
                <Box as="h3" fontWeight="semibold" fontSize="lg" mb={1}>
                    {title}
                </Box>
            </Box>
        </Box>
    );
}

function Projects() {
    const [isAnimating, setIsAnimating] = useState([]);

    const handleHoverStart = (index) => {
        setIsAnimating((prev) => {
            const newArr = [...prev];
            newArr[index] = true;
            return newArr;
        });
    };

    const handleHoverEnd = (index) => {
        setIsAnimating((prev) => {
            const newArr = [...prev];
            newArr[index] = false;
            return newArr;
        });
    };

    const projectData = [
        {
            title: "Project 1",
            imageUrl: "https://picsum.photos/200/200",
        },
        {
            title: "Project 2",
            imageUrl: "https://picsum.photos/200/200",
        },
        {
            title: "Project 3",
            imageUrl: "https://picsum.photos/200/200",
        },
        {
            title: "Project 4",
            imageUrl: "https://picsum.photos/200/200",
        },
    ];

    return (
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            {projectData.map((project, index) => (
                <Box key={index}>
                    <Project
                        title={project.title}
                        imageUrl={project.imageUrl}
                        isAnimating={isAnimating[index]}
                        onHoverStart={() => handleHoverStart(index)}
                        onHoverEnd={() => handleHoverEnd(index)}
                    />
                </Box>
            ))}
        </Grid>
    );
}

export default Projects;