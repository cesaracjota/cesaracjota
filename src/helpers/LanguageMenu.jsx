import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
    Flex,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from "@chakra-ui/react";
import { MdTranslate } from 'react-icons/md';

function LanguageMenu() {
    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
    const [shouldRefreshPage, setShouldRefreshPage] = useState(false);

    const handleChangeLanguage = (language) => {
        i18n.changeLanguage(language);
        setSelectedLanguage(language);
        localStorage.setItem("language", language);
        setShouldRefreshPage(true);
    };

    useEffect(() => {
        if (shouldRefreshPage) {
            window.location.reload();
            setShouldRefreshPage(false);
        }
    }, [shouldRefreshPage]);

    return (
        <Flex alignItems="center" alignSelf={'center'}>
            <Menu
                isLazy
                closeOnSelect={false}
                autoSelect={false}
                maxW={20}
                alignSelf={'center'}
            >
                <MenuButton
                    as={IconButton}
                    icon={<MdTranslate fontSize={'20px'} />}
                    size={'md'}
                    rounded={'full'}
                    variant="ghost"
                />
                <MenuList
                    boxShadow="md"
                    maxW={20}
                    _dark={{
                        bg: "primary.1000",
                        color: 'white',
                    }}
                >
                    <MenuItem
                        fontSize={'16px'}
                        fontFamily={`"Fira Sans Condensed", sans-serif`}
                        icon={<MdTranslate fontSize={'20px'} />}
                        fontWeight={500}
                        _light={{
                            color: selectedLanguage === "en" ? "primary.100" : "black",
                            _hover: {
                                color: 'primary.100',
                                bg: 'none'
                            },
                            _focus: {
                                color: 'primary.100',
                                bg: 'none'
                            },
                            textDecoration: 'none',
                        }}
                        _dark={{
                            bg: 'primary.1000',
                            color: selectedLanguage === "en" ? "primary.100" : "white",
                            _hover: {
                                color: 'primary.100',
                                bg: 'none'
                            },
                            _focus: {
                                color: 'primary.100',
                                bg: 'none'
                            },
                            textDecoration: 'none',
                        }}
                        transition=".3s ease all"
                        onClick={() => handleChangeLanguage("en")}
                    >
                        Ingles
                    </MenuItem>
                    <MenuItem
                        fontSize={'16px'}
                        fontFamily={`"Fira Sans Condensed", sans-serif`}
                        icon={<MdTranslate fontSize={'20px'} />}
                        fontWeight={500}
                        _light={{
                            color: selectedLanguage === "es" ? "primary.100" : "black",
                            _hover: {
                                color: 'primary.100',
                                bg: 'none'
                            },
                            textDecoration: 'none',
                        }}
                        _dark={{
                            bg: 'primary.1000',
                            color: selectedLanguage === "es" ? "primary.100" : "white",
                            _hover: {
                                color: 'primary.100',
                                bg: 'none'
                            },
                            textDecoration: 'none',
                        }}
                        transition=".3s ease all"
                        onClick={() => handleChangeLanguage("es")}
                    >
                        Español
                    </MenuItem>
                </MenuList>
            </Menu>
        </Flex>
    );
}

export default LanguageMenu;