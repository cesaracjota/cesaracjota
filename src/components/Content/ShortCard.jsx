import { Box, IconButton, Image, Stack } from '@chakra-ui/react';
import { FiMoreVertical } from 'react-icons/fi';

const ShortCard = ({ data }) => {
    return (
        <Box maxW="450px" overflow="hidden">
            <Image src={data?.thumbnail} alt={data?.title} borderRadius="2xl" objectFit={'cover'} />
            <Stack py={4} spacing={1} direction="row" justifyContent={'space-between'}>
                <Box fontWeight="semibold" as="h4" noOfLines={2}>
                    {data?.title}
                </Box>
                <IconButton alignSelf={'center'} textAlign={'end'} size={'sm'} variant={'ghost'} aria-label="More Options" icon={<FiMoreVertical size={20} />} />
            </Stack>
        </Box>
    );
};

export default ShortCard;