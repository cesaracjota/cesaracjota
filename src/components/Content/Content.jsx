import React from 'react';
import { Divider, Heading, IconButton, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import YoutubeCard from './YoutubeCard';
import ShortCard from './ShortCard';
import { IoIosArrowDown } from 'react-icons/io';

const Content = () => {
  const data = [
    {
      title: 'Youtube',
      url: 'https://www.youtube.com/embed/cTMD8DaQIBg',
      likes: 20,
      shares: 10,
      comments: 10,
    },
    {
      title: 'Youtube',
      url: 'https://www.youtube.com/embed/V1hefVGvcMo',
      likes: 20,
      shares: 10,
      comments: 10,
    },
    {
      title: 'Youtube',
      url: 'https://www.youtube.com/embed/5zscw--U4mM',
      likes: 20,
      shares: 10,
      comments: 10,
    },
  ];

  const shortData = [
    {
      title: '¡Pocas personas conocen esta receta! El secreto para un pollo frito crujiente😋😱',
      thumbnail: 'https://i.ytimg.com/vi/iFarKAGGPb0/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLCKJObU7Lan-pRx1bAxCrnQKzGRzQ',
    },
    {
      title: 'UNA CANCION PARA DEDICAR A TU ❤️PAREJA❤️ ! ETIQUETA A ESE O ESA QUE QUIERES TANTO! - EZVIT18',
      thumbnail: 'https://i.ytimg.com/vi/jwPPoLI8jwU/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLA7driyqFVjmzY7fJm1ZMABY_0COA',
    },
    {
      title: 'UNA CANCION PARA DEDICAR A TU ❤️PAREJA❤️ ! ETIQUETA A ESE O ESA QUE QUIERES TANTO! - EZVIT18',
      thumbnail: 'https://i.ytimg.com/vi/-SdKk3zTILQ/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLCvhflntD8ANvIJv2p3VWL3gYVJzw',
    },
    {
      title: 'UNA CANCION PARA DEDICAR A TU ❤️PAREJA❤️ ! ETIQUETA A ESE O ESA QUE QUIERES TANTO! - EZVIT18',
      thumbnail: 'https://i.ytimg.com/vi/InQD51Xvt5U/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLAw7J0PR3J_KUM9mccPc24JhDOPcw',
    },
    {
      title: 'UNA CANCION PARA DEDICAR A TU ❤️PAREJA❤️ ! ETIQUETA A ESE O ESA QUE QUIERES TANTO! - EZVIT18',
      thumbnail: 'https://i.ytimg.com/vi/m9KPVKcOVJU/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLCmVEcsAX7anja3WXUjn8iHfhFwzQ',
    },
  ]

  return (
    <>
      <Stack
        textAlign={{
          base: 'center',
          lg: 'center'
        }}
        w="full"
        mb={8}
      >
        <Heading
          fontSize={'3xl'}
          fontWeight="extrabold"
          w="full"
          noOfLines={1}
        >
          Content
        </Heading>
        <Text
          color={'gray.600'}
          _dark={{
            color: 'gray.400'
          }}
        >
          My academic certifications
        </Text>
      </Stack>
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
          lg: 3
        }}
        spacing={6}
      >
        {
          data.map((data, index) => (
            <YoutubeCard key={index} data={data} />
          ))
        }
      </SimpleGrid>

      <Divider my={8} />

      <Stack
        textAlign={{
          base: 'center',
          lg: 'center'
        }}
        w="full"
        mb={8}
      >
        <Heading
          fontSize={'3xl'}
          fontWeight="extrabold"
          w="full"
          noOfLines={1}
        >
          Short
        </Heading>
      </Stack>

      <SimpleGrid
        columns={{
          base: 4,
          md: 4,
          lg: 5
        }}
        spacing={4}
      >
        {
          shortData.map((data, index) => (
            <ShortCard key={index} data={data} />
          ))
        }
      </SimpleGrid>
      <IconButton
        icon={<IoIosArrowDown />}
        w="full"
        fontSize={24}
      />
    </>
  )
}

export default Content
