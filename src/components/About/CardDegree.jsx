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
import { MdWork } from 'react-icons/md';
import UNSA_logo from '../../assets/img/logos/UNSA.jpg';
import TECSUP_logo from '../../assets/img/logos/TECSUP.jpg';
import AGYLCODE_logo from '../../assets/img/logos/AGYLCODE.jpeg';
import ISOS_GROUP_logo from '../../assets/img/logos/ISOS_GROUP.png';
import MARIA_INMACULADA_logo from '../../assets/img/logos/MARIA_INMACULADA.jpg';
import PODER_JUDICIAL_logo from '../../assets/img/logos/PODER_JUDICIAL.png';
import { t } from 'i18next';
import { useTranslation } from "react-i18next";

const CardDegree = () => {

    const dataEducation = [
        {
            career: 'B. of Science in Economics',
            institution: 'UNSA',
            date: '2023 - present',
            url: 'https://www.unsa.edu.pe/',
            image: UNSA_logo,
            content_list:
                [
                    {
                        title: 'Empezando una nueva etapa en mi camino profesional: continuaré con estudios superiores. ¡Comprometido con el crecimiento y la excelencia!',
                    },
                ],
            content_list_en: [
                {
                    title: 'Starting a new stage in my professional path: I will continue with higher education, committed to growth and excellence!'
                }
            ],
            icon: 'RiChatHeartFill'
        },
        {
            career: 'B.Tech. in Software Engineering',
            institution: 'TECSUP',
            date: '2019 - 2022',
            url: 'https://www.tecsup.edu.pe/',
            image: TECSUP_logo,
            content_list:
                [
                    {
                        title: 'He realizado una variedad de cursos relacionados con Inteligencia Artificial, que incluyen temas como IA Explicable, Aprendizaje Automático en Grafos, Visión por Computadora, entre otros.',
                    },
                    {
                        title: 'A pocos meses de titularme como: Software Engineer.',
                    }
                ],
            content_list_en: [
                {
                    title: 'I have taken a variety of courses related to Artificial Intelligence, including topics such as Explainable AI, Machine Learning in Graphs, Computer Vision, among others.'
                },
                {
                    title: 'A few months away from graduating as a Software Engineer.'
                },
            ],
            icon: 'FaRegCommentDots'
        },
    ];

    const dataExperience = [
        {
            career: 'Software Engineer Intern',
            institution: 'AGYL CODE',
            date: 'Jun 2023 - present',
            url: 'https://www.google.com/',
            image: AGYLCODE_logo,
            content_list: [
                {
                    title: 'Como desarrollador Full Stack, diseño y mantengo aplicaciones web completas, tanto en el front-end como en el back-end. Trabajo en todas las etapas del ciclo de desarrollo de software, desde el análisis hasta la implementación y pruebas.',
                },
                {
                    title: 'En el back-end, desarrollo la lógica empresarial y gestiono bases de datos e integraciones con servicios externos utilizando tecnologías como Node.js, Python o Django.',
                },
            ],
            content_list_en: [
                {
                    title: 'As a Full Stack developer, I design and maintain complete web applications, both front-end and back-end. I work in all stages of the software development cycle, from analysis to implementation and testing.'
                },
                {
                    title: 'On the back-end, I develop business logic and manage databases and integrations with external services using technologies such as Node.js, Python or Django.'
                }
            ]
        },
        {
            career: 'UX/UI Designer',
            institution: 'ISOS GROUP',
            date: 'May 2023 - Jun 2023',
            url: 'https://www.isosgroup.pe/',
            image: ISOS_GROUP_logo,
            content_list: [
                {
                    title: 'Como diseñador UX/UI, creo experiencias de usuario excepcionales y diseños atractivos. Utilizo técnicas de investigación para desarrollar flujos de usuarios intuitivos y wireframes.',
                },
                {
                    title: 'Siempre aseguro que mis diseños sean adaptables a diferentes dispositivos y resoluciones, siguiendo las mejores prácticas de diseño responsivo.',
                },
                {
                    title: 'Además, me aseguro de que mis diseños sean accesibles para todos los usuarios, siguiendo las pautas de accesibilidad.',
                }
            ],
            content_list_en: [
                {
                    title: 'As a UX/UI designer, I create exceptional user experiences and engaging designs. I use research techniques to develop intuitive user flows and wireframes.'
                },
                {
                    title: 'I always ensure that my designs are adaptable to different devices and resolutions, following responsive design best practices.'
                },
                {
                    title: 'I also ensure that my designs are accessible to all users, following accessibility guidelines.'
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
                    title: 'Como desarrollador Full Stack, diseñé y realizé mantenimiento de aplicaciones web completas, tanto en el front-end como en el back-end. Trabajo en todas las etapas del ciclo de desarrollo de software, desde el análisis hasta la implementación y pruebas.',
                },
                {
                    title: 'En el back-end, desarrollé la lógica empresarial y gestioné bases de datos e integraciones con servicios externos utilizando tecnologías como Node.js, Python o Django.',
                },
                {
                    title: 'En el front-end, utilicé tecnologías como React.js, Next.js, HTML5, CSS3, JavaScript, TypeScript, entre otros.',
                }
            ],
            content_list_en: [
                {
                    title: 'As a Full Stack developer, I design and maintain complete web applications, both front-end and back-end. I work in all stages of the software development cycle, from analysis to implementation and testing.'
                },
                {
                    title: 'On the back-end, I developed business logic and managed databases and integrations with external services using technologies such as Node.js, Python or Django.'
                },
                {
                    title: 'On the front-end, I used technologies such as React.js, Next.js, HTML5, CSS3, JavaScript, TypeScript, among others.'
                },
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
                    title: 'Como desarrollador Frontend, diseñé y realicé mantenimiento de aplicaciones web completas, tanto en el front-end como en el back-end. Trabajo en todas las etapas del ciclo de desarrollo de software, desde el análisis hasta la implementación y pruebas.',
                },
                {
                    title: 'En el front-end, utilicé tecnologías como React.js, Next.js, HTML5, CSS3, JavaScript, TypeScript, entre otros.',
                },
                {
                    title: 'En el back-end, desarrollé la lógica empresarial y gestioné bases de datos e integraciones con servicios externos utilizando tecnologías como Spring Boot, Java y PostgreSQL.',
                }
            ],
            content_list_en: [
                {
                    title: 'As a Frontend developer, I designed and maintained complete web applications, both front-end and back-end. I work in all stages of the software development cycle, from analysis to implementation and testing.'
                },
                {
                    title: 'On the front-end, I used technologies such as React.js, Next.js, HTML5, CSS3, JavaScript, TypeScript, among others.'
                },
                {
                    title: 'En el back-end, desarrollé la lógica empresarial y gestioné bases de datos e integraciones con servicios externos utilizando tecnologías como Spring Boot, Java y PostgreSQL.'
                },
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
                    fontSize={{ base: 'xl', lg: '3xl' }}
                    fontWeight="extrabold"
                    letterSpacing="tight"
                    lineHeight="shorter"
                >
                    {t("about_me.title")}
                </Heading>
                <Text
                    color={'gray.800'}
                    _dark={{
                        color: 'gray.200'
                    }}
                    fontSize={["sm","md"]}
                >
                    {t("about_me.subtitle")}
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
                        {t("about_me.education")}
                    </Heading>
                </Stack>
                {dataEducation.map((degree, index) => (
                    <Flex key={index} mb="10px" justify-content={'flex-start'}>
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
                    fontSize={{ base: 'xl', lg: '3xl' }}
                    fontWeight="extrabold"
                    letterSpacing="tight"
                    lineHeight="shorter"
                >
                    {t("about_me.work_experience.title")}
                </Heading>
                <Text
                    color={'gray.800'}
                    _dark={{
                        color: 'gray.200'
                    }}
                    fontSize={["sm","md"]}
                >
                    {t("about_me.work_experience.subtitle")}
                </Text>
            </Stack>
            <Stack direction={'column'} w="full" spacing={0}>
                <Stack direction={'row'}>
                    <Square size='42px' bg='primary.100' color='white' borderRadius={'full'}>
                        <MdWork fontSize={"20px"} />
                    </Square>
                    <Heading
                        fontSize={["md","xl"]}
                        fontWeight="extrabold"
                        mb={0}
                        textAlign={'left'}
                        alignSelf={"center"}
                    >
                        {t("about_me.work_experience.companies")}
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


const Card = ({ title, career, institution, date, url, image, content_list, content_list_en }) => {
    
    const { i18n } = useTranslation();

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
                    display={'flex'}
                    w='full'
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
                <VStack spacing={2} mt={3} mb={3} textAlign="start" justify-content={'flex-start'}>
                    <Stack
                        direction={'column'}
                        spacing={2}
                        justify-content={'flex-start'}
                        textAlign={'start'}
                        fontSize={{
                            base: 'xs',
                            lg: 'md'
                        }}
                    >
                        {
                            i18n.language === "es" ?
                            content_list?.map((content, index) => (
                                <List key={index} textAlign={'start'}>
                                    <ListItem>
                                        <ListIcon as={MdCheckCircle} color='primary.100' boxSize={5} />
                                        {content?.title}
                                    </ListItem>
                                </List>
                            )) : content_list_en?.map((content, index) => (
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