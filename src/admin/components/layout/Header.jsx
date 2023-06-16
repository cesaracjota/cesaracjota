import { Flex, IconButton, Icon, Drawer, DrawerOverlay, DrawerContent, useDisclosure, Text, Stack, DrawerCloseButton, HStack, Heading } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../../theme/ColorModeSwitcher";
import { RiFullscreenExitLine, RiFullscreenFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { DrawerHeaderConponent } from "./DrawerHeader";
import '@fontsource/smooch';

function Header({ onToggle }) {

    const sidebar = useDisclosure();

    const [isSpanded, setIsSpanded] = useState(false);

    const user = useSelector(state => state.auth.user);

    const handleFullScreen = () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
            setIsSpanded(false);
        } else {
            document.documentElement.requestFullscreen();
            setIsSpanded(true);
        }
    }

    return (
        <Flex
            as="header"
            _dark={{
                bgColor: "primary.1000",
                color: "primary.100"
            }}
            bg="white"
            position={{
                base: "fixed",
                lg: "sticky"
            }}
            top="0"
            left="0"
            right="0"
            zIndex="sticky"
            px={5}
            py={3}
            align="center"
            justify="space-between"
            transition=".08s ease-out"
            boxShadow={'0px 1px 4px 1px rgba(0, 0, 0, 0.2)'}
        >
            <IconButton
                display={{
                    base: "none",
                    lg: "inline-flex"
                }}
                size={'md'}
                rounded={'full'}
                onClick={() => { onToggle(); }}
                variant="ghost"
                colorScheme="gray"
                aria-label="Toggle navigation"
                icon={<Icon fontSize={24} as={HamburgerIcon} />}
            />

            <Drawer
                isOpen={sidebar.isOpen}
                onClose={sidebar.onClose}
                placement="left"
                size="full"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton
                        size={'lg'}
                    />
                    <Stack
                        spacing={0}
                        align="center"
                        justify="center"
                        direction="column"
                        h="100%"
                        w="100%"
                        p={10}
                    >
                        <Text>
                            Dashboard
                        </Text>
                    </Stack>
                </DrawerContent>
            </Drawer>

            <IconButton
                aria-label="Menu"
                display={{ base: "flex", lg: "none" }}
                onClick={sidebar.onOpen}
                fontSize="xl"
                variant="ghost"
                rounded={'full'}
                icon={<HamburgerIcon />}
            />

            <Stack
                spacing={1}
                align="center"
                justify="center"
                direction="row"
            >
                <Link as={Link} to={'/admin/dashboard'} _hover={{ textDecoration: 'none' }}>
                    <Stack spacing={0} direction="row" alignSelf={'center'}>
                        <Heading as="h1" fontWeight={'normal'} fontSize={{base: "20px", lg: "26px"}} color={'primary.100'} fontFamily={`'Smooch', sans-serif`}>
                            {`</CesarAcjota/>`}
                        </Heading>
                    </Stack>
                </Link>
            </Stack>

            <Flex alignSelf="center" verticalAlign={'center'} justify={'flex-end'} justifyContent={{ base: "flex-end", lg: "space-between" }} w={'full'} display="inline-flex">
                <HStack display={{ base: "none", lg: "flex" }} ml={242}>
                </HStack>
                <HStack spacing={4}>
                    <IconButton
                        aria-label="Full Screen"
                        fontSize="xl"
                        variant="ghost"
                        rounded={'full'}
                        icon={isSpanded === true ? <RiFullscreenExitLine /> : <RiFullscreenFill />}
                        colorScheme="gray"
                        onClick={handleFullScreen}
                    />
                    <ColorModeSwitcher />
                    <DrawerHeaderConponent user={user?.usuario} />
                </HStack>
            </Flex>
        </Flex>
    );
}

export default Header;