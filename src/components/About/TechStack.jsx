import { Heading, SimpleGrid, Stack, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'
import CardTechStack from './CardTechStack';
import reactIcon from '../../assets/img/logos/react.png';
import typescriptIcon from '../../assets/img/logos/typescript.png';
import htmlIcon from '../../assets/img/logos/html.png';
import cssIcon from '../../assets/img/logos/css.png';
import javascriptIcon from '../../assets/img/logos/javascript.png';

const TechStack = () => {
    return (
        <>
            <Stack
                textAlign={'start'}
                w="full"
                mt={8}
            >
                <Heading
                    fontSize={'3xl'}
                    fontWeight="extrabold"
                    w="full"
                    noOfLines={1}
                >
                    Tech Stack
                </Heading>
                <Text
                    color={'gray.600'}
                    _dark={{
                        color: 'gray.400'
                    }}
                >
                    A list of my favorite tools and technologies that I use on a regular basis.
                </Text>
            </Stack>
            <Tabs variant="unstyled" position="relative" p={0}>
                <TabList>
                    <Tab
                        _selected={{
                            color: 'purple.500',
                        }}
                    >
                        Frontend
                    </Tab>
                    <Tab
                        _selected={{
                            color: 'purple.500',
                        }}
                    >
                        Backend
                    </Tab>
                    <Tab
                        _selected={{
                            color: 'purple.500',
                        }}
                    >
                        Mobile
                    </Tab>
                    <Tab
                        _selected={{
                            color: 'purple.500',
                        }}
                    >
                        Web Design
                    </Tab>
                    <Tab
                        _selected={{
                            color: 'purple.500',
                        }}
                    >
                        Others
                    </Tab>
                </TabList>
                <TabIndicator
                    mt="-1.5px"
                    height="2px"
                    bg="purple.500"
                    borderRadius="2px"
                />
                <TabPanels>
                    <TabPanel px={0}>
                        <Stack spacing={4} w="full">
                            <SimpleGrid columns={3} spacing={4} width="full">
                                <CardTechStack
                                    title="HTML5"
                                    imageUrl={htmlIcon}
                                    description="HTML5 is a markup language"
                                    link="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
                                />
                                <CardTechStack
                                    title="CSS3"
                                    imageUrl={cssIcon}
                                    description="CSS3 is a style sheet language"
                                    link="https://developer.mozilla.org/en-US/docs/Web/CSS"
                                />
                                <CardTechStack
                                    title="JavaScript"
                                    imageUrl={javascriptIcon}
                                    description="JavaScript is a programming language"
                                    link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                                />
                                <CardTechStack
                                    title="React"
                                    imageUrl={reactIcon}
                                    description="React is a JavaScript library"
                                    link="https://reactjs.org/"
                                />
                            </SimpleGrid>
                        </Stack>
                    </TabPanel>
                    <TabPanel px={0}>
                        <Stack spacing={4}>
                            <Text>Node.js</Text>
                        </Stack>
                    </TabPanel>
                    <TabPanel px={0}>
                        <Stack spacing={4}>
                            <Text>Adobe XD</Text>
                        </Stack>
                    </TabPanel>
                    <TabPanel px={0}>
                        <Stack spacing={4}>
                            <Text>Flutter</Text>
                        </Stack>
                    </TabPanel>
                    <TabPanel px={0}>
                        <Stack spacing={4}>
                            <Text>Git</Text>
                        </Stack>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}

export default TechStack;