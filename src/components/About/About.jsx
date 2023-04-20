import React from 'react';
import { Heading, chakra, Stack, Image, Button, Icon } from '@chakra-ui/react';
import { BsArrowUpRight } from 'react-icons/bs';

const About = () => {
    return (
        <>
            <Stack
                direction={{ base: 'column', md: 'row' }}
                spacing={{ base: 4, md: 6 }}
                mb={4}
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
                    <Heading fontWeight={'extrabold'} size={{ base: 'lg', lg: '2xl' }} textAlign={{ base: 'center', md: 'start' }}>
                        Hi, I’m <span style={{ fontWeight: 'bold', color: '#8612fa', textDecoration: 'underline' }}>Cesar Acjota.</span>
                    </Heading>

                    <chakra.p textAlign={'justify'} fontSize={{base: 16, lg: 20}}>
                        I’m a full-stack engineer, a designer, and a content creator.
                        I work at Sentry.io as a Developer Advocate, and I’m an egghead.io instructor.
                        I do regular live streams on my YouTube channel
                    </chakra.p>
                    <Stack
                        direction={{
                            base: 'row',
                            md: 'row',
                        }}
                        spacing={[2,4]}
                        justifyContent={'space-between'}
                        display={'flex'}
                        alignSelf={{
                            base: 'center',
                            md: 'flex-start',
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
                            variant={'ghost'}
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
                            variant={'ghost'}
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
                                bg: 'red.800',
                                color: 'white',
                                _hover: {
                                    bg: 'red.700'
                                }
                            }}
                            variant={'ghost'}
                        >
                            YouTube
                        </Button>
                    </Stack>
                </Stack>

                <Image
                    rounded={'full'}
                    height={{ base: '250px', sm: '250px', md: '250px' }}
                    width={{ base: '250px', sm: '250px', md: '250px' }}
                    objectFit={'cover'}
                    src={'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
                    alt={'Author'}
                    alignSelf={{
                        base: 'center',
                        md: 'flex-end',
                    }}
                />

            </Stack>
        </>
    )
}

export default About