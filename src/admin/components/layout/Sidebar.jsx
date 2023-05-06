import { Box, Divider, Flex, Icon, Link, Spacer, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FaBox, FaCalendar, FaCertificate, FaCog, FaFolder, FaThLarge, FaUser, FaVideo } from "react-icons/fa";
import { SiGmail } from "react-icons/si"

const NavItem = (props) => {
    // const activeLinkcolor = useColorModeValue("primary.100", "#ffffff");
    const bgActiveLinkColor = useColorModeValue("#f2f2f2", "#1f1f1f")

    const { icon, children, ...rest } = props;

    return (
        <Flex
            align="center"
            py="12px"
            cursor="pointer"
            _hover={{
                bg: bgActiveLinkColor,
                // color: activeLinkcolor,
            }}
            role="group"
            px={4}
            transition=".1s ease"
            {...rest}
        >
            {icon && (
                <Icon
                    mx="5"
                    ml={{ base: "1", md: "3" }}
                    fontSize="22px"
                    as={icon}
                />
            )}
            {children}
        </Flex>
    );
};

function Sidebar({ isOpen }) {

    const activeLinkcolor = useColorModeValue("primary.100", "primary.100");
    const bgActiveLinkColor = useColorModeValue("#f2f2f2", "#1f1f1f");

    const listItem = [
        {
            icon: FaThLarge,
            label: "Panel",
            path: "/admin/dashboard",
        },
        {
            icon: FaUser,
            label: "Usuarios",
            path: "/admin/usuarios",
        },
        {
            icon: FaCertificate,
            label: "Certificados",
            path: "/admin/certificados",
        },
        {
            icon: FaBox,
            label: "Mensajes",
            path: "/admin/mensajes",
        },
    ]

    const secondListItem = [
        {
            icon: FaVideo,
            label: "Contenido",
            path: "/admin/contenido",
        },
        {
            icon: SiGmail,
            label: "Correos",
            path: "/admin/correos",
        },
        {
            icon: FaCalendar,
            label: "Calendario",
            path: "/admin/calendario",
        },
    ]

    const thirdListItem = [
        {
            icon: FaCog,
            label: "Configuración",
            path: "/admin/configuracion",
        },
        {
            icon: FaFolder,
            label: "Archivos",
            path: "/admin/archivos",
        },
    ]

    return (
        <Box
            w={{ base: isOpen ? "0" : "0", lg: "64" }}
            display={{
                base: isOpen ? "block" : "none",
            }}
            bgColor="white"
            _dark={{
                bgColor: "primary.1000",
                color: "primary.100",
                borderRight:'1px solid rgba(255, 255, 255, 0.1)'
            }}
            borderRight='1px solid #e5e5e5'
            color="white"
            pos="fixed"
            top="65px"
            left="0"
            bottom="0"
            h="calc(100vh - 4rem)"
            overflow="hidden"
            overflowY="auto"
            zIndex="0"
            transform={isOpen ? "translateX(0)" : "translateX(-100%)"}
            transition="width 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms"
            sx={{
                '&::-webkit-scrollbar': {
                    width: '4px',
                },
                '&::-webkit-scrollbar-thumb': {
                    background: useColorModeValue('#909090', '#717171'),
                    borderRadius: '24px',
                    width: '4px',
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
                mt={0}
                aria-label="Main Navigation"
                justify="space-between"
                h="100%"
                // borderTopRadius={'3xl'}
            >
                {
                    listItem.map((item, index) => {
                        return (
                            <Link
                                key={index}
                                as={NavLink}
                                to={item.path}
                                fontSize={'14px'}
                                color={'gray.700'}
                                _activeLink={{
                                    color: activeLinkcolor,
                                    bg: bgActiveLinkColor,
                                    borderRight: '4px solid',
                                    borderColor: 'primary.100',
                                    fontWeight: '600',
                                }}
                                _dark={{
                                    color: '#ffffff',
                                    _activeLink:{
                                        color: 'primary.100',
                                    }
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
                                _activeLink={{
                                    color: activeLinkcolor,
                                    bg: bgActiveLinkColor,
                                    borderRight: '4px solid',
                                    borderColor: 'primary.100',
                                    fontWeight: '600',
                                }}
                                _hover={{ textDecoration: 'none' }}
                            >
                                <NavItem icon={item.icon}>{item.label}</NavItem>
                            </Link>
                        )
                    })
                }

                <Divider my={3}/>

                <Spacer />

                {/* footer Sidebar */}

                {
                    thirdListItem.map((item, index) => {
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
                                _activeLink={{
                                    color: activeLinkcolor,
                                    bg: bgActiveLinkColor,
                                    borderRight: '4px solid',
                                    borderColor: 'primary.100',
                                    fontWeight: '600',
                                }}
                                _hover={{ textDecoration: 'none' }}
                            >
                                <NavItem icon={item.icon}>{item.label}</NavItem>
                            </Link>
                        )
                    })
                }

                <Stack
                    bottom={0}
                    direction="column"
                    as="nav"
                    fontSize="12px"
                    px={8}
                    py={6}
                    aria-label="Main Navigation"
                    color={'black'}
                    _dark={{
                        color: '#ffffff'
                    }}
                >
                    {/* <Text fontWeight="bold">
                        Condiciones Privacidad Políticas y seguridad Cómo funciona Prueba funciones nuevas
                    </Text> */}
                    <Text fontSize={'12px'} as="span">© 2023 AgylCode LLC</Text>
                </Stack>
            </Flex>
        </Box>
    );
}

export default Sidebar;