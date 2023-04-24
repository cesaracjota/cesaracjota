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

export default function CardPost({ blog }) {

    const [isOpen, setIsOpen] = useState(false)
    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <motion.div layout onClick={toggleOpen}>

            <Stack
                p={4}
                bg={useColorModeValue('purple.50', 'primary.1000')}
                rounded="xl"
                borderWidth="1px"
                borderColor={useColorModeValue('gray.200', 'purple.800')}
                h="100%"
                textAlign="left"
                align="start"
                cursor="pointer"
                shadow={'sm'}
                _hover={{
                    transform: "scale(1.02)",
                    shadow: "md",
                }}
                transition='all 0.3s ease-in-out'
                w="full"
            >
                <Stack
                    direction={'column'}
                    spacing={2}
                    w="full"
                >
                    <Tooltip
                        label={blog?.title}
                        placement="top"
                        hasArrow
                        bg='primary.100'
                        color="white"
                    >
                        <Stack direction={'row'} justifyContent={'space-between'} w="full">
                            <Heading
                                as={Link}
                                to={blog?.url}
                                target='_blank'
                                color={useColorModeValue('purple.600', 'purple.600')}
                                fontSize={'xl'}
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
                                _dark={{
                                    color: 'purple.600'
                                }}
                                fontWeight="bold"
                            >
                                <Text>
                                    {blog?.positive_reactions_count}
                                </Text>
                                <Icon
                                    as={RiChatHeartFill}
                                    viewBox="0 0 24 24"
                                    color="red.500"
                                    w={6}
                                    h={6}
                                />
                                <Text>
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
                    >
                        <Stack>
                            <Text
                                color={'gray.700'}
                                fontWeight="bold"
                                _dark={{
                                    color: 'purple.100'
                                }}
                            >
                                {blog?.published_at}
                            </Text>
                            <Text
                                color={'gray.600'}
                                _dark={{
                                    color: 'white'
                                }}
                                fontSize={'17px'}
                                fontWeight={'semibold'}
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