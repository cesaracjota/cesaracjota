import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
    Flex,
    IconButton,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
} from "@chakra-ui/react";
import Flag from "react-flagkit";
import { AiOutlineReload } from "react-icons/ai";

function LanguageMenu({ scrolled }) {
    const { i18n } = useTranslation();
    const { t } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    const handleChangeLanguage = (language) => {
        i18n.changeLanguage(language);
        setSelectedLanguage(language);
        localStorage.setItem("language", language);
    };

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
                    icon={<Flag country={selectedLanguage === "en" ? 'US' : "ES"} size={'sm'} />}
                    size={'md'}
                    rounded={'full'}
                    variant="ghost"
                    colorScheme={
                        scrolled ? "whiteAlpha" : "gray"
                    }
                    _dark={{
                        color: 'white',
                    }}
                    color={
                        scrolled ? "white" : "black"
                    }
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
                        icon={<Flag country="US" />}
                        _dark={{ 
                            bg:selectedLanguage === "en" ? "primary.100" : "transparent",
                            color:selectedLanguage === "en" ? "white" : "inherit",
                            _hover: { bg: "primary.100" } 
                        }}
                        bg={selectedLanguage === "en" ? "primary.100" : "transparent"}
                        color={selectedLanguage === "en" ? "white" : "inherit"}
                        onClick={() => handleChangeLanguage("en")}
                        fontWeight={'bold'}
                    >
                        English
                    </MenuItem>
                    <MenuItem
                        _dark={{ 
                            bg:selectedLanguage === "es" ? "primary.100" : "transparent",
                            color:selectedLanguage === "es" ? "white" : "inherit",
                            _hover: { bg: "primary.100" } 
                        }}
                        bg={selectedLanguage === "es" ? "primary.100" : "transparent"}
                        color={selectedLanguage === "es" ? "white" : "inherit"}
                        icon={<Flag country="ES" />}
                        onClick={() => handleChangeLanguage("es")}
                        fontWeight={'bold'}
                    >
                        Español
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem
                        icon={<AiOutlineReload size={'1.4rem'} />}
                        _dark={{ 
                            bg: "primary.1000", 
                            _hover: { bg: "primary.900",
                            _selected: { 
                                bg: "white" 
                            }
                        } }}
                        fontWeight={'bold'}
                        onClick={() => window.location.reload()}
                    >
                        {t("reload")}
                    </MenuItem>
                </MenuList>
            </Menu>
        </Flex>
    );
}

export default LanguageMenu;