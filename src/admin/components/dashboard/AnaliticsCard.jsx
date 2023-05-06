import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const AnalyticsCard = ({ data }) => {
    return (
        <>
            {
                data.map((item) => (
                    <Box
                        key={item.id}
                        borderTop={'6px solid #645CAA'}
                        boxShadow={'base'}
                        borderRadius="lg" overflow="hidden" bg={'white'} _dark={{ bg: 'primary.1000' }}>
                        <Flex p="6" alignItems="center">
                            <Box
                                flex="1"
                                display="flex"
                                flexDirection="column"
                                justifyContent="space-between"
                            >
                                <Text fontSize="md" color="gray.700" _dark={{color: 'gray.200'}}>{item.title}</Text>
                                <Heading size="lg">{item.value}</Heading>
                                <Text fontSize="sm" color="gray.600" _dark={{color: 'gray.300'}}>{item.subtitle}</Text>
                            </Box>
                        </Flex>
                    </Box>
                ))
            }
        </>
    );
};

export default AnalyticsCard;