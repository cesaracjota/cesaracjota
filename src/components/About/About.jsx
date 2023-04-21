import React from 'react';
import { Heading, chakra, Stack, Image, Button, Icon } from '@chakra-ui/react';
import { BsArrowUpRight } from 'react-icons/bs';
import CV from '../../assets/pdf/CV.pdf';
import { useTranslation } from "react-i18next";

const About = () => {

    const { t } = useTranslation();

    return (
        <>
            <Stack
                direction={{ base: 'column', lg: 'row' }}
                spacing={{ base: 4, lg: 10 }}
                mb={4}
                id='about'
            >
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
                    <Heading fontWeight={'extrabold'} size={{ base: 'xl', lg: '2xl' }} textAlign={{ base: 'center', lg: 'start' }}>
                        {t("welcomeMessage")} <span style={{ fontWeight: 'extrabold', color: '#8612fa' }}>Cesar Acjota.</span>
                    </Heading>
                    <chakra.p textAlign={'justify'} fontSize={{base: 16, lg: 20}}>
                        {t("presentationMessage")}
                    </chakra.p>
                    <Stack
                        direction={{
                            base: 'row',
                            lg: 'row',
                        }}
                        spacing={[2,4]}
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
                            colorScheme='twitter'
                            _dark={{
                                bg: 'twitter.600',
                                color: 'white',
                                _hover: {
                                    bg: 'twitter.700'
                                }
                            }}
                            variant={'outline'}
                        >
                            Twitter
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
                        <Button
                            w="full"
                            as="a"
                            href="https://youtube.com/@agylcode"
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
                            colorScheme='red'
                            _dark={{
                                bg: 'red.600',
                                color: 'white',
                                _hover: {
                                    bg: 'red.700'
                                }
                            }}
                            variant={'outline'}
                        >
                            YouTube
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
                            colorScheme='purple'
                            _dark={{
                                bg: 'purple.600',
                                color: 'white',
                                _hover: {
                                    bg: 'purple.700'
                                }
                            }}
                            variant={'solid'}
                        >
                            {t("resume")}
                    </Button>
                </Stack>

                <Image
                    rounded={'full'}
                    height={{ base: '250px', sm: '250px', lg: '250px' }}
                    width={{ base: '250px', sm: '250px', lg: '250px' }}
                    objectFit={'cover'}
                    src={'https://avatars.githubusercontent.com/u/81894363?v=4'}
                    boxShadow={'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;'}
                    alt={'Cesar Acjota'}
                    alignSelf={'center'}
                />

            </Stack>
        </>
    )
}

export default About