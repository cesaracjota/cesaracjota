import { Box, IconButton, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { FaRegFileImage } from "react-icons/fa";
export const ModalPreviewFile = ({ open, onOpen, onClose, data, color }) => {

    return (
        <>
            <IconButton 
                variant='solid'
                color={color}
                onClick={onOpen}
                aria-label='Ver certificado'
                icon={<FaRegFileImage fontSize={'22px'} />}
            />
            <Modal isOpen={open} onClose={onClose} size={'4xl'} isCentered>
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
                    <ModalHeader py={4} textAlign={'center'} fontWeight='extrabold'>CERTIFICADO</ModalHeader>
                    <ModalCloseButton size={'lg'} />
                    <ModalBody pb={2} py={10} mt={-10}>
                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} w="full">
                            <Image src={data?.image?.secure_url} alt={data?.title} maxH={'65vh'}/>
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}