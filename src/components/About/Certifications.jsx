import React, { useEffect } from 'react';
import { Heading, SimpleGrid, Skeleton, Stack, Text } from '@chakra-ui/react'
import CardCertifications from './CardCertifications';
import { useDispatch, useSelector } from 'react-redux';
import { ToastChakra } from '../../helpers/toast';
import { getAllCertificados, reset } from '../../features/certificadoSlice';

const Certifications = () => {

    const dispatch = useDispatch();

    const { certificados, isLoading, isError, message } = useSelector((state) => state.certificados);

    const filteredCertificados = certificados.filter(certificate => certificate.estado === "ACTIVO")

    useEffect(() => {

        async function loadCertificados() {
            try {

                if (isError) {
                    ToastChakra('Error', message, 'error', 1500);
                    console.log(message);
                }

                dispatch(getAllCertificados())

                return () => {
                    dispatch(reset())
                }

            } catch (error) {
                console.log(error);
            }
        }

        loadCertificados();

    }, [dispatch, isError, message]);

    return (
        <>
            <Stack
                textAlign={'start'}
                w="full"
                mb={8}
            >
                <Heading
                    fontSize={'3xl'}
                    fontWeight="extrabold"
                    w="full"
                    noOfLines={1}
                >
                    Certifications
                </Heading>
                <Text
                    color={'gray.600'}
                    _dark={{
                        color: 'gray.400'
                    }}
                >
                    My academic certifications
                </Text>
            </Stack>

            {/* Skeleton */}

            {
                isLoading ? (
                    <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={4}>
                        <Skeleton bg="white" _dark={{ bg: 'primary.1000' }} height='40' />
                        <Skeleton bg="white" _dark={{ bg: 'primary.1000' }} height='40' />
                        <Skeleton bg="white" _dark={{ bg: 'primary.1000' }} height='40' />
                    </SimpleGrid>
                ) : (
                    <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={4}>
                        { filteredCertificados?.map((certification, index) => (
                            <CardCertifications key={index} data={certification} />
                        ))}
                    </SimpleGrid>
                )
            }

        </>
    )
}

export default Certifications;