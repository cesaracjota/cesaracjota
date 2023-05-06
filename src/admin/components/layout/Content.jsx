import { Box, Container } from "@chakra-ui/react";

export function Content({ children }) {
    return (
        <Box 
            as="main" 
            flex="1" 
            bg="white" 
            _dark={{
                bg: "primary.1100"
            }} 
            p={4}
        >
            <Container maxW="container.lg">{children}</Container>
        </Box>
    );
}
