import React, { useState } from 'react';
import { chakra, Stack, Image, Button, Icon, useBreakpointValue, Text, Heading } from '@chakra-ui/react';
import { BsArrowUpRight } from 'react-icons/bs';
import { useTranslation } from "react-i18next";
import CV from '../../assets/pdf/CV.pdf';

import { TypeAnimation } from 'react-type-animation';

const Contenido = () => {

    const { t } = useTranslation();

    const isDesktop = useBreakpointValue({
        base: false,
        lg: true,
    });

    const [textColor, setTextColor] = useState('gray.500');
    const [textColor2, setTextColor2] = useState('gray.500');

    const handleTextColorChange = (color) => {
        setTextColor(color);
    };

    const handleTextColorChangeMobile = (color) => {
        setTextColor2(color);
    }

    return (
        <>
            <Stack
                direction={{ base: 'column', lg: 'row' }}
                spacing={{ base: 4, lg: 10 }}
                mb={4}
                id='about'
            >
                {
                    !isDesktop ? (
                        <>
                            <Image
                                rounded={'3xl'}
                                height={{ base: '250px', sm: '250px', lg: '250px' }}
                                width={{ base: '250px', sm: '250px', lg: '250px' }}
                                objectFit={'cover'}
                                src={'https://avatars.githubusercontent.com/u/81894363?v=4'}
                                boxShadow={'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;'}
                                alt={'Cesar Acjota'}
                                alignSelf={'center'}
                            />
                            <Stack
                                direction={'column'}
                                spacing={6}
                                flex={1}
                                py={{
                                    base: '2',
                                    lg: 4,
                                }}
                                alignSelf={'center'}
                            >
                                <Heading color={textColor2} fontWeight={'extrabold'} size={'xs'} textAlign={'center'}>
                                    <TypeAnimation
                                        sequence={[
                                            () => handleTextColorChangeMobile("gray.500"),
                                            t("welcomeMessage1"),
                                            2000,
                                            () => handleTextColorChangeMobile("blue.500"),
                                            t("welcomeMessage2"),
                                            3000,
                                            () => handleTextColorChangeMobile("pink.500"),
                                            t("welcomeMessage3"),
                                            3000,
                                            () => handleTextColorChangeMobile("yellow.500"),
                                            t("welcomeMessage4"),
                                            3000,
                                        ]}
                                        wrapper="span"
                                        cursor={true}
                                        repeat={Infinity}
                                        loop={true}
                                        deletionSpeed={100}
                                        speed={60}
                                        style={{ fontSize: '2em', display: 'inline-block', fontWeight: 'bold' }}
                                    />
                                </Heading>
                                <Text textAlign={'justify'} fontSize={'sm'}>
                                    {t("presentationMessage")}
                                </Text>
                                <Stack
                                    direction={{
                                        base: 'row',
                                        lg: 'row',
                                    }}
                                    spacing={[2, 4]}
                                    justifyContent={'space-between'}
                                    display={'flex'}
                                    alignSelf={{
                                        base: 'center',
                                        lg: 'flex-start',
                                    }}
                                    w={'full'}
                                >
                                    <Button
                                        w="full"
                                        as="a"
                                        href="https://twitter.com/cesar_acjota"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        rightIcon={
                                            <Icon
                                                as={BsArrowUpRight}
                                                w={5}
                                                h={5}
                                            />
                                        }
                                        size={{ base: 'sm', lg: 'md' }}
                                        colorScheme='linkedin'
                                        _dark={{
                                            bg: 'linkedin.600',
                                            color: 'white',
                                            _hover: {
                                                bg: 'linkedin.700'
                                            }
                                        }}
                                        variant={'outline'}
                                    >
                                        Linkedin
                                    </Button>
                                    <Button
                                        w="full"
                                        as="a"
                                        href="https://github.com/cesaracjota"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        rightIcon={
                                            <Icon
                                                as={BsArrowUpRight}
                                                w={5}
                                                h={5}
                                            />
                                        }
                                        size={{ base: 'sm', lg: 'md' }}
                                        colorScheme='gray'
                                        _dark={{
                                            bg: 'gray.600',
                                            color: 'white',
                                            _hover: {
                                                bg: 'gray.700'
                                            }
                                        }}
                                        variant={'outline'}
                                    >
                                        GitHub
                                    </Button>
                                </Stack>
                                <Button
                                    w="full"
                                    as="a"
                                    href={CV}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    rightIcon={
                                        <Icon
                                            as={BsArrowUpRight}
                                            w={5}
                                            h={5}
                                        />
                                    }
                                    size={{ base: 'sm', lg: 'md' }}
                                    bg='primary.100'
                                    color="white"
                                    _hover={{
                                        bg: 'primary.200'
                                    }}
                                    _dark={{
                                        bg: 'primary.100',
                                        color: 'white',
                                        _hover: {
                                            bg: 'primary.200'
                                        }
                                    }}
                                    variant={'solid'}
                                    boxShadow={'0 5px 20px 0px rgb(66 58 246 / 50%)'}
                                >
                                    {t("resume")}
                                </Button>
                            </Stack>
                        </>

                    ) : (
                        <>
                            <Stack
                                direction={'column'}
                                spacing={6}
                                flex={1}
                                py={{
                                    base: '2',
                                    lg: 4,
                                }}
                                alignSelf={'center'}
                            >
                                <Heading fontWeight={'extrabold'} color={textColor} _dark={{ color: textColor }} fontSize={'20px'} textAlign={{ base: 'center', lg: 'start' }}>
                                    <TypeAnimation
                                        sequence={[
                                            () => handleTextColorChange("gray.600"),
                                            t("welcomeMessage1"),
                                            2000,
                                            () => handleTextColorChange("blue.600"),
                                            t("welcomeMessage2"),
                                            2000,
                                            () => handleTextColorChange("pink.600"),
                                            t("welcomeMessage3"),
                                            2000,
                                            () => handleTextColorChange("primary.100"),
                                            t("welcomeMessage4"),
                                            2000,
                                        ]}
                                        wrapper="span"
                                        cursor={true}
                                        repeat={Infinity}
                                        loop={true}
                                        deletionSpeed={110}
                                        speed={80}
                                        style={{ fontSize: '2em', display: 'inline-block', fontWeight: 'extrabold' }}
                                    />
                                </Heading>

                                <chakra.p textAlign={'justify'} fontSize={'18px'}>
                                    {t("presentationMessage")}.
                                </chakra.p>
                                <Stack
                                    direction={{
                                        base: 'row',
                                        lg: 'row',
                                    }}
                                    spacing={[2, 4]}
                                    justifyContent={'space-between'}
                                    display={'flex'}
                                    alignSelf={{
                                        base: 'center',
                                        lg: 'flex-start',
                                    }}
                                    w={'full'}
                                >
                                    <Button
                                        w="full"
                                        as="a"
                                        href="https://www.linkedin.com/in/cesaracjota/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        rightIcon={
                                            <Icon
                                                as={BsArrowUpRight}
                                                w={5}
                                                h={5}
                                            />
                                        }
                                        size={{ base: 'sm', lg: 'md' }}
                                        colorScheme='linkedin'
                                        _dark={{
                                            bg: 'linkedin.600',
                                            color: 'white',
                                            _hover: {
                                                bg: 'linkedin.700'
                                            }
                                        }}
                                        variant={'solid'}
                                    >
                                        Linkedin
                                    </Button>
                                    <Button
                                        w="full"
                                        as="a"
                                        href="https://github.com/cesaracjota"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        rightIcon={
                                            <Icon
                                                as={BsArrowUpRight}
                                                w={5}
                                                h={5}
                                            />
                                        }
                                        size={{ base: 'sm', lg: 'md' }}
                                        colorScheme='gray'
                                        _dark={{
                                            bg: 'gray.600',
                                            color: 'white',
                                            _hover: {
                                                bg: 'gray.700'
                                            }
                                        }}
                                        variant={'solid'}
                                    >
                                        GitHub
                                    </Button>
                                </Stack>
                                <Button
                                    w="full"
                                    as="a"
                                    href={CV}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    rightIcon={
                                        <Icon
                                            as={BsArrowUpRight}
                                            w={5}
                                            h={5}
                                        />
                                    }
                                    size={{ base: 'sm', lg: 'md' }}
                                    bg='primary.100'
                                    _hover={{
                                        bg: 'primary.200'
                                    }}
                                    color="white"
                                    _dark={{
                                        bg: 'primary.100',
                                        color: 'white',
                                        _hover: {
                                            bg: 'primary.300'
                                        }
                                    }}
                                    variant={'solid'}
                                    boxShadow={'0 5px 20px 0px rgb(66 58 246 / 50%)'}
                                >
                                    {t("resume")}
                                </Button>
                            </Stack>
                            <Image
                                rounded={'3xl'}
                                height={{ base: '300px', sm: '300px', lg: '300px' }}
                                width={{ base: '300px', sm: '300px', lg: '300px' }}
                                objectFit={'cover'}
                                src={'https://avatars.githubusercontent.com/u/81894363?v=4'}
                                boxShadow={'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;'}
                                alt={'Cesar Acjota'}
                                alignSelf={'center'}
                            />
                        </>
                    )
                }
            </Stack>
        </>
    )
}

export default Contenido;