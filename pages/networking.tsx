import React from 'react';
import PageLayout from 'components/layouts/pageLayout';
import {
  Flex,
  Box,
  Image,
  Icon,
  chakra,
  SimpleGrid,
  Heading,
  Link,
  Button,
} from '@chakra-ui/react';
import { MdLocationOn, MdLaunch } from 'react-icons/md';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { MotionBox } from 'components/shared/animations/motion';
import Header from 'components/shared/header';
import Carrusel from 'components/networking/carrusel';
import { useLinkColor } from 'components/theme';

const Networking = () => {
  const linkColor = useLinkColor();
  return (
    <PageLayout title="Networking" description="My educational and professional network management">
      <MotionBox>
        <Heading>
          <Flex alignItems="center">
            <Header mt={5} mb={10}>
              RECOMENDACIONES RECIBIDAS
            </Header>
          </Flex>
        </Heading>
      </MotionBox>
      <Carrusel />
      <Link href='https://www.linkedin.com/in/cesaracjota/details/recommendations?detailScreenTabIndex=0' isExternal>
        <Button rightIcon={<MdLaunch/>} mt={5} colorScheme={linkColor} textColor={linkColor}>
          Evidencias
        </Button>
      </Link>
      <MotionBox>
        <Heading>
          <Flex alignItems="center">
            <Header mt={5} mb={10}>
              RECOMENDACIONES RECIBIDAS
            </Header>
          </Flex>
        </Heading>
      </MotionBox>
      <Carrusel />
      <Link href='https://www.linkedin.com/in/cesaracjota/details/recommendations?detailScreenTabIndex=0' isExternal>
        <Button rightIcon={<MdLaunch/>} mt={5} colorScheme={linkColor} textColor={linkColor}>
          Evidencias
        </Button>
      </Link>
    </PageLayout>
  );
};

export default Networking;
