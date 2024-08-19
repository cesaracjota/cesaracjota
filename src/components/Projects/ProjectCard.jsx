import React, { useEffect, useState } from 'react';
import {
    Box,
    Stack,
    HStack,
    Flex,
    Text,
    Image,
    Heading,
    Tag,
    Link,
    Skeleton,
    Button,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProjects, reset } from '../../features/projectSlice';
import moment from 'moment';
import { ModalImage } from './ModalImage';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { t } from 'i18next';
import BANNERIMG from '../../assets/img/banner.jpg'
const ProjectCard = () => {

    const dispatch = useDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [imageValue, setImageValue] = useState('');

    const { projects, isLoading, isError, message } = useSelector((state) => state.projects);

    const filterProjects = projects.filter(project => project.estado === 'ACTIVO');

    useEffect(() => {
        async function loadData() {
            try {

                if (isError) {
                    // ToastChakra('Error', message, 'error', 1500);
                    console.log(message);
                }

                dispatch(getAllProjects())

                return () => {
                    dispatch(reset())
                }

            } catch (error) {
                console.log(error);
            }
        }

        loadData();

    }, [dispatch, isError, message]);

    const handleOpenModal = (index) => {
        setImageValue(index);
        setIsModalOpen(!isModalOpen)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    return (
        <Stack spacing={4} w="full">

            {
                isLoading ? (
                    <>
                        {Array.from({ length: 3 }).map((_, index) => (
                            <Stack
                                key={index}
                                spacing={{ base: 0, md: 4 }}
                                direction={{ base: 'column', md: 'row' }}
                                _hover={{
                                    boxShadow: 'base',
                                }}
                                borderWidth={'1px'}
                                _dark={{
                                    borderWidth: '1px',
                                    bg: 'primary.1000',
                                }}
                                p={[0, 0, 4, 4]}
                                rounded="md"
                                pos="relative"
                            >
                                <Flex>
                                    <Skeleton alignSelf={'center'} height="200px" width={["100%", "100%", "25rem"]} />
                                </Flex>
                                <Stack direction="column" spacing={2} w="100%" justifyContent="space-between" p={4}>
                                    <Flex justify="space-between">
                                        <Skeleton height="20px" width="80%" />
                                    </Flex>
                                    <Flex justify="space-between">
                                        <Skeleton height="16px" width="50%" />
                                    </Flex>
                                    <Box>
                                        <Skeleton height="32px" width="100%" />
                                        <Skeleton height="32px" width="80%" />
                                    </Box>
                                    <HStack spacing="4" justifyContent="space-between">
                                        {Array.from({ length: 3 }).map((_, index) => (
                                            <Skeleton key={index} height="24px" width="full" />
                                        ))}
                                    </HStack>
                                    <Stack direction="row" justify="space-between" alignItems="center">
                                        <Skeleton height="16px" width="30%" />
                                        <Stack direction={'row'}>
                                            <Skeleton height="30px" width="100px" />
                                            <Skeleton height="30px" width="80px" />
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Stack>
                        ))}
                    </>
                ) : (
                    <>
                        {filterProjects.map((data, index) => (
                            <Stack
                                key={index}
                                spacing={{ base: 0, md: 4 }}
                                direction={{ base: 'column', md: 'row' }}
                                _hover={{
                                    boxShadow: 'base',
                                }}
                                borderWidth={'1px'}
                                _dark={{
                                    borderWidth: '1px',
                                    bg: 'primary.1000'
                                }}
                                p={[0, 0, 4, 4]}
                                rounded="md"
                                pos="relative"
                            >
                                {data?.isFeatured && (
                                    <Flex
                                        alignItems="center"
                                        px={10}
                                        py={2}
                                        backgroundColor="rgba(98, 91, 248, 0.9)"
                                        borderTopStartRadius={'md'}
                                        pos="absolute"
                                        fontWeight="600"
                                        color="white"
                                        top={0}
                                        left={0}
                                        alignSelf={'center'}
                                    >
                                        <Text alignSelf={'center'}>EN DESARROLLO</Text>
                                    </Flex>
                                )}
                                <Flex ml="0 !important">
                                    <Image
                                        w={{ base: '100%', lg: '40rem' }}
                                        borderTopRadius={['md', 'md', 'none', 'none']}
                                        h="auto"
                                        maxH={200}
                                        alignSelf={'center'}
                                        cursor={'pointer'}
                                        objectFit="cover"
                                        src={data?.image?.secure_url ?? BANNERIMG}
                                        alt={data?.title}
                                        onClick={(index) => handleOpenModal(index?.target?.currentSrc)}
                                    />
                                    <ModalImage isModalOpen={isModalOpen} onClose={handleCloseModal} image={imageValue} />
                                </Flex>
                                <Stack direction="column" spacing={2} w="100%" mt={{ base: '5px !important', sm: 0 }} justifyContent={"space-between"} p={4}>
                                    <Stack direction={'column'} spacing={1}>
                                        <Heading fontSize={["sm", "lg"]} fontWeight="extrabold">
                                            {data?.title}
                                        </Heading>
                                        <Heading fontSize={["xs", "sm"]} fontWeight="thin" color="gray.600" _dark={{ color: 'gray.200' }}>
                                            by {
                                                data?.authors.map((author, index) => (
                                                    <Link _hover={{ color: 'primary.100' }} key={index} to={`https://github.com/${author}`} target='_blank' as={NavLink} fontWeight={'bold'}>@{author} {' '} </Link>
                                                ))
                                            }
                                        </Heading>
                                    </Stack>
                                    <Box>
                                        <Text fontSize={["12px", "14px"]} textAlign={'justify'} noOfLines={2}>
                                            {data?.description}
                                        </Text>
                                    </Box>
                                    <HStack spacing="1" justifyContent={["space-between", "flex-start", "flex-start", "flex-start"]}>
                                        {data?.topics.map((tag, index) => (
                                            <Tag
                                                key={index}
                                                size="sm"
                                                fontSize={["10px", "12px"]}
                                                variant="solid"
                                                bg="primary.50"
                                                _dark={{
                                                    bg: 'primary.800',
                                                    color: 'gray.200'
                                                }}
                                                borderColor="gray.100"
                                                color="gray.700"
                                                _focus={{
                                                    boxShadow: 'none',
                                                }}
                                            >
                                                #{tag}
                                            </Tag>
                                        ))}
                                    </HStack>
                                    <Stack
                                        direction={{ base: 'column-reverse', sm: 'row' }}
                                        justify="space-between"
                                        alignItems={{ base: 'flex-start', sm: 'center' }}
                                    >
                                        <Text fontSize={["10px", "12px"]} mt={{ base: 1, sm: 0 }} alignSelf={'center'}>
                                            {t("projects.created_on")} {moment(data?.createdAt).format('DD-MM-YYYY HH:mm:ss')}
                                        </Text>
                                        <Button
                                            as={NavLink}
                                            to={data?.url}
                                            target='_blank'
                                            size={'sm'}
                                            bg="primary.100"
                                            color="white"
                                            borderWidth={'1px'}
                                            _hover={{
                                                bg: 'transparent',
                                                color: 'primary.100',
                                                borderWidth: "1px",
                                                borderColor: 'primary.100',
                                            }}
                                            leftIcon={<FaExternalLinkAlt />}
                                            fontSize={["xs", "sm"]}
                                            w={["full", "auto", "auto", "auto"]}
                                            borderRadius={'sm'}
                                        >
                                            {t("projects.live_preview")}
                                        </Button>
                                    </Stack>
                                </Stack>
                            </Stack>
                        ))}
                    </>
                )}
        </Stack>
    );
};

export default ProjectCard;

