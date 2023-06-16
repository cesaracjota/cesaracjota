import React from "react";
import { HStack, Icon, Tag, Text, VStack, Stack, Tooltip } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Link } from "react-router-dom";
import { BiGitRepoForked, BiStar } from "react-icons/bi";

function GithubCard({ title, topics, description, fork, star, url }) {

  const linkColor = useColorModeValue("primary.100", "primary.100");
  const textColor = useColorModeValue('gray.500', 'gray.200')
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleOpen = () => setIsOpen(!isOpen)

  return (

    <motion.div layout onClick={toggleOpen}>
      <HStack
        p={4}
        bg={useColorModeValue('white', 'primary.1000')}
        rounded="xl"
        borderWidth="1px"
        _dark={{
          borderColor: 'none',
          _hover: {
            borderColor: 'primary.200',
            color: 'primary.200',
            cursor: 'pointer'
          }
        }}
        borderColor="none"
        h="100%"
        textAlign="left"
        align="start"
        spacing={4}
        cursor="pointer"
        shadow={'sm'}
        _hover={{
          transform: "scale(1.02)",
          shadow: "md",
          borderColor: 'primary.200',
          color: 'primary.200',
          cursor: 'pointer'
        }}
        transition='all 0.3s ease-in-out'
        w="full"
      >
        <Icon
          as={FaGithub}
          viewBox="0 0 24 24"
          color="primary.100"
          _dark={{
            color: "primary.100",
          }}
          w={6}
          h={6}
          _hover={{ color: "purple.700" }}
        />
        <VStack align="start" justify="flex-start" w="full">
          <VStack spacing={2} align="start" w="full">
            <Stack spacing={2} direction={'row'} display="flex" width="full" justifyContent={'space-between'}>
              <Tooltip label='GitHub Link' placement="top" hasArrow bg='primary.100' color="white">
                <Text
                  as={Link}
                  to={url}
                  target="_blank"
                  fontWeight="bold"
                  fontSize="md"
                  noOfLines={1}
                  onClick={(e) => e.stopPropagation()}
                  color={linkColor}
                  _hover={{
                    color: "primary.100",
                  }}
                >
                  {title}
                </Text>
              </Tooltip>
              <Stack
                direction={'row'}
                spacing={2}
                display="flex"
                justifyContent={'flex-end'}
                alignSelf={'center'}
              >
                <Stack
                  direction={'row'}
                  spacing={0}
                  _dark={{
                    color: "primary.100",
                  }}
                  _hover={{
                    color: "primary.100",
                    transform: "scale(1.05)"
                  }}
                >
                  <Icon
                    as={BiGitRepoForked}
                    viewBox="0 0 24 24"
                    w={5}
                    h={5}
                  />
                  <Text alignSelf="center">
                    {fork}
                  </Text>
                </Stack>
                <Stack
                  direction={'row'}
                  spacing={0}
                  _dark={{
                    color: "primary.100",
                  }}
                  _hover={{
                    color: "primary.100",
                    transform: "scale(1.05)"
                  }}
                >
                  <Icon
                    as={BiStar}
                    viewBox="0 0 24 24"
                    w={5}
                    h={5}
                  />
                  <Text>
                    {star}
                  </Text>
                </Stack>
              </Stack>
            </Stack>
            <HStack spacing="1">
              {topics.map((tech, index) => (
                <Tag
                  key={index}
                  size="sm"
                  variant="solid"
                  bg="primary.100"
                  borderColor="primary.100"
                  color="white"
                  _focus={{
                    boxShadow: 'none',
                  }}
                >
                  {tech}
                </Tag>
              ))}
            </HStack>
            <motion.div>
              <Text fontSize="sm" color={textColor}>
                {description}
              </Text>
            </motion.div>
          </VStack>
        </VStack>
      </HStack>
    </motion.div>
  );
}

export default GithubCard;