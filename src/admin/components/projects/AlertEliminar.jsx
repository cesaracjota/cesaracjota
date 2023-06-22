import React, { useState } from 'react'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    IconButton,
    Button,
    Icon,
    Flex,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineAlert } from 'react-icons/ai';
import { RiDeleteBackFill } from 'react-icons/ri';
import { deleteProject } from '../../../features/projectSlice';

export const AlertaEliminar = ({ row }) => {

    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);

    const [isOpenAlert, setIsOpenAlert] = useState(false);

    const handleOpenAlert = () => {
        setIsOpenAlert(true);
    }

    const handleCloseAlert = () => {
        setIsOpenAlert(false);
    }

    const handleDelete = (id) => {
        dispatch(deleteProject(id));
        setIsOpenAlert(false);
    }

    return (
        <>
            <IconButton
                aria-label="Eliminar"
                onClick={() => handleOpenAlert(row._id)}
                icon={<Icon as={RiDeleteBackFill} />}
                fontSize="2xl"
                size={'md'}
                rounded={'xl'}
                colorScheme="red"
                variant={'solid'}
                _dark={{ color: "white", bg: "red.500", _hover: { bg: "red.700" } }}
                ml={2}
                isDisabled={user.usuario.role !== 'ADMIN'}
            />
            <AlertDialog
                motionPreset='slideInBottom'
                onClose={handleCloseAlert}
                isOpen={isOpenAlert}
                isCentered
                size="xl"
            >
                <AlertDialogOverlay
                    bg="rgba(0,0,0,0.7)"
                    backdropFilter='auto'
                    backdropBlur='2px'
                />

                <AlertDialogContent py={6} _dark={{ bg: "primary.900" }} borderRadius="2xl">
                    <Flex textAlign="center" justifyContent="center" p={2}>
                        <Icon as={AiOutlineAlert} fontSize="9xl" color="red.500" />
                    </Flex>
                    <AlertDialogHeader textAlign="center" fontSize="3xl">¿Está seguro de eliminar? </AlertDialogHeader>
                    <AlertDialogBody textAlign="center" fontSize="xl">
                        ¡No podrás revertir esto!
                    </AlertDialogBody>
                    <AlertDialogFooter justifyContent="center" fontWeight="normal">
                        <Button
                            onClick={handleCloseAlert}
                            colorScheme="red"
                            size="lg"
                            _dark={{ bg: "red.600", color: "white", _hover: { bg: "red.700" } }}
                            borderRadius="xl"
                        >
                            CANCELAR
                        </Button>
                        <Button
                            colorScheme="green"
                            ml={3}
                            onClick={() => handleDelete(row._id)}
                            size="lg"
                            _dark={{ bg: "green.600", color: "white", _hover: { bg: "green.700" } }}
                            borderRadius="xl"
                        >
                            ¡SÍ BÓRRALO!
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}
