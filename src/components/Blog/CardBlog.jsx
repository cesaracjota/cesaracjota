import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
    useColorModeValue,
} from '@chakra-ui/react';

export default function CardPost() {
    return (
        <Center>
            <Box
                w={'full'}
                bg={useColorModeValue('white', 'primary.1000')}
                boxShadow={'base'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}>
                <Stack>
                    <Heading
                        color={useColorModeValue('gray.700', 'white')}
                        fontSize={'2xl'}
                        fontFamily={'body'}>
                        Boost your conversion rate
                    </Heading>
                    <Text color={'gray.500'}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                        erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                        et ea rebum.
                    </Text>
                </Stack>
                <Stack mt={6} direction={'row'} spacing={4} width={'full'} display={'flex'} justifyContent={'flex-end'}>
                    <Avatar
                        src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
                        alt={'Author'}
                        size={'sm'}
                        alignSelf={'center'}
                    />
                    <Stack direction={'column'} spacing={0} fontSize={'xs'}>
                        <Text fontWeight={600}>Achim Rolle</Text>
                        <Text color={'gray.500'}>Feb 08, 2021</Text>
                    </Stack>
                </Stack>
            </Box>
        </Center>
    );
}