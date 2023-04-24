import { Box, Flex, Icon, Image, Link, Text, useColorModeValue } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { AiFillDashboard } from "react-icons/ai";
import Logo from '../../../../assets/img/logo.svg';

const NavItem = (props) => {

    const activeLinkcolor = useColorModeValue("primary.100", "#ffffff");
    const bgActiveLinkColor = useColorModeValue("#ffffff", "#ffffff1f")

    const { icon, children, ...rest } = props;

    return (
        <Flex
            align="center"
            py="14px"
            cursor="pointer"
            _hover={{
                bg: bgActiveLinkColor,
                color: activeLinkcolor,
            }}
            role="group"
            fontWeight="semibold"
            transition=".5s ease"
            scrollMarginY={10}
            {...rest}
        >
            {icon && (
                <Icon
                    mx="2"
                    ml={{ base: "2", md: "4" }}
                    fontSize="2xl"
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

    const activeLinkcolor = useColorModeValue("primary.100", "white");
    const bgActiveLinkColor = useColorModeValue("#ffffff", "#292929");

    const listItem = [
        {
            icon: AiFillDashboard,
            label: "Dashboard",
            path: "/admin/dashboard",
        },
        {
            icon: FiSettings,
            label: "Configuración",
            path: "/admin/configuracion",
        },
    ]

    return (
        <Box
            w={{ base: isOpen ? "0" : "0", lg: "64" }}
            display={{
                base: isOpen ? "block" : "none",
            }}
            bgColor="primary.100"
            _dark={{
                bgColor: "#1e1e1e",
                color: "primary.100",
                borderRightWidth:'0.01px'
            }}
            color="white"
            pos="fixed"
            top="0"
            left="0"
            h="full"
            overflow="hidden"
            overflowY="auto"
            zIndex="sticky"
            transform={isOpen ? "translateX(0)" : "translateX(-100%)"}
            transition="width 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms"
            boxShadow="0px 3px 5px -1px rgba(0,0,0,.2),0px 5px 8px 0px rgba(0,0,0,.14),0px 1px 14px 0px rgba(0,0,0,.12)"
            sx={{
                '&::-webkit-scrollbar': {
                    width: '4px',
                },
                '&::-webkit-scrollbar-thumb': {
                    background: useColorModeValue('rgba(0,0,0,.3)', 'rgba(0,0,0,.4)'),
                    borderRadius: '24px',
                    width: '6px',
                },
                '&::-webkit-scrollbar-thumb:hover': {
                    backgroundColor: 'rgba(0,0,0,.5)'
                },
                '&::-webkit-scrollbar-thumb:active': {
                    backgroundColor: 'rgba(0,0,0,.6)'
                },
                '&::-webkit-scrollbar-track': {
                    background: '#d4d4d4',
                    borderRadius: '24px',
                },
                '&::-webkit-scrollbar-track:hover': {
                    background: '#d4d4d4',
                },
                '&::-webkit-scrollbar-track:active': {
                    background: '#d6d6d6',
                },
            }}
        >
            <Flex 
                px="4" 
                py="13px" 
                direction={'row'} 
                alignItems="left" 
                justifyContent="flex-start"
                color={'white'}
            >
                <Image src={Logo} w={"30px"} alt="Admin Cesar Acjota" />
                <Text fontWeight={'bold'} ml={2} fontSize="xl" alignSelf={'center'} textAlign="center">Mantis</Text>
            </Flex>
            <Flex
                direction="column"
                as="nav"
                fontSize="15px"
                mx={0}
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
                                color={'white'}
                                fontSize={'16px'}
                                _dark={{
                                    color: '#ffffff'
                                }}
                                fontWeight={'normal'}
                                _activeLink={{
                                    color: activeLinkcolor,
                                    bg: bgActiveLinkColor,
                                    // borderRight: "2px solid #0063d1"
                                }}
                                _hover={{ textDecoration: 'none' }}
                            >
                                <NavItem icon={item.icon}>{item.label}</NavItem>
                            </Link>
                        )
                    })
                }
            </Flex>
        </Box>
    );
}

export default Sidebar;