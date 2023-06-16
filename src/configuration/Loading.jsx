import { Flex } from "@chakra-ui/react";

export function Loading({ children }) {
    return (
        <Flex
            w="100%"
            h="80vh"
            alignItems="center"
            justifyContent="center"
        >
            {children}
        </Flex>
    );
}
