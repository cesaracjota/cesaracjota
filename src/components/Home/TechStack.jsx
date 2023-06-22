import { Heading, SimpleGrid, Stack, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import CardTechStack from './CardTechStack';
import { useDispatch, useSelector } from 'react-redux';
import { ToastChakra } from '../../helpers/toast';
import { getAllTechStacks, reset } from '../../features/techstackSlice';
import { Loading } from '../../configuration/Loading';
import { ScaleLoader } from "react-spinners";
import { t } from 'i18next';

const TechStack = () => {

    const dispatch = useDispatch();

    const { techstacks, isLoading, isError, message } = useSelector((state) => state.techstacks);

    const filteredTechStacks = techstacks.filter(stacks => stacks.estado === "ACTIVO")

    const categorias = [
        {
            value: 'frontend',
            label: 'FRONTEND'
        },
        {
            value: 'backend',
            label: 'BACKEND'
        },
        {
            value: 'mobile',
            label: 'MOBILE'
        },
        {
            value: 'design',
            label: 'DESIGN'
        },
        {
            value: 'devops',
            label: 'DEVOPS'
        },
        {
            value: 'others',
            label: '+'
        }
    ];

    useEffect(() => {

        async function loadTechStacks() {
            try {

                if (isError) {
                    ToastChakra('Error', message, 'error', 1500);
                    console.log(message);
                }

                dispatch(getAllTechStacks())

                return () => {
                    dispatch(reset())
                }

            } catch (error) {
                console.log(error);
            }
        }

        loadTechStacks();

    }, [dispatch, isError, message]);

    const [selectedCategory, setSelectedCategory] = useState(categorias[0].value);

    const filteredData = filteredTechStacks.filter((data) => data.category === selectedCategory);

    if (isLoading) {
        return (
            <Loading>
                <ScaleLoader color="#645CAA" loading={true} size={100} />
            </Loading>
        )
    }

    return (
        <>
            <Stack textAlign={'start'} w="full" mt={8}>
                <Heading
                    as="h1"
                    fontSize={{ base: 'xl', lg: '4xl' }}
                    fontWeight="extrabold"
                    letterSpacing="tight"
                    lineHeight="shorter"
                >
                    {t("skills")}
                </Heading>
                <Text color={'gray.800'} _dark={{ color: 'gray.200' }} textAlign={'justify'} fontSize={["sm","lg"]}>
                    {t("skills_description")}
                </Text>
            </Stack>
            <Tabs variant="unstyled" position="relative" p={0}>
                <TabList
                    overflowX={'auto'}
                    overflowY={'hidden'}
                    whiteSpace={'nowrap'}
                    sx={{
                        '&::-webkit-scrollbar': {
                            display: 'none'
                        }
                    }}
                    mt={4}
                >
                    {categorias.map(({ value, label }) => (
                        <Tab
                            key={value}
                            _focus={{
                                boxShadow: 'none'
                            }}
                            fontSize={{ base: 'md', lg: 'lg' }}
                            _selected={{
                                color: 'primary.100',
                                fontWeight: 'bold'
                            }}
                            _hover={{
                                color: 'primary.100',
                                fontWeight: 'bold'
                            }}
                            fontWeight="black"
                            _active={{
                                bg: 'transparent'
                            }}
                            onClick={() => setSelectedCategory(value)}
                        >
                            <Heading
                                fontWeight={'extrabold'}
                                fontSize={{ base: 'md', lg: 'lg' }}
                            >
                                {label}
                            </Heading>
                        </Tab>
                    ))}
                </TabList>
                <TabIndicator
                    display={{
                        base: 'none',
                        lg: 'block'
                    }}
                    height="4px"
                    bg="primary.100"
                    borderRadius="2px"
                />
                <TabPanels>
                    {categorias.map(({ value }) => (
                        <TabPanel key={value} px={0}>
                            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
                                {filteredData.map((data) => (
                                    <CardTechStack key={data._id} {...data} />
                                ))}
                            </SimpleGrid>
                        </TabPanel>
                    ))}
                </TabPanels>
            </Tabs>
        </>
    );
};

export default TechStack;

