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
    chakra,
    VStack,
    Flex,
    Box,
    Square,
} from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FaUniversity } from 'react-icons/fa';
// import UNSA_logo from '../../assets/img/logos/UNSA.jpg';
import TECSUP_logo from '../../assets/img/logos/TECSUP.jpg';
import GOOGLE_logo from '../../assets/img/logos/google.png';
import ISOS_GROUP_logo from '../../assets/img/logos/ISOS_GROUP.png';
import MARIA_INMACULADA_logo from '../../assets/img/logos/MARIA_INMACULADA.jpg';
import PODER_JUDICIAL_logo from '../../assets/img/logos/PODER_JUDICIAL.png';

const CardDegree = () => {

    const dataEducation = [
        // {
        //     career: 'B.Tech. in Telecomunications Engineering',
        //     institution: 'UNSA',
        //     date: '2023 - present',
        //     url: 'https://www.unsa.edu.pe/',
        //     image: UNSA_logo,
        //     content_list:
        //         [
        //             {
        //                 title: 'I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.',
        //             },
        //             {
        //                 title: 'Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.',
        //             },
        //             {
        //                 title: 'During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.',
        //             },
        //         ],
        //     icon: 'RiChatHeartFill'
        // },
        {
            career: 'B.Tech. in Computer Engineering',
            institution: 'TECSUP',
            date: '2019 - 2022',
            url: 'https://www.tecsup.edu.pe/',
            image: TECSUP_logo,
            content_list:
                [
                    {
                        title: 'I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.',
                    },
                    {
                        title: 'Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.',
                    },
                    {
                        title: 'I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.',
                    },
                ],
            icon: 'FaRegCommentDots'
        },
    ];

    const dataExperience = [
        {
            career: 'Software Engineer Intern',
            institution: 'GOOGLE',
            date: 'Jun 2023 - present',
            url: 'https://www.google.com/',
            image: GOOGLE_logo,
            content_list: [
                {
                    title: 'I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.',
                },
                {
                    title: 'Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.',
                },
                {
                    title: 'During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.',
                },
            ],
        },
        {
            career: 'UX/UI Designer',
            institution: 'ISOS GROUP',
            date: 'May 2023 - Jun 2023',
            url: 'https://www.isosgroup.pe/',
            image: ISOS_GROUP_logo,
            content_list: [
                {
                    title: 'I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.',
                },
                {
                    title: 'Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.',
                },
                {
                    title: 'During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.',
                },
            ]
        },
        {
            career: 'Full Stack Software Developer',
            institution: 'MARIA INMACULADA SCHOOL',
            date: 'Dec 2022 - May 2023',
            url: 'https://www.maria-inmaculada.edu.pe/',
            image: MARIA_INMACULADA_logo,
            content_list: [
                {
                    title: 'I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.',
                },
                {
                    title: 'Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.',
                },
                {
                    title: 'During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.',
                }
            ]
        },
        {
            career: 'Frontend Software Developer',
            institution: 'PODER JUDICIAL',
            date: 'May 2022 - Nov 2022',
            url: 'https://www.pj.gob.pe/wps/wcm/connect/cortesuprema/s_cortes_suprema_home/as_inicio/as_inicio',
            image: PODER_JUDICIAL_logo,
            content_list: [
                {
                    title: 'I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.',
                },
                {
                    title: 'Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.',
                },
                {
                    title: 'During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.',
                }
            ]
        }
    ]

    return (
        <>
            <Stack
                textAlign={"left"}
                w="full"
                mb={8}
            >
                <Heading
                    as="h1"
                    fontSize={{ base: 'xl', lg: '4xl' }}
                    fontWeight="extrabold"
                    letterSpacing="tight"
                    lineHeight="shorter"
                >
                    {/* {t("popular_blogs")} */}
                    Degrees Received
                </Heading>
                <Text
                    color={'gray.800'}
                    _dark={{
                        color: 'gray.200'
                    }}
                    fontSize={["sm","lg"]}
                >
                    My academic background
                </Text>
            </Stack>

            <Stack direction={'column'} w="full" spacing={0}>
                <Stack direction={'row'}>
                    <Square size='42px' bg='primary.100' color='white' borderRadius={'full'}>
                        <FaUniversity fontSize={"20px"} />
                    </Square>
                    <Heading
                        fontSize={["sm","xl"]}
                        fontWeight="extrabold"
                        mb={0}
                        textAlign={'left'}
                        alignSelf={"center"}
                    >
                        EDUCATIÓN
                    </Heading>
                </Stack>
                {dataEducation.map((degree, index) => (
                    <Flex key={index} mb="10px">
                        <LineWithDot />
                        <Card {...degree} />
                    </Flex>
                ))}
            </Stack>

            <Stack
                textAlign={"left"}
                w="full"
                mb={8}
                mt={8}
            >
                <Heading
                    as="h1"
                    fontSize={{ base: 'xl', lg: '4xl' }}
                    fontWeight="extrabold"
                    letterSpacing="tight"
                    lineHeight="shorter"
                >
                    {/* {t("popular_blogs")} */}
                    Work experience
                </Heading>
                <Text
                    color={'gray.800'}
                    _dark={{
                        color: 'gray.200'
                    }}
                    fontSize={["sm","lg"]}
                >
                    My work experience in the software and systems development sector
                </Text>
            </Stack>
            <Stack direction={'column'} w="full" spacing={0}>
                <Stack direction={'row'}>
                    <Square size='42px' bg='primary.100' color='white' borderRadius={'full'}>
                        <FaUniversity fontSize={"20px"} />
                    </Square>
                    <Heading
                        fontSize={["md","xl"]}
                        fontWeight="extrabold"
                        mb={0}
                        textAlign={'left'}
                        alignSelf={"center"}
                    >
                        COMPANIES
                    </Heading>
                </Stack>
                {dataExperience.map((degree, index) => (
                    <Flex key={index} mb="10px">
                        <LineWithDot />
                        <Card {...degree} />
                    </Flex>
                ))}
            </Stack>
        </>
    )
}


