import { Box } from "@chakra-ui/react";
import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";


function Layout({ children }) {
    const [isOpen, setIsOpen] = useState(true);

    function handleToggle() {
        setIsOpen(!isOpen);
    }

    return (
        <Box
            display="flex"
            flexDirection="column"
            minH="100vh"
            _dark={{
                bgColor: "primary.1100",
                color: "white"
            }}
            fontFamily={'Roboto, Arial, sans-serif'}
        >
            <Header onToggle={handleToggle} isOpen={isOpen} />
            <Sidebar isOpen={isOpen} />
            <Box
                as="main"
                flex="1"
                bg="white"
                _dark={{
                    bg: "primary.1100"
                }}
                px={
                    isOpen ? 3 : 6
                }
                py={2}
                ml={{
                    base: 0,
                    lg: isOpen ? "60" : "0"
                }}
                transition=".08s ease-out"
                mt={{
                    base: "16",
                    lg: "0"
                }}
            >
                {children}
            </Box>
        </Box>
    );
}

export default Layout;
