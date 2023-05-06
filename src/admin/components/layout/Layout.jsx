import { Box } from "@chakra-ui/react";
import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";


function Layout({ children }) {

    const [isOpen, setIsOpen] = useState(() => {
        const isOpenValue = JSON.parse(localStorage.getItem("isOpen"));
        return isOpenValue ?? false;
    });

    function handleToggle() {
        setIsOpen((prevIsOpen) => {
            const newIsOpen = !prevIsOpen;
            localStorage.setItem("isOpen", JSON.stringify(newIsOpen));
            return newIsOpen;
        });
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
                bg="#f9f9f9"
                _dark={{
                    bg: "primary.1100"
                }}
                px={
                    isOpen ? 3 : 6
                }
                p={6}
                ml={{
                    base: 0,
                    lg: isOpen ? "64" : "0"
                }}
                transition=".08s ease-out"
                mt={{
                    base: "16",
                    lg: "1"
                }}
            >
                {children}
            </Box>
        </Box>
    );
}

export default Layout;