const Card = ({ title, career, institution, date, url, image, content_list }) => {
    return (
        <Stack
            p={{ base: 4, lg: 6 }}
            spacing={5}
            rounded="lg"
            pos="relative"
            direction={{
                base: 'column',
                lg: 'row'
            }}
        >
            <Image
                src={image}
                alt={title}
                loading="lazy"
                alignSelf={{
                    base: 'flex-start',
                    lg: 'center'
                }}
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
                    base: '60px',
                    lg: '150px'
                }}
                maxH={{
                    base: '60px',
                    lg: '150px'
                }}
                transition='all 0.3s ease-in-out'
            />
            <Box>
                <Stack
                    direction={{
                        base: 'column',
                        lg: 'row'
                    }}
                    justifyContent={{
                        lg: 'space-between'
                    }}
                >
                    <Stack
                        direction={'column'}
                        spacing={0}
                    >
                        <Heading
                            as={Link}
                            to={url}
                            target='_blank'
                            _hover={{ color: 'primary.100' }}
                            fontSize={{
                                base: 'sm',
                                md: '2xl'
                            }}
                            fontWeight="extrabold"
                            noOfLines={1}
                        >
                            {institution}
                        </Heading>
                        <Text
                            color={'gray.700'}
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
                            {career}
                        </Text>
                    </Stack>
                    <Heading
                        color={'gray.700'}
                        _dark={{
                            color: 'gray.300'
                        }}
                        fontSize={{
                            base: 'sm',
                            md: 'lg'
                        }}
                        fontWeight="extrabold"
                    >
                        {date}
                    </Heading>
                </Stack>
                <VStack spacing={2} mt={3} mb={3} textAlign="left">
                    <Stack
                        direction={'column'}
                        spacing={2}
                        fontSize={{
                            base: 'xs',
                            lg: 'md'
                        }}
                    >
                        {
                            content_list?.map((content, index) => (
                                <List key={index}>
                                    <ListItem>
                                        <ListIcon as={MdCheckCircle} color='primary.100' boxSize={5} />
                                        {content?.title}
                                    </ListItem>
                                </List>
                            ))
                        }
                    </Stack>
                </VStack>
            </Box>
        </Stack>
    );
};

const LineWithDot = () => {
    return (
        <Flex pos="relative" alignItems="center">
            <chakra.span
                position="absolute"
                left="50%"
                height="calc(100% + 10px)"
                border="1px solid"
                borderColor={useColorModeValue('primary.100', 'primary.100')}
                top="0px"
            />
            <Box pos="relative" p="20px">
                <Box
                    pos="absolute"
                    width="100%"
                    height="100%"
                    bottom="0"
                    right="0"
                    top="0"
                    left="0"
                    backgroundSize="cover"
                    backgroundRepeat="no-repeat"
                    backgroundPosition="center center"
                    backgroundColor="rgb(255, 255, 255)"
                    borderRadius="100px"
                    border="3px solid rgb(98, 91, 248)"
                    backgroundImage="none"
                    opacity={1}
                />
            </Box>
        </Flex>
    );
};



export default CardDegree;