import React from 'react'
import {
    Heading,
    Text,
    Stack,
    useColorModeValue,
    Image,
    List,
    ListItem,
    ListIcon,
} from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';

const CardDegree = ({ data }) => {

    const borderColor = useColorModeValue('gray.200', 'purple.800');
    const bgColor = useColorModeValue('purple.50', 'primary.900');
    const textColor = useColorModeValue('white', 'white');

    return (
        <>
            <Stack
                textAlign={{
                    base: 'center',
                    lg: 'left'
                }}
                w="full"
                mb={8}
            >
                <Heading
                    fontSize={'3xl'}
                    fontWeight="extrabold"
                    w="full"
                    noOfLines={1}
                >
                    Degrees Received
                </Heading>
                <Text
                    color={'gray.600'}
                    _dark={{
                        color: 'gray.400'
                    }}
                >
                    My academic background
                </Text>
            </Stack>

            {
                data?.map((data, index) => (
                    <Stack
                        key={index}
                        direction={{
                            base: 'column',
                            lg: 'row'
                        }}
                        spacing={4}
                        mb={8}
                    >
                        <Image
                            src={data?.cover_image}
                            alt={data?.title}
                            loading="lazy"
                            alignSelf={'center'}
                            h='full'
                            w='full'
                            rounded="full"
                            objectFit={'cover'}
                            shadow={'lg'}
                            _hover={{
                                transform: "scale(1.03)",
                                shadow: "md",
                            }}
                            maxW={{
                                base: '150',
                                lg: '200'
                            }}
                            maxH={{
                                base: '150',
                                lg: '200'
                            }}
                            transition='all 0.3s ease-in-out'
                        />
                        {/* </Stack> */}

                        {/* card */}

                        <Stack
                            bg={bgColor}
                            borderWidth="1px"
                            borderColor={borderColor}
                            h="100%"
                            textAlign="left"
                            align="start"
                            cursor="pointer"
                            shadow={'sm'}
                            rounded="lg"
                            w="full"
                            direction={{
                                base: 'column',
                                lg: 'row'
                            }}
                            _hover={{
                                shadow: "md",
                            }}
                            transition='all 0.3s ease-in-out'
                        >
                            <Stack
                                direction={'column'}
                                spacing={0}
                                w="full"
                                h="full"
                                alignSelf="center"
                            >
                                {/* head card */}

                                <Stack
                                    direction={'row'}
                                    justifyContent={'space-between'}
                                    w="full"
                                    h="full"
                                    bg={'primary.100'}
                                    px={6}
                                    py={3}
                                    roundedTop="lg"
                                >
                                    <Stack
                                        direction={'column'}
                                        spacing={0}
                                    >
                                        <Heading
                                            color={textColor}
                                            fontSize={{
                                                base: 'sm',
                                                md: '2xl'
                                            }}
                                            fontWeight="extrabold"
                                            noOfLines={1}
                                        >
                                            {data?.institution}
                                        </Heading>
                                        <Text
                                            color={'gray.300'}
                                            _dark={{
                                                color: 'gray.300'
                                            }}
                                            fontSize={{
                                                base: 'xs',
                                                md: 'lg'
                                            }}
                                            fontWeight={'semibold'}
                                            noOfLines={1}
                                        >
                                            {data?.career}
                                        </Text>
                                    </Stack>
                                    <Heading
                                        color={textColor}
                                        fontSize={{
                                            base: 'sm',
                                            md: '2xl'
                                        }}
                                        fontWeight="extrabold"
                                        alignSelf={'center'}
                                    >
                                        {data?.date}
                                    </Heading>
                                </Stack>

                                {/* body card */}

                                <Stack
                                    direction={'column'}
                                    w={'full'}
                                    h={'full'}
                                    px={6}
                                    py={6}
                                >
                                    <Stack
                                        direction={'column'}
                                        spacing={4}
                                        fontSize={'lg'}
                                    >
                                        {
                                            data?.content_list?.map((content, index) => (
                                                <List spacing={4} key={index}>
                                                    <ListItem>
                                                        <ListIcon as={MdCheckCircle} color='purple.600' boxSize={6} />
                                                        {content?.title}
                                                    </ListItem>
                                                </List>
                                            ))
                                        }
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                ))
            }
        </>

    )
}

export default CardDegree