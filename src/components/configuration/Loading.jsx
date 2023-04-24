import { Flex } from "@chakra-ui/react";
import { HashLoader  } from "react-spinners";

export function Loading() {
    return (
        <Flex
            w="100%"
            h="100vh"
            alignItems="center"
            justifyContent="center"
            position="fixed"
            top="0"
            left="0"
            zIndex="999"
            bg={'white'}
            _dark={{
                bg: 'primary.900'
            }}
        >
            <HashLoader
                color="#645CAA"
                loading={true}
                size={200}
            />

        </Flex> 
    );
}