import React, { useEffect } from 'react';
import { Heading, SimpleGrid, Skeleton, Stack, Text } from '@chakra-ui/react'
import CardCertifications from './CardCertifications';
import { useDispatch, useSelector } from 'react-redux';
// import { ToastChakra } from '../../helpers/toast';
import { getAllCertificados, reset } from '../../features/certificadoSlice';
import { t } from 'i18next';

const Certifications = () => {

    const dispatch = useDispatch();

    const { certificados, isLoading, isError, message } = useSelector((state) => state.certificados);

    const filteredCertificados = certificados.filter(certificate => certificate.estado === "ACTIVO")

    useEffect(() => {

        async function loadCertificados() {

            try {

                if (isError) {
                    // ToastChakra('Error', message, 'error', 1500);
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
                mt={8}
            >
                <Heading
                    as="h1"
                    fontSize={{ base: 'xl', lg: '3xl' }}
                    fontWeight="extrabold"
                    letterSpacing="tight"
                    lineHeight="shorter"
                >
                    {t("about_me.certification.title")}
                </Heading>
                <Text
                    color={'gray.800'}
                    _dark={{
                        color: 'gray.200'
                    }}
                    fontSize={["sm", "md"]}
                >
                    {t("about_me.certification.subtitle")}
                </Text>
            </Stack>

            {
                isLoading ? (
                    <SimpleGrid columns={[1, 2, 3]} spacing={4}>
                        <Skeleton bg="white" _dark={{ bg: 'primary.1000' }} height='40' />
                        <Skeleton bg="white" _dark={{ bg: 'primary.1000' }} height='40' />
                        <Skeleton bg="white" _dark={{ bg: 'primary.1000' }} height='40' />
                    </SimpleGrid>
                ) : (
                    <SimpleGrid 
                        columns={[
                            1,
                            1,
                            filteredCertificados.length === 1 ? 1 : filteredCertificados.length === 2 ? 2 : 2,
                            filteredCertificados.length === 1 ? 1 : filteredCertificados.length === 2 ? 2 : 3
                        ]} 
                        spacing={4}
                    >
                        {filteredCertificados?.map((certification, index) => (
                            <CardCertifications
                                key={index}
                                data={certification}
                                columnSpan={filteredCertificados.length === 4 && index === 3 ? 3 : 1}
                            />
                        ))}
                    </SimpleGrid>
                )
            }

        </>
    )
}

export default Certifications;