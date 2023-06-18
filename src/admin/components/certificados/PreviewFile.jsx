import { Box, Button, HStack, Icon, IconButton, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import moment from 'moment';
import { FaFilePdf } from "react-icons/fa";


export const ModalPreviewFile = ({ open, onOpen, onClose, file }) => {
    const [filePreview, setFilePreview] = useState(null);

    useEffect(() => {
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFilePreview(reader?.result);
            };
            reader.readAsDataURL(file);
        }
    }, [file]);

    return (
        <>
            <IconButton
                aria-label="Previsualizar"
                onClick={onOpen}
                icon={<Icon as={FaFilePdf} />}
                fontSize="lg"
                size={'sm'}
                colorScheme="purple"
                variant={'solid'}
                _dark={{ color: "white", bg: "purple.500", _hover: { bg: "purple.700" } }}
                ml={2}
            />
            <Modal isOpen={open} onClose={onClose} size={'5xl'}>
                <ModalOverlay />
                <ModalContent
                    _dark={{
                        bg: 'primary.1000',
                        color: 'white',
                    }}
                >
                    <ModalHeader py={4} textAlign={'center'} fontWeight='extrabold'>PREVISUALIZACIÓN DEL ARCHIVO</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={2} maxH={'80%'} px={0} py={0} mt={-4}>
                        <Stack direction={'row'} justifyContent="space-between" px={4} spacing={2} py={2} textAlign="center" alignItems="center" w={'full'}>
                            <HStack spacing={2} align="baseline">
                                <Text fontSize={'xs'} fontWeight={'bold'}>NOMBRE DEL ARCHIVO:</Text>
                                <Text fontSize={'xs'}>{file?.name}</Text>
                            </HStack>
                            <HStack spacing={2} align="baseline">
                                <Text fontSize={'xs'} fontWeight={'bold'}>TAMAÑO:</Text>
                                <Text fontSize={'xs'}>{(file?.size / 1000000).toFixed(2)} MB</Text>
                            </HStack>
                            <HStack spacing={2} align="baseline">
                                <Text fontSize={'xs'} fontWeight={'bold'}>FECHA ACTUAL:</Text>
                                <Text fontSize={'xs'}>{moment(Date(file?.lastModifiedDate)).format('YYYY-MM-DD : HH:mm:ss')}</Text>
                            </HStack>
                        </Stack>
                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} w="full" borderWidth="1px" borderRadius={'lg'}>
                            {
                                file?.type?.includes('image') ? (
                                    <Image src={filePreview} alt={file?.name} maxBlockSize={'60vh'} />
                            ) : file?.type?.includes('pdf') ? (
                                <iframe src={filePreview} title={file?.name} width="100%" height="450px" />
                            ) : (
                                <Stack direction="column" textAlign="center" alignItems="center">
                                    <Text fontSize={'sm'} fontWeight={'bold'} textAlign="center" color={'red.500'} mb={4}>No se puede previsualizar el archivo</Text>
                                    <Image src={"https://pngimg.com/uploads/folder/folder_PNG100476.png"} textAlign="center" w={'150px'} />
                                </Stack>
                            )}
                        </Box>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose} _focus={{ boxShadow: 'none' }} colorScheme="green" _dark={{ color: "white", bg: "green.500", _hover: { bg: "green.700" } }}>OK</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}