import * as React from 'react';
import { useState, ReactElement } from 'react';
import {
  Icon,
  VStack,
  HStack,
  Stack,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorModeValue,
  SimpleGrid,
  Box,
  Flex,
  GridItem,
  Link,
  Button,
  Image
} from '@chakra-ui/react';
import { GetStaticProps, NextPage } from 'next';
import Section from 'components/skills/section';
import { AiTwotoneThunderbolt, AiOutlineCloudServer } from 'react-icons/ai';
import { BiDesktop } from 'react-icons/bi';
import { GiSpiderWeb } from 'react-icons/gi';
import SkillCard from 'components/skills/skill-card';
import { skillsArray } from 'data/data';
import Header from 'components/shared/header';
import { MotionBox } from 'components/shared/animations/motion';
import { container, PageSlideFade } from 'components/shared/animations/page-transitions';
import PageLayout from '../components/layouts/pageLayout';
import { useLinkColor } from 'components/theme';
import { SkillProps } from 'interfaces/interface';
import {
  FcPodiumWithSpeaker,
  FcAutomotive,
  FcViewDetails,
  FcParallelTasks,
  FcReuse,
  FcPuzzle
} from 'react-icons/fc';
import { FaLocationArrow } from 'react-icons/fa';

import Resume from './resume';

const tabList = [
  {
    name: 'All',
    filterName: '',
    icon: AiTwotoneThunderbolt
  },
  {
    name: 'Web Development',
    filterName: 'development',
    icon: BiDesktop
  },
  {
    name: 'Web Design',
    filterName: 'design',
    icon: GiSpiderWeb
  },
  {
    name: 'Devops',
    filterName: 'devops',
    icon: AiOutlineCloudServer
  }
];

interface FeatureProps {
  title: string;
  icon: ReactElement;
}

const Feature = ({ title, icon }: FeatureProps) => {
  const linkColor = useLinkColor();

  return (
    <Stack
      align={'center'}
      bg={useColorModeValue('gray.200', 'gray.800')}
      rounded={'xl'}
      boxShadow={'md'}
      borderLeft="4px solid"
      borderColor={linkColor}
    >
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'xl'}
        bg={useColorModeValue('gray.300', 'gray.900')}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={500} fontSize={'sm'}>
        {title}
      </Text>
    </Stack>
  );
};

const TechStack: NextPage<SkillProps> = ({ skills }) => {
  const bgColor = useLinkColor();
  const linkColor = useLinkColor();
  const [skillsList, setSkillsList] = useState([]);

  React.useEffect(() => {
    setSkillsList(skills);
  }, []);

  const filterSkills = (tab: string | any[]) => {
    if (tab.length) setSkillsList(skills.filter((skill) => skill.type === tab));
    else setSkillsList(skills);
  };

  return (
    <PageLayout title="Skills" keywords="rails, ruby, react, javascript, typescript">
      <PageSlideFade>
        <VStack spacing={10}>
          <Section>
            <VStack spacing={10}>
              <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} spacing={10}>
                <VStack>
                  <Header mt={0} mb={1}>
                    PERFÍL PROFESIONAL
                  </Header>
                  <Text
                    fontSize={'md'}
                    color={useColorModeValue('gray.500', 'gray.200')}
                    textAlign="justify"
                  >
                    Desarrollador Junior Front-end. Apasionado de la Programación, busco aportar en
                    su empresa, mis conocimientos académicos de programación{' '}
                    <strong>
                      {' '}
                      (Java, Javascript, Python, C#, Flutter, Kotlin,PHP, HTML5, CSS, GitHub).{' '}
                    </strong>
                    {/* Mi capacidad de generar ideas y mi facilidad para trabajar en equipo son mis
                    principales herramientas para trabajar y crecer como desarrollador Junior
                    Front-end. */}
                  </Text>
                </VStack>
                <VStack>
                  <Header mt={0} mb={1}>
                    OBJETIVO PROFESIONAL
                  </Header>
                  <Text
                    fontSize={'md'}
                    color={useColorModeValue('gray.500', 'gray.200')}
                    textAlign="justify"
                  >
                    Mi objetivo profesional es formar parte de una empresa de desarrollo de
                    software, que me pueda dar la oportunidad de pulir mis conocimientos, de esta
                    manera aportar mis capacidades productivas en los procesos de la empresa.
                  </Text>
                </VStack>
              </SimpleGrid>
              <Resume />
              <Header mt={0} mb={1}>
                VIDEO CURRÍCULUM
              </Header>

              <Box
                rounded={'xl'}
                as="iframe"
                src="https://www.youtube.com/embed/g2ammnp6Dto"
                width="100%"
                sx={{
                  aspectRatio: '16/9'
                }}
              />

              <Header mt={0} mb={1}>
                COMPETENCIAS Y FORTALEZAS
              </Header>
              <Box
                p={5}
                bg={useColorModeValue('gray.100', 'gray.700')}
                rounded={'lg'}
                w={'100%'}
                boxShadow={'lg'}
              >
                <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={5} alignItems={'center'}>
                  <Feature
                    icon={<Icon as={FcViewDetails} w={10} h={10} />}
                    title={'Responsabilidad'}
                  />
                  <Feature
                    icon={<Icon as={FcParallelTasks} w={10} h={10} />}
                    title={'Organización'}
                  />
                  <Feature
                    icon={<Icon as={FcPodiumWithSpeaker} w={10} h={10} />}
                    title={'Autonomía'}
                  />
                  <Feature icon={<Icon as={FcReuse} w={10} h={10} />} title={'Proactividad'} />
                  <Feature icon={<Icon as={FcPuzzle} w={10} h={10} />} title={'Adaptación'} />
                  <Feature icon={<Icon as={FcAutomotive} w={10} h={10} />} title={'Flexibilidad'} />
                </SimpleGrid>
              </Box>
              <Header mt={0} mb={1}>
                TARJETA DE PRESENTACIÓN
              </Header>
              <Box
                p={5}
                bg={useColorModeValue('gray.100', 'gray.700')}
                rounded={'2xl'}
                w={'full'}
                boxShadow={'2xl'}
              >
                <Image
                  src='/assets/images/presentacion.png'
                  rounded={'2xl'}
                  boxShadow={'md'}
                />
              </Box>

              <Header mt={4} mb={4}>
                HABILIDADES TÉCNICAS
              </Header>
              <Text
                fontSize={'md'}
                color={useColorModeValue('gray.500', 'gray.200')}
                textAlign="justify"
              >
                Una lista de herramientas y tecnologías favoritas que uso regularmente, para crear
                softwares.
              </Text>
            </VStack>
          </Section>
          <Section zIndex={5}>
            <Tabs variant="soft-rounded" colorScheme="blue" align="center" w="100%">
              <TabList display="flex" flexWrap="wrap">
                {tabList.map((tab, index) => (
                  <Tab
                    bg={useColorModeValue('gray.100', 'gray.800')}
                    color={useColorModeValue('gray.600', 'gray.500')}
                    _selected={{
                      color: 'white',
                      bg: bgColor
                    }}
                    mr={2}
                    mt={2}
                    onClick={() => filterSkills(tab.filterName)}
                    key={index}
                  >
                    <HStack spacing={1}>
                      <Icon as={tab.icon} />
                      <Text>{tab.name}</Text>
                    </HStack>
                  </Tab>
                ))}
              </TabList>
              <TabPanels minHeight={'45vh'}>
                <TabPanel px={0}>
                  <MotionBox variants={container} initial="hidden" animate="visible">
                    <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={8}>
                      {skillsList.map((tool, index) => (
                        <SkillCard
                          key={index}
                          name={tool.name}
                          description={tool.description}
                          image={tool.image}
                          link={tool.link}
                        />
                      ))}
                    </SimpleGrid>
                  </MotionBox>
                </TabPanel>
                <TabPanel px={0}>
                  <MotionBox variants={container} initial="hidden" animate="visible">
                    <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                      {skillsList.map((tool, index) => (
                        <SkillCard
                          key={index}
                          name={tool.name}
                          description={tool.description}
                          image={tool.image}
                          link={tool.link}
                        />
                      ))}
                    </SimpleGrid>
                  </MotionBox>
                </TabPanel>
                <TabPanel px={0}>
                  <MotionBox variants={container} initial="hidden" animate="visible">
                    <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                      {skillsList.map((tool, index) => (
                        <SkillCard
                          key={index}
                          name={tool.name}
                          description={tool.description}
                          image={tool.image}
                          link={tool.link}
                        />
                      ))}
                    </SimpleGrid>
                  </MotionBox>
                </TabPanel>
                <TabPanel px={0}>
                  <MotionBox variants={container} initial="hidden" animate="visible">
                    <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                      {skillsList.map((tool, index) => (
                        <SkillCard
                          key={index}
                          name={tool.name}
                          description={tool.description}
                          image={tool.image}
                          // platform={"web"}
                          link={tool.link}
                        />
                      ))}
                    </SimpleGrid>
                  </MotionBox>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Section>
        </VStack>
      </PageSlideFade>
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps<SkillProps> = () => {
  return {
    props: {
      skills: skillsArray
    }
  };
};

export default TechStack;
