import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Image,
    IconButton,
    createIcon,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { useLinkColor } from 'components/theme'
import { linkColors } from '../theme/colors';
  
  const VideoPresentation = () => {
    const linkColor = useLinkColor()

    return (
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 5 }}
          py={{ base: 10, md: 10 }}
          direction={{ base: 'column' }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '2xl', md: '3xl', lg: '4xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '20%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  backgroundColor: {linkColor},
                  zIndex: -1,
                }}>
                Presentación
              </Text>
              <br />
            </Heading>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            w={'full'}>
            <Box
              position={'relative'}
              maxH={'500px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}>
              <Image
                alt={'Presentacion Cesar Acjota Merma'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={
                  '/assets/images/presentacion.gif'
                }
              />
            </Box>
          </Flex>
        </Stack>
    );
  }

export default VideoPresentation