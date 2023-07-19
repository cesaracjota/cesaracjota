import { Heading, SimpleGrid, Stack, Skeleton, Text, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import GithubCard from './GithubCard';
import { getStarredRepositories } from '../../services/api.service';
import { t } from 'i18next';
// import { ToastChakra } from '../../helpers/toast';
import ProjectCard from './ProjectCard';

const Projects = () => {

    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        async function loadProjects() {
            try {
                const data = await getStarredRepositories();
                setRepos(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                // ToastChakra('ERROR AL CARGAR LA DATA', error?.message, 'error', 1500, 'bottom');
                setLoading(false);
            }
        }
        loadProjects();
    }, []);

    return (
        <>
            <Stack
                spacing={1}
                direction="column"
            >
                <Heading
                    as="h2"
                    size={["md", "lg"]}
                    fontWeight="extrabold"
                    id='projects'
                >
                    {t("projects.title")}
                </Heading>
                <Text
                    color={'gray.800'}
                    _dark={{
                        color: 'gray.200'
                    }}
                    fontSize={["sm", "md"]}
                >
                    {t("projects.subtitle")}
                </Text>
            </Stack>
            <Tabs variant="enclosed" p={0}>
                <TabList
                    overflowX={'auto'}
                    overflowY={'hidden'}
                    whiteSpace={'nowrap'}
                    sx={{
                        '&::-webkit-scrollbar': {
                            display: 'none'
                        }
                    }}
                    mt={4}
                >
                    <Tab
                        _focus={{
                            boxShadow: 'none'
                        }}
                        fontSize={{ base: 'md', lg: 'lg' }}
                        _selected={{
                            color: 'primary.100',
                            fontWeight: 'bold'
                        }}
                        _hover={{
                            color: 'primary.100',
                            fontWeight: 'bold'
                        }}
                        fontWeight="black"
                        _active={{
                            bg: 'transparent'
                        }}
                        w="full"
                    >
                        <Heading
                            fontWeight={'bold'}
                            fontSize={{ base: 'md', lg: 'lg' }}
                        >
                            {t("projects.bigProjects")}
                        </Heading>
                    </Tab>
                    <Tab
                        _focus={{
                            boxShadow: 'none'
                        }}
                        fontSize={{ base: 'md', lg: 'lg' }}
                        _selected={{
                            color: 'primary.100',
                            fontWeight: 'bold'
                        }}
                        _hover={{
                            color: 'primary.100',
                            fontWeight: 'bold'
                        }}
                        fontWeight="black"
                        _active={{
                            bg: 'transparent'
                        }}
                        w="full"
                    >
                        <Heading
                            fontWeight={'bold'}
                            fontSize={{ base: 'md', lg: 'lg' }}
                        >
                            {t("projects.openSourceProject")}
                        </Heading>
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel px={0}>
                        <ProjectCard />
                    </TabPanel>
                    <TabPanel px={0}>
                        {
                            loading ? (
                                <SimpleGrid columns={1} spacing={4} w="full">
                                    <Skeleton height="100px" borderRadius={'2xl'} />
                                    <Skeleton height="100px" borderRadius={'2xl'} />
                                    <Skeleton height="100px" borderRadius={'2xl'} />
                                    <Skeleton height="100px" borderRadius={'2xl'} />
                                    <Skeleton height="100px" borderRadius={'2xl'} />
                                    <Skeleton height="100px" borderRadius={'2xl'} />
                                    <Skeleton height="100px" borderRadius={'2xl'} />
                                    <Skeleton height="100px" borderRadius={'2xl'} />
                                </SimpleGrid>
                            ) :
                                (
                                    <SimpleGrid columns={1} spacing={4} w="full">
                                        {repos?.map((repo) => (
                                            <GithubCard
                                                key={repo?.id}
                                                title={repo?.name}
                                                description={repo?.description}
                                                topics={
                                                    repo?.topics.length > 0
                                                        ? repo.topics
                                                        : ["No topics"]
                                                }
                                                star={repo?.stargazers_count}
                                                fork={repo?.forks_count}
                                                url={repo?.url}
                                            />
                                        ))}
                                    </SimpleGrid>
                                )
                        }
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}

export default Projects;