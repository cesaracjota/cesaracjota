import { ButtonGroup, Drawer, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerOverlay, IconButton, Stack } from "@chakra-ui/react"
import SidebarContent from "./Sidebar"
import { NavLink } from "react-router-dom"
import { FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa"

export const ContentDrawer = ({ isOpen, onClose, redesData }) => {
    return (
        <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            size={{
                base: 'full',
                lg: 'xs',
            }}
            isFullHeight
        >
            <DrawerOverlay />
            <DrawerContent
                _dark={{ bg: 'primary.1000' }}
                scrollBehavior={'inside'}
            >
                <DrawerCloseButton size={'lg'} />
                <SidebarContent borderRight="none" />
                <DrawerFooter
                    boxShadow={'none'}
                >
                    <Stack
                        direction="row"
                        spacing="3"
                        align="center"
                        justify="center"
                        display={'flex'}
                        w={'full'}
                    >
                        <ButtonGroup>
                            <IconButton
                                as={NavLink}
                                to={redesData?.youtube?.url}
                                target='_blank'
                                aria-label="Youtube"
                                icon={<FaYoutube fontSize="1.6rem" />}
                                colorScheme='red'
                                variant="ghost"
                                size="lg"
                            />
                            <IconButton
                                as={NavLink}
                                to={redesData?.instagram?.url}
                                target='_blank'
                                aria-label="Instagram"
                                icon={<FaInstagram fontSize="1.6rem" />}
                                colorScheme='purple'
                                variant="ghost"
                                size="lg"
                            />
                            <IconButton
                                as={NavLink}
                                to={redesData?.linkedin?.url}
                                target='_blank'
                                aria-label="LinkedIn"
                                icon={<FaLinkedin fontSize="1.6rem" />}
                                colorScheme='linkedin'
                                variant="ghost"
                                size="lg"
                            />
                            <IconButton
                                as={NavLink}
                                to={redesData?.whatsapp?.url}
                                target='_blank'
                                aria-label="WhatsApp"
                                icon={<FaWhatsapp fontSize="1.6rem" />}
                                colorScheme='whatsapp'
                                variant="ghost"
                                size="lg"
                            />
                        </ButtonGroup>
                    </Stack>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}