import { Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import CardPost from './CardBlog';

const Blog = () => {
    return (
        <>
            <Stack
                spacing={2}
                direction="column"
            >
                <Heading
                    as="h1"
                    fontSize={{ base: 'xl', md: '2xl' }}
                    fontWeight="extrabold"
                    letterSpacing="tight"
                    lineHeight="shorter"
                    mt={4}
                >
                    RECENT BLOGS
                </Heading>
                <CardPost />
                <CardPost />
                <CardPost />
            </Stack>
        </>
    )
}

export default Blog;