import React, { useEffect, useState } from 'react';
import {
    Box,
    Stack,
    HStack,
    Flex,
    Text,
    Image,
    Icon,
    Heading,
    Tag,
    Link,
    Skeleton,
    useDisclosure,
    Button,
} from '@chakra-ui/react';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProjects, reset } from '../../features/projectSlice';
import { ToastChakra } from '../../helpers/toast';
import moment from 'moment';
import WebsiteModal from './WebsiteModal';
import { ModalImage } from '../../helpers/ModalImage';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = () => {

    const dispatch = useDispatch();

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { projects, isLoading, isError, message } = useSelector((state) => state.projects);

    useEffect(() => {
        async function loadData() {
            try {

                if (isError) {
                    ToastChakra('Error', message, 'error', 1500);
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

    const handleOpenModal = () => {
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
                            cursor={'pointer'}
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
                    {projects.map((data, index) => (
                        <Stack
                            key={index}
                            spacing={{ base: 0, md: 4 }}
                            direction={{ base: 'column', md: 'row' }}
                            _hover={{
                                boxShadow: 'base',
                            }}
                            cursor={'pointer'}
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
                                    p={2}
                                    bg="primary.100"
                                    pos="absolute"
                                    fontSize="sm"
                                    fontWeight="500"
                                    color="white"
                                    top={0}
                                    left={0}
                                    alignSelf={'center'}
                                >
                                    <Text alignSelf={'center'}>FEATURED</Text> &nbsp; <Icon alignItems={'center'} as={AiOutlineExclamationCircle} h={4} w={4} />
                                </Flex>
                            )}
                            <Flex ml="0 !important">
                                <Image
                                    w={{ base: '100%', lg: '40rem' }}
                                    borderTopRadius={['md', 'md', 'none', 'none']}
                                    h="auto"
                                    maxH={200}
                                    alignSelf={'center'}
                                    objectFit="cover"
                                    src={data?.image?.secure_url}
                                    alt={data?.title}
                                    onClick={handleOpenModal}
                                />
                                <ModalImage isModalOpen={isModalOpen} onClose={handleCloseModal} image={data?.image}/>
                            </Flex>
                            <Stack direction="column" spacing={2} w="100%" mt={{ base: '5px !important', sm: 0 }} justifyContent={"space-between"} p={4}>
                                <Stack direction={'column'} spacing={1}>
                                    <Heading fontSize={["sm", "lg"]} fontWeight="extrabold">
                                        {data?.title}
                                    </Heading>
                                    <Heading fontSize={["xs", "sm"]} fontWeight="thin" color="gray.600" _dark={{ color: 'gray.200' }}>
                                        by {
                                            data?.authors.map((author, index) => (
                                                <Link _hover={{ color: 'primary.100' }} key={index} to={`https://github.com/${author}`} target='_blank' as={NavLink} fontWeight={'bold'}>{author} {' '} </Link>
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
                                            {tag}
                                        </Tag>
                                    ))}
                                </HStack>
                                <Stack
                                    direction={{ base: 'column-reverse', sm: 'row' }}
                                    justify="space-between"
                                    alignItems={{ base: 'flex-start', sm: 'center' }}
                                >
                                    <Text fontSize={["10px", "12px"]} mt={{ base: 1, sm: 0 }} alignSelf={'center'}>
                                        Created on {moment(data?.createdAt).format('DD-MM-YYYY HH:mm:ss')}
                                    </Text>
                                    <Stack spacing={2} direction={'row'}>
                                        <WebsiteModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} websiteUrl={data?.url}/>
                                        <Button
                                            as={NavLink}
                                            to={data?.url}
                                            target={'_blank'}
                                            size={'sm'}
                                            bg="green.500"
                                            color="white"
                                            borderWidth={'1px'}
                                            _hover={{
                                                bg: 'transparent',
                                                color: 'green.500',
                                                borderWidth: "1px",
                                                borderColor: 'green.500',
                                            }}
                                            leftIcon={<FaExternalLinkAlt />}
                                            fontSize={["xs", "sm"]}
                                            w={["full", "auto", "auto", "auto"]}
                                            borderRadius={'sm'}
                                        >
                                            Open
                                        </Button>
                                    </Stack>
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

