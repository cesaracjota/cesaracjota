import { Heading, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'

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
            <Tabs isFitted variant='soft-rounded'>
                <TabList>
                    <Tab
                        _selected={{
                            color: 'white',
                            bg: 'purple.600'
                        }}
                        mr={8}
                    >
                        Tab 1
                    </Tab>
                    <Tab
                        _selected={{
                            color: 'white',
                            bg: 'purple.600'
                        }}
                    >
                        Tab 2
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel bg="red" display={'flex'} w="full">
                        <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}

export default TechStack;