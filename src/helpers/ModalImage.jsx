import { Box, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay } from "@chakra-ui/react";
export const ModalImage = ({ isModalOpen, onClose, image }) => {

    return (
        <>
            <Modal isOpen={isModalOpen} onClose={onClose} size={'4xl'} isCentered>
                <ModalOverlay 
                    bg="rgba(0,0,0,0.8)"
                    backdropFilter='auto'
                    backdropBlur='2px'
                />
                <ModalContent
                    _dark={{
                        bg: 'primary.1000',
                        color: 'white',
                    }}
                    borderRadius={'2xl'}
                >
                    <ModalCloseButton size={'lg'} />
                    <ModalBody p={1}>
                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} w="full">
                            <Image borderRadius={'2xl'} src={image?.secure_url} alt={'cesara acjota'}/>
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}