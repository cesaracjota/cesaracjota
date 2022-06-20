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
} from '@chakra-ui/react';
import { MdLocationOn } from 'react-icons/md';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { MotionBox } from 'components/shared/animations/motion';
import Header from 'components/shared/header';

const Networking = () => {
  return (
    <PageLayout title="Networking" description="My educational and professional network management">
      <MotionBox>
        <Heading>
          <Flex alignItems="center">
            <Header mt={0} mb={10}>
              Mi red de contactos tipo "A"
            </Header>
          </Flex>
        </Heading>
      </MotionBox>
      <SimpleGrid columns={[1, 2, 3]} spacing="20px">
        <Flex alignItems="center" justifyContent="center">
          <Box
            w="100%"
            mx="auto"
            bg="white"
            _dark={{
              bg: 'gray.800'
            }}
            _hover={{
                shadow:'lg'
            }}
            shadow='sm'
            rounded="lg"
            overflow="hidden"
            cursor={'pointer'}
          >
            <Image
              w="full"
              h={40}
              fit="cover"
              objectPosition="center"
              src="https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="avatar"
              _hover = {{
                filter: 'opacity(.6)',
            }}
            />

            <Flex alignItems="center" justify={'center'} px={6} py={3} bg="gray.700">
              <Link
                display="block"
                fontSize="lg"
                color="gray.200"
                _dark={{
                  color: 'white'
                }}
                fontWeight="bold"
                href='https://www.linkedin.com/in/romulo-huaman-cusi-7186b1238/' 
                isExternal
              >
                Romulo Huaman
              </Link>
            </Flex>

            <Box py={4} px={6}>
              <chakra.p
                color="gray.700"
                _dark={{
                  color: 'gray.400'
                }}
              >
                FrontEnd Developper
              </chakra.p>

              <Flex
                alignItems="center"
                mt={4}
                color="gray.700"
                _dark={{
                  color: 'gray.200'
                }}
              >
                <Icon as={BsFillBriefcaseFill} h={6} w={6} mr={2} />

                <chakra.h1 px={2} fontSize="sm">
                  Web UI
                </chakra.h1>
              </Flex>

              <Flex
                alignItems="center"
                mt={4}
                color="gray.700"
                _dark={{
                  color: 'gray.200'
                }}
              >
                <Icon as={MdLocationOn} h={6} w={6} mr={2} />

                <chakra.h1 px={2} fontSize="sm">
                  Apurimac
                </chakra.h1>
              </Flex>
            </Box>
          </Box>
        </Flex>
        <Flex alignItems="center" justifyContent="center">
          <Box
            w="100%"
            mx="auto"
            bg="white"
            _dark={{
              bg: 'gray.800'
            }}
            _hover={{
                shadow:'lg'
            }}
            shadow='sm'
            rounded="lg"
            overflow="hidden"
            cursor={'pointer'}
          >
            <Image
              w="full"
              h={40}
              fit="cover"
              objectPosition="center"
              src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="avatar"
              _hover = {{
                filter: 'opacity(.6)',
            }}
            />

            <Flex alignItems="center" justify={'center'} px={6} py={3} bg="gray.700">
              <Link
                display="block"
                fontSize="lg"
                color="gray.200"
                _dark={{
                  color: 'white'
                }}
                fontWeight="bold"
                href='https://www.linkedin.com/in/romulo-huaman-cusi-7186b1238/' 
                isExternal
              >
                Juan Lazaro
              </Link>
            </Flex>

            <Box py={4} px={6}>
              <chakra.p
                color="gray.700"
                _dark={{
                  color: 'gray.400'
                }}
              >
                FullStack Developper
              </chakra.p>

              <Flex
                alignItems="center"
                mt={4}
                color="gray.700"
                _dark={{
                  color: 'gray.200'
                }}
              >
                <Icon as={BsFillBriefcaseFill} h={6} w={6} mr={2} />

                <chakra.h1 px={2} fontSize="sm">
                  Choc UI
                </chakra.h1>
              </Flex>

              <Flex
                alignItems="center"
                mt={4}
                color="gray.700"
                _dark={{
                  color: 'gray.200'
                }}
              >
                <Icon as={MdLocationOn} h={6} w={6} mr={2} />

                <chakra.h1 px={2} fontSize="sm">
                  Arequipa
                </chakra.h1>
              </Flex>
            </Box>
          </Box>
        </Flex>
        <Flex alignItems="center" justifyContent="center">
          <Box
            w="100%"
            mx="auto"
            bg="white"
            _dark={{
              bg: 'gray.800'
            }}
            _hover={{
                shadow:'lg'
            }}
            shadow='sm'
            rounded="lg"
            overflow="hidden"
            cursor={'pointer'}
          >
            <Image
              w="full"
              h={40}
              fit="cover"
              objectPosition="center"
              src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="avatar"
              _hover = {{
                filter: 'opacity(.6)',
            }}
            />

            <Flex alignItems="center" justify={'center'} px={6} py={3} bg="gray.700">
              <Link
                display="block"
                fontSize="lg"
                color="gray.200"
                _dark={{
                  color: 'white'
                }}
                fontWeight="bold"
              >
                Nicolle Puma
              </Link>
            </Flex>

            <Box py={4} px={6}>
              <chakra.p
                color="gray.700"
                _dark={{
                  color: 'gray.400'
                }}
              >
                Backend Developer
              </chakra.p>

              <Flex
                alignItems="center"
                mt={4}
                color="gray.700"
                _dark={{
                  color: 'gray.200'
                }}
              >
                <Icon as={BsFillBriefcaseFill} h={6} w={6} mr={2} />

                <chakra.h1 px={2} fontSize="sm">
                  Chackra UI
                </chakra.h1>
              </Flex>

              <Flex
                alignItems="center"
                mt={4}
                color="gray.700"
                _dark={{
                  color: 'gray.200'
                }}
              >
                <Icon as={MdLocationOn} h={6} w={6} mr={2} />

                <chakra.h1 px={2} fontSize="sm">
                  Moquegua
                </chakra.h1>
              </Flex>
            </Box>
          </Box>
        </Flex>
        <Flex alignItems="center" justifyContent="center">
          <Box
            w="100%"
            mx="auto"
            bg="white"
            _dark={{
              bg: 'gray.800'
            }}
            _hover={{
                shadow:'lg'
            }}
            shadow='sm'
            rounded="lg"
            overflow="hidden"
            cursor={'pointer'}
          >
            <Image
              w="full"
              h={40}
              fit="cover"
              objectPosition="center"
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="avatar"
              _hover = {{
                filter: 'opacity(.6)',
            }}
            />

            <Flex alignItems="center" justify={'center'} px={6} py={3} bg="gray.700">
              <Link
                display="block"
                fontSize="lg"
                color="gray.200"
                _dark={{
                  color: 'white'
                }}
                fontWeight="bold"
              >
                Leandro Puma
              </Link>
            </Flex>

            <Box py={4} px={6}>
              <chakra.p
                color="gray.700"
                _dark={{
                  color: 'gray.400'
                }}
              >
                Backend Developer
              </chakra.p>

              <Flex
                alignItems="center"
                mt={4}
                color="gray.700"
                _dark={{
                  color: 'gray.200'
                }}
              >
                <Icon as={BsFillBriefcaseFill} h={6} w={6} mr={2} />

                <chakra.h1 px={2} fontSize="sm">
                  Choc UI
                </chakra.h1>
              </Flex>

              <Flex
                alignItems="center"
                mt={4}
                color="gray.700"
                _dark={{
                  color: 'gray.200'
                }}
              >
                <Icon as={MdLocationOn} h={6} w={6} mr={2} />

                <chakra.h1 px={2} fontSize="sm">
                  Lima
                </chakra.h1>
              </Flex>
            </Box>
          </Box>
        </Flex>
        <Flex alignItems="center" justifyContent="center">
          <Box
            w="100%"
            mx="auto"
            bg="white"
            _dark={{
              bg: 'gray.800'
            }}
            _hover={{
                shadow:'lg'
            }}
            shadow='sm'
            rounded="lg"
            overflow="hidden"
            cursor={'pointer'}
          >
            <Image
              w="full"
              h={40}
              fit="cover"
              objectPosition="center"
              src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="avatar"
              _hover = {{
                filter: 'opacity(.6)',
            }}
            />

            <Flex alignItems="center" justify={'center'} px={6} py={3} bg="gray.700">
              <Link
                display="block"
                fontSize="lg"
                color="gray.200"
                _dark={{
                  color: 'white'
                }}
                fontWeight="bold"
              >
                Andrea Piac
              </Link>
            </Flex>

            <Box py={4} px={6}>
              <chakra.p
                color="gray.700"
                _dark={{
                  color: 'gray.400'
                }}
              >
                Backend Developer
              </chakra.p>

              <Flex
                alignItems="center"
                mt={4}
                color="gray.700"
                _dark={{
                  color: 'gray.200'
                }}
              >
                <Icon as={BsFillBriefcaseFill} h={6} w={6} mr={2} />

                <chakra.h1 px={2} fontSize="sm">
                  Choc UI
                </chakra.h1>
              </Flex>

              <Flex
                alignItems="center"
                mt={4}
                color="gray.700"
                _dark={{
                  color: 'gray.200'
                }}
              >
                <Icon as={MdLocationOn} h={6} w={6} mr={2} />

                <chakra.h1 px={2} fontSize="sm">
                  Arequipa
                </chakra.h1>
              </Flex>
            </Box>
          </Box>
        </Flex>
        <Flex alignItems="center" justifyContent="center">
          <Box
            w="100%"
            mx="auto"
            bg="white"
            _dark={{
              bg: 'gray.800'
            }}
            _hover={{
                shadow:'lg'
            }}
            shadow='sm'
            rounded="lg"
            overflow="hidden"
            cursor={'pointer'}
          >
            <Image
              w="full"
              h={40}
              fit="cover"
              objectPosition="center"
              src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="avatar"
              _hover = {{
                filter: 'opacity(.6)',
            }}
            />

            <Flex alignItems="center" justify={'center'} px={6} py={3} bg="gray.700">
              <Link
                display="block"
                fontSize="lg"
                color="gray.200"
                _dark={{
                  color: 'white'
                }}
                fontWeight="bold"
              >
               Kiara johnson
              </Link>
            </Flex>
            <Box py={4} px={6}>
              <chakra.h1
                fontSize="xl"
                fontWeight="bold"
                color="gray.800"
                _dark={{
                  color: 'white'
                }}
              ></chakra.h1>

              <chakra.p
                color="gray.700"
                _dark={{
                  color: 'gray.400'
                }}
              >
                Backend Developer
              </chakra.p>

              <Flex
                alignItems="center"
                mt={4}
                color="gray.700"
                _dark={{
                  color: 'gray.200'
                }}
              >
                <Icon as={BsFillBriefcaseFill} h={6} w={6} mr={2} />

                <chakra.h1 px={2} fontSize="sm">
                  Choc UI
                </chakra.h1>
              </Flex>

              <Flex
                alignItems="center"
                mt={4}
                color="gray.700"
                _dark={{
                  color: 'gray.200'
                }}
              >
                <Icon as={MdLocationOn} h={6} w={6} mr={2} />

                <chakra.h1 px={2} fontSize="sm">
                  California
                </chakra.h1>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </SimpleGrid>

      <MotionBox>
        <Heading>
          <Flex alignItems="center">
            <Header mt={5} mb={10}>
              Mi red de contactos tipo "B"
            </Header>
          </Flex>
        </Heading>
      </MotionBox>

      <SimpleGrid columns={[1, 2, 3]} spacing="20px">
        <Flex alignItems="center" justifyContent="center">
          <Box
            w="100%"
            mx="auto"
            bg="white"
            _dark={{
              bg: 'gray.800'
            }}
            _hover={{
                shadow:'lg'
            }}
            shadow='sm'
            rounded="lg"
            overflow="hidden"
            cursor={'pointer'}
          >
            <Image
              w="full"
              h={40}
              fit="cover"
              objectPosition="center"
              src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="avatar"
              _hover = {{
                filter: 'opacity(.6)',
            }}
            />

            <Flex alignItems="center" justify={'center'} px={6} py={3} bg="gray.700">
              <Link
                display="block"
                fontSize="lg"
                color="gray.200"
                _dark={{
                  color: 'white'
                }}
                fontWeight="bold"
              >
                Max Puma
              </Link>
            </Flex>

            <Box py={4} px={6}>
              <chakra.p
                color="gray.700"
                _dark={{
                  color: 'gray.400'
                }}
              >
                Maquinarias
              </chakra.p>

              <Flex
                alignItems="center"
                mt={4}
                color="gray.700"
                _dark={{
                  color: 'gray.200'
                }}
              >
                <Icon as={BsFillBriefcaseFill} h={6} w={6} mr={2} />

                <chakra.h1 px={2} fontSize="sm">
                  Choc UI
                </chakra.h1>
              </Flex>

              <Flex
                alignItems="center"
                mt={4}
                color="gray.700"
                _dark={{
                  color: 'gray.200'
                }}
              >
                <Icon as={MdLocationOn} h={6} w={6} mr={2} />

                <chakra.h1 px={2} fontSize="sm">
                  Arequipa
                </chakra.h1>
              </Flex>
            </Box>
          </Box>
        </Flex>
        <Flex alignItems="center" justifyContent="center">
          <Box
            w="100%"
            mx="auto"
            bg="white"
            _dark={{
              bg: 'gray.800'
            }}
            _hover={{
                shadow:'lg'
            }}
            shadow='sm'
            rounded="lg"
            overflow="hidden"
            cursor={'pointer'}
          >
            <Image
              w="full"
              h={40}
              fit="cover"
              objectPosition="center"
              src="https://images.pexels.com/photos/837306/pexels-photo-837306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="avatar"
              _hover = {{
                filter: 'opacity(.6)',
            }}
            />

            <Flex alignItems="center" justify={'center'} px={6} py={3} bg="gray.700">
              <Link
                display="block"
                fontSize="lg"
                color="gray.200"
                _dark={{
                  color: 'white'
                }}
                fontWeight="bold"
              >
                Carlos Quinto
              </Link>
            </Flex>

            <Box py={4} px={6}>
              <chakra.p
                color="gray.700"
                _dark={{
                  color: 'gray.400'
                }}
              >
                Dis. Audiovisual
              </chakra.p>

              <Flex
                alignItems="center"
                mt={4}
                color="gray.700"
                _dark={{
                  color: 'gray.200'
                }}
              >
                <Icon as={BsFillBriefcaseFill} h={6} w={6} mr={2} />

                <chakra.h1 px={2} fontSize="sm">
                  Choc UI
                </chakra.h1>
              </Flex>

              <Flex
                alignItems="center"
                mt={4}
                color="gray.700"
                _dark={{
                  color: 'gray.200'
                }}
              >
                <Icon as={MdLocationOn} h={6} w={6} mr={2} />

                <chakra.h1 px={2} fontSize="sm">
                  Arequipa
                </chakra.h1>
              </Flex>
            </Box>
          </Box>
        </Flex>
        <Flex alignItems="center" justifyContent="center">
          <Box
            w="100%"
            mx="auto"
            bg="white"
            _dark={{
              bg: 'gray.800'
            }}
            _hover={{
                shadow:'lg'
            }}
            shadow='sm'
            rounded="lg"
            overflow="hidden"
            cursor={'pointer'}
          >
            <Image
              w="full"
              h={40}
              fit="cover"
              objectPosition="center"
              src="https://images.pexels.com/photos/720598/pexels-photo-720598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="avatar"
              _hover = {{
                filter: 'opacity(.6)',
            }}
            />

            <Flex alignItems="center" justify={'center'} px={6} py={3} bg="gray.700">
              <Link
                display="block"
                fontSize="lg"
                color="gray.200"
                _dark={{
                  color: 'white'
                }}
                fontWeight="bold"
              >
                Karolina Condori
              </Link>
            </Flex>

            <Box py={4} px={6}>
              <chakra.p
                color="gray.700"
                _dark={{
                  color: 'gray.400'
                }}
              >
                Ing. Industrial
              </chakra.p>

              <Flex
                alignItems="center"
                mt={4}
                color="gray.700"
                _dark={{
                  color: 'gray.200'
                }}
              >
                <Icon as={BsFillBriefcaseFill} h={6} w={6} mr={2} />

                <chakra.h1 px={2} fontSize="sm">
                  Choc UI
                </chakra.h1>
              </Flex>

              <Flex
                alignItems="center"
                mt={4}
                color="gray.700"
                _dark={{
                  color: 'gray.200'
                }}
              >
                <Icon as={MdLocationOn} h={6} w={6} mr={2} />

                <chakra.h1 px={2} fontSize="sm">
                  Cusco
                </chakra.h1>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </SimpleGrid>

      <MotionBox>
        <Heading>
          <Flex alignItems="center">
            <Header mt={5} mb={10}>
              Mi red de contactos tipo "C"
            </Header>
          </Flex>
        </Heading>
      </MotionBox>
      <SimpleGrid columns={[1, 2]} spacing="40px">
        <Box
            w="100%"
            bg="white"
            _dark={{
            bg: 'gray.800'
            }}
            _hover={{
                shadow:'lg'
            }}
            shadow='sm'
            rounded="lg"
            overflow="hidden"
            cursor="pointer"
        >
            <Image
            w="full"
            h={40}
            fit="cover"
            objectPosition="center"
            src="https://s03.s3c.es/imag/_v0/770x432/b/8/1/TECSUP.jpg"
            fallbackSrc='https://via.placeholder.com/150'
            alt="avatar"
            _hover = {{
                filter: 'opacity(.6)',
            }}
            />

            <Flex alignItems="center" justify={'center'} px={6} py={3} bg="gray.700">
            <Link
                display="block"
                fontSize="lg"
                color="gray.200"
                _dark={{
                color: 'white'
                }}
                fontWeight="bold"
            >
                TECSUP
            </Link>
            </Flex>

            <Box py={4} px={6}>
            <chakra.p
                color="gray.700"
                _dark={{
                color: 'gray.400'
                }}
            >
                Empresa
            </chakra.p>

            <Flex
                alignItems="center"
                mt={4}
                color="gray.700"
                _dark={{
                color: 'gray.200'
                }}
            >
                <Icon as={BsFillBriefcaseFill} h={6} w={6} mr={2} />

                <chakra.h1 px={2} fontSize="sm">
                Choc UI
                </chakra.h1>
            </Flex>

            <Flex
                alignItems="center"
                mt={4}
                color="gray.700"
                _dark={{
                color: 'gray.200'
                }}
            >
                <Icon as={MdLocationOn} h={6} w={6} mr={2} />

                <chakra.h1 px={2} fontSize="sm">
                Arequipa
                </chakra.h1>
            </Flex>
            </Box>
        </Box>
        <Box
            w="100%"
            bg="white"
            _dark={{
            bg: 'gray.800'
            }}
            _hover={{
                shadow:'lg'
            }}
            shadow='sm'
            rounded="lg"
            overflow="hidden"
            cursor={'pointer'}
        >
            <Image
            w="full"
            h={40}
            fit="cover"
            objectPosition="center"
            src="https://images.pexels.com/photos/3182782/pexels-photo-3182782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="avatar"
            _hover = {{
                filter: 'opacity(.6)',
            }}
            />

            <Flex alignItems="center" justify={'center'} px={6} py={3} bg="gray.700">
            <Link
                display="block"
                fontSize="lg"
                color="gray.200"
                _dark={{
                color: 'white'
                }}
                fontWeight="bold"
            >
                EMPRESA NATIVA
            </Link>
            </Flex>

            <Box py={4} px={6}>
            <chakra.p
                color="gray.700"
                _dark={{
                color: 'gray.400'
                }}
            >
                CORPORACIÓN
            </chakra.p>

            <Flex
                alignItems="center"
                mt={4}
                color="gray.700"
                _dark={{
                color: 'gray.200'
                }}
            >
                <Icon as={BsFillBriefcaseFill} h={6} w={6} mr={2} />

                <chakra.h1 px={2} fontSize="sm">
                Choc UI
                </chakra.h1>
            </Flex>

            <Flex
                alignItems="center"
                mt={4}
                color="gray.700"
                _dark={{
                color: 'gray.200'
                }}
            >
                <Icon as={MdLocationOn} h={6} w={6} mr={2} />

                <chakra.h1 px={2} fontSize="sm">
                Arequipa
                </chakra.h1>
            </Flex>
            </Box>
        </Box>
      </SimpleGrid>
    </PageLayout>
  );
};

export default Networking;
