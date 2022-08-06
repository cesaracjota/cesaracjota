import { useEffect, useState } from 'react'
import {
  Flex,
  Box,
  Text,
  Badge,
  Stack,
  Link,
  Button,
  UnorderedList,
  ListItem,
  Image,
  Center,
  Tag,
  Avatar,
  AvatarBadge,
  TagLabel,
  useColorModeValue,
} from '@chakra-ui/react'
import { MotionBox, MotionFlex } from 'components/shared/animations/motion'
import Header from 'components/shared/header'
import NextLink from 'next/link'
import { useLinkColor } from 'components/theme'
import PopularArticles from './PopularArticles'
import { BlogPostProps } from 'interfaces/interface'
import { newContent } from 'data/data'
import { FaLocationArrow } from 'react-icons/fa'
import VideoPresentation from './VideoPresentation'
import Resume from 'pages/resume'

const ANIMATION_DURATION = 0.3
const ORANGE = '#ff9400'
const emojis = ['👋', '👍', '🖐']

const Home: React.FC<BlogPostProps> = (props) => {
  const { posts } = props
  const linkColor = useLinkColor()
  const [showEmogi, setShowEmoji] = useState(false)
  const [emojiCounter, setEmojiCounter] = useState(-1)

  useEffect(() => {
    const interval = setInterval(() => {
      if (emojiCounter >= 3) setEmojiCounter(0)
    }, 500)
    return () => clearInterval(interval)
  }, [emojiCounter])

  return (
    <Flex direction="column" align="center">
      <Flex position={'absolute'} direction={['column', 'column']} mb={5} mt={-8} w={'100%'}>
        <Center
          minH={250}
          opacity={1}
            _hover={{ opacity: 1 }}
          bgImage={'https://i.blogs.es/224274/javascript-large-/1366_521.jpg'}>
          <Center bg={linkColor} color='white' padding={1.5} rounded={'md'}>
            <Text fontWeight={'900'} pl={5} pr={5} fontSize={'22px'}>Bienvenido<span style={{fontStyle: 'italic'}}> a mi Pagina Web</span></Text>
          </Center>
        </Center>
      </Flex>

      <Flex direction={['column', 'column', 'row']} mt={260}>
        <MotionBox
          opacity="0"
          initial={{
            translateX: -50,
            opacity: 0,
          }}
          animate={{
            translateX: 0,
            opacity: 1,
            transition: {
              duration: ANIMATION_DURATION,
            },
          }}
          m="auto"
          mb={[10, 10, 'auto']}
        >
          <MotionBox whileHover={{ scale: 1.2 }} shadow="full">
            <Avatar
              size={'2xl'}
              cursor={'pointer'}
              boxShadow={'xl'}
              borderColor={'transparent'}
              outlineColor={'gray.500'}
              src={'https://avatars.githubusercontent.com/u/81894363?v=4'}
            >
              <AvatarBadge boxSize='0.9em' bg='green.500' />
            </Avatar>
            {/* <Image
              boxSize='130px'
              rounded={'full'}
              w={'100%'}
              borderRadius={'xl'}
              // outline={'thick double'}
              outlineColor={linkColor}
              fallbackSrc={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}
              src={'https://avatars.githubusercontent.com/u/81894363?v=4'}
              alt='Cesar Augusto Acjota Merma'
            /> */}
          </MotionBox>
        </MotionBox>
        <MotionFlex
          position="relative"
          ml={['auto', 'auto', 10]}
          m={['auto', 'initial']}
          w={['95%', '95%', '95%']}
          maxW="990px"
          opacity="0"
          justify="center"
          direction="column"
          initial={{
            opacity: 0,
            translateX: 150,
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            transition: {
              duration: ANIMATION_DURATION,
            },
          }}
        >
          <Box position="relative">
            <Box
              position="absolute"
              width="full"
              fontSize="2xl"
              textAlign="center"
            >
              {emojis.map((item, index) => {
                return (
                  <MotionBox
                    key={index}
                    position="absolute"
                    right="80%"
                    animate={
                      showEmogi && emojiCounter === index ? 'show' : 'hide'
                    }
                    variants={{
                      hide: { translateY: -80, opacity: 0 },
                      show: {
                        translateY: [0, -40, -60],
                        opacity: [0, 1, 0],
                      },
                    }}
                    initial="hide"
                  >
                    {item}
                  </MotionBox>
                )
              })}
            </Box>
            <MotionBox whileHover={{ translateY: -5 }} width="max-content">
              <Header
                underlineColor={ORANGE}
                emoji="👋"
                mt={0}
                cursor="pointer"
                width="max-content"
                onClick={() => {
                  setEmojiCounter((prevCounter) => prevCounter + 1)
                  setShowEmoji(true)
                }}
              >
                <Text
                  //bgGradient='linear(to-l, #FF0080, #3182ce)'
                  textAlign="center"
                  color="#3182ce"
                  variant="gradient"
                  fromcolor="#3182ce"
                  tocolor="#FF0080"
                  bgClip='text'
                  fontSize='4xl'
                  fontWeight='extrabold'> 
                  {/* //falta colocar el nombre */}
                </Text>
              </Header>
            </MotionBox>
          </Box>
          <Box as="h2" fontSize="2xl" fontWeight="400" textAlign="justify">
            Mi nombre es{' '}
            <Box as="i" fontWeight="900" color={linkColor}>
            Cesar Augusto, Acjota Merma
            </Box>{' '}
            soy {' '}
            <Box as="span" whiteSpace="nowrap">
            diseñador y   desarrollador
            </Box>{' '}
            <Box as="span" whiteSpace="nowrap">
            front-end&nbsp;
            </Box>
            de{' '}
            <Box as="span" whiteSpace="nowrap">
             Arequipa - Perú.
            </Box>
          </Box>
          <Box as="h2" fontSize="2xl" fontWeight="400" mt={5} textAlign="justify">
          Este es mi jardín digital, 
          apto para todo tipo de trabajos en el campo del desarrollo de software.
          😊
          </Box>
          
          <Box display={'flex'} width="100%" as="h2" fontSize="1xl" fontWeight="700" mt={5} textAlign="right">
            <Resume />
          </Box>
        </MotionFlex>
      </Flex>

      <MotionBox
        w="100%"
        opacity="0"
        initial={{
          translateY: 80,
        }}
        animate={{
          translateY: 0,
          opacity: 1,
          transition: {
            delay: ANIMATION_DURATION - 0.1,
            duration: ANIMATION_DURATION,
          },
        }}
        zIndex={1}
      >
        <Box mt={4}>
          {/* <VideoPresentation /> */}
          <ContentBox linkColor={linkColor} />
          {/* <PopularArticles posts={posts} /> */}
        </Box>
        <Box mt={10}>
        <Tag size='lg' bg={'blue.600'} borderRadius='full' boxShadow={'2xl'}>
          <Avatar
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw0E4lC06yZypKcVpongcNU_U5obaHLEeQ-M0ocADfarathgbhpbdE7kpF50fZVis0-RQ&usqp=CAU'
            size='xs'
            name='Cesar Augusto'
            ml={-1}
            mr={2}
          />
          <TagLabel fontSize="sm" color={'white'}>"Si puedes imaginar, lo puedes programar"</TagLabel>
        </Tag>
        </Box>
      </MotionBox>
    </Flex>
  )
}

const ContentBox = ({ linkColor }) => {
  return (
    <Stack
      mb={5}
      padding={4}
      align="start"
      borderLeft="4px solid"
      borderColor={linkColor}
      color={'whatsapp'}
      _hover={{ shadow: 'lg' }}
      backgroundColor={useColorModeValue('gray.100', '#1e2533')}
      rounded="sm"
      fontSize="md"
    >
      <Text
        textAlign="center"
        color={linkColor}
        fontWeight="bold"
        fontSize={['md', 'lg']}
      >
        Año nuevo, contenido nuevo:
      </Text>
      <UnorderedList textAlign="left" paddingLeft={5} m={0}>
        {newContent.map((content, index) => (
          <ListItem key={index} color={linkColor}>
            <NextLink href={content.link} passHref>
              <Link color={linkColor}>
                {content.text}
                {content.showNewTag && (
                  <Badge ml="2" colorScheme="green">
                    Nuevo
                  </Badge>
                )}
              </Link>
            </NextLink>
          </ListItem>
        ))}
      </UnorderedList>
    </Stack>
  )
}

export default Home
