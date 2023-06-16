import {
    Heading,
    Text,
    Stack,
    useColorModeValue,
    Icon,
    Tooltip,
} from '@chakra-ui/react';
import { FaRegCommentDots } from 'react-icons/fa';
import { RiChatHeartFill } from 'react-icons/ri';
import { motion } from "framer-motion";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default function CardPost({ blog }) {

    const [isOpen, setIsOpen] = useState(false)
    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <motion.div layout onClick={toggleOpen}>
            <Stack
                p={4}
                bg={useColorModeValue('white', 'primary.1000')}
                rounded="xl"
                borderWidth="1px"
                _dark={{
                    bg: 'primary.1000',
                    borderColor: 'none',
                    _hover: {
                        borderColor: 'primary.200',
                        color: 'primary.200',
                        cursor: 'pointer'
                    }
                }}
                borderColor={'none'}
                h="100%"
                textAlign="left"
                align="start"
                cursor="pointer"
                shadow={'sm'}
                _hover={{
                    transform: "scale(1.01)",
                    shadow: "md",
                    borderColor: 'primary.200',
                    color: 'primary.200',
                    cursor: 'pointer',
                }}
                transition='all 0.3s ease-in-out'
                w="full"
            >
                <Stack
                    direction={'column'}
                    spacing={2}
                    w="full"
                    _hover={{
                        color: 'primary.100',
                    }}
                >
                    <Tooltip
                        label={blog?.title}
                        placement="top"
                        hasArrow
                        bg='primary.100'
                        color="white"
                    >
                        <Stack direction={'row'} justifyContent={'space-between'} w="full" >
                            <Heading
                                as={Link}
                                to={blog?.url}
                                target='_blank'
                                fontSize={{ base: 'md', lg: 'xl' }}
                                fontWeight="extrabold"
                                w="full"
                                noOfLines={1}
                            >
                                {blog?.title}
                            </Heading>
                            <Stack
                                direction={'row'}
                                width={'full'}
                                display={'flex'}
                                justifyContent={'flex-end'}
                                alignItems={'center'}
                                alignSelf={'center'}
                                fontWeight="bold"
                            >
                                <Text color="red.400">
                                    {blog?.positive_reactions_count}
                                </Text>
                                <Icon
                                    as={RiChatHeartFill}
                                    viewBox="0 0 24 24"
                                    color="red.500"
                                    w={6}
                                    h={6}
                                />
                                <Text color="primary.100">
                                    {blog?.comments_count}
                                </Text>
                                <Icon
                                    as={FaRegCommentDots}
                                    viewBox="0 0 24 24"
                                    color="primary.100"
                                    w={6}
                                    h={6}
                                />
                            </Stack>
                        </Stack>
                    </Tooltip>
                    <Stack
                        direction={'row'}
                        width={'full'}
                        display={'flex'}
                        justifyContent={'space-between'}
                        _hover={{
                            color: 'primary.100',
                        }}
                    >
                        <Stack>
                            <Text
                                fontSize={'sm'}
                                fontWeight={'semibold'}
                            >
                                {moment(blog?.published_at).format('DD/MM/YYYY - H:mm:ss')}
                            </Text>
                            <Text
                                fontSize={'14px'}
                                noOfLines={1}
                            >
                                {blog?.description}
                            </Text>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </motion.div>
    );
}