import { Box, Divider, Flex, Icon, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FiArchive, FiCalendar, FiSettings, FiUsers } from "react-icons/fi";
import { AiFillDashboard } from "react-icons/ai";

const NavItem = (props) => {

    const activeLinkcolor = useColorModeValue("gray.900", "#ffffff");
    const bgActiveLinkColor = useColorModeValue("#f2f2f2", "#ffffff1f")

    const { icon, children, ...rest } = props;

    return (
        <Flex
            align="center"
            py="8px"
            cursor="pointer"
            _hover={{
                bg: bgActiveLinkColor,
                color: activeLinkcolor,
            }}
            role="group"
            borderRadius={'lg'}
            transition=".1s ease"
            {...rest}
        >
            {icon && (
                <Icon
                    mx="5"
                    ml={{ base: "1", md: "3" }}
                    fontSize="23px"
                    _groupHover={{
                        color: activeLinkcolor,
                    }}
                    as={icon}
                />
            )}
            {children}
        </Flex>
    );
};

function Sidebar({ isOpen }) {

    const activeLinkcolor = useColorModeValue("gray.900", "white");
    const bgActiveLinkColor = useColorModeValue("#f2f2f2", "#292929");

    const listItem = [
        {
            icon: AiFillDashboard,
            label: "Dashboard",
            path: "/admin/dashboard",
        },
        {
            icon: FiUsers,
            label: "Usuarios",
            path: "/admin/usuarios",
        },
        {
            icon: FiCalendar,
            label: "Calendario",
            path: "/admin/calendario",
        },
    ]

    const secondListItem = [
        {
            icon: FiSettings,
            label: "Configuración",
            path: "/admin/configuracion",
        },
        {
            icon: FiArchive,
            label: "Archivos",
            path: "/admin/archivos",
        },
    ]

    return (
        <Box
            w={{ base: isOpen ? "0" : "0", lg: "60" }}
            display={{
                base: isOpen ? "block" : "none",
            }}
            bgColor="white"
            _dark={{
                bgColor: "primary.1100",
                color: "primary.100",
            }}
            color="white"
            pos="fixed"
            top="16"
            left="0"
            bottom="0"
            h="calc(100vh - 6rem)"
            overflow="hidden"
            overflowY="auto"
            zIndex="sticky"
            transform={isOpen ? "translateX(0)" : "translateX(-100%)"}
            transition="width 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms"
            sx={{
                '&::-webkit-scrollbar': {
                    width: '8px',
                },
                '&::-webkit-scrollbar-thumb': {
                    background: useColorModeValue('#909090', '#717171'),
                    borderRadius: '24px',
                    width: '6px',
                },
                '&::-webkit-scrollbar-thumb:active': {
                    backgroundColor: useColorModeValue('#909090', '#717171'),
                },
                '&::-webkit-scrollbar-track': {
                    borderRadius: '24px',
                },
            }}
        >
            <Flex
                direction="column"
                as="nav"
                fontSize="15px"
                my={0}
                mt={2}
                px={4}
                aria-label="Main Navigation"
                borderTopRadius={'3xl'}
            >
                {
                    listItem.map((item, index) => {
                        return (
                            <Link
                                key={index}
                                as={NavLink}
                                to={item.path}
                                color={'gray.700'}
                                fontSize={'14px'}
                                _dark={{
                                    color: '#ffffff'
                                }}
                                borderRadius={'lg'}
                                _activeLink={{
                                    color: activeLinkcolor,
                                    bg: bgActiveLinkColor,
                                    fontWeight: '500',
                                }}
                                _hover={{ textDecoration: 'none' }}
                            >
                                <NavItem icon={item.icon}>{item.label}</NavItem>
                            </Link>
                        )
                    })
                }

                <Divider my={3}/>

                {
                    secondListItem.map((item, index) => {
                        return (
                            <Link
                                key={index}
                                as={NavLink}
                                to={item.path}
                                color={'gray.700'}
                                fontSize={'14px'}
                                _dark={{
                                    color: '#ffffff'
                                }}
                                borderRadius={'lg'}
                                _activeLink={{
                                    color: activeLinkcolor,
                                    bg: bgActiveLinkColor,
                                    fontWeight: '500',
                                }}
                                _hover={{ textDecoration: 'none' }}
                            >
                                <NavItem icon={item.icon}>{item.label}</NavItem>
                            </Link>
                        )
                    })
                }

                <Divider my={3}/>

                {/* footer Sidebar */}

                <Stack
                    direction="column"
                    as="nav"
                    fontSize="12px"
                    px={4}
                    py={2}
                    aria-label="Main Navigation"
                    color={'black'}
                    _dark={{
                        color: '#ffffff'
                    }}
                >
                    <Text>
                        <Text as="span" fontWeight="bold">Version:</Text> 1.0.0
                    </Text>
                    <Text>
                        <Text as="span" fontWeight="bold">Last update:</Text> 12/12/2022
                    </Text>
                    <Text fontWeight="bold">
                        Acerca de Prensa Derechos de autor Comunicarte con nosotros Creadores Anunciar Desarrolladores
                    </Text>
                    <Text fontWeight="bold">
                        Condiciones Privacidad Políticas y seguridad Cómo funciona Prueba funciones nuevas
                    </Text>
                    <Text fontSize={'10px'} as="span">© 2023 AgylCode LLC</Text>
                </Stack>
            </Flex>
        </Box>
    );
}

export default Sidebar;