import { Button, Heading, Stack, Link } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import CardPost from './CardBlog';
import { fetchBlogs } from '../../services/api.service';
import { FaMousePointer } from 'react-icons/fa';
import { t } from 'i18next';

const Blog = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        async function loadBlogs() {
            try {
                const data = await fetchBlogs("cesaracjota", 2);
                setBlogs(data);
            } catch (error) {
                console.error(error);
            }
        }

        loadBlogs();

    }, []);

    return (
        <>
            <Stack
                spacing={2}
                direction="column"
            >
                <Heading
                    as="h1"
                    fontSize={{ base: '2xl', lg: '4xl' }}
                    fontWeight="extrabold"
                    letterSpacing="tight"
                    lineHeight="shorter"
                    my={4}
                >
                    {t("popular_articles")}
                </Heading>
                {
                    blogs.map((blog) => {
                        return <CardPost key={blog.id} blog={blog} />
                    })
                }
                <Stack
                    direction={'row'}
                    width={'full'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    alignSelf={'center'}
                    _dark={{
                        color: 'purple.600'
                    }}
                    fontWeight="bold"
                >
                    <Button
                        as={Link}
                        fontSize={'sm'}
                        fontWeight={800}
                        variant={'ghost'}
                        href={'/blogs'}
                        rel="noopener noreferrer"
                        colorScheme={'purple'}
                        style={{
                            textDecoration: 'none',
                        }}
                        rightIcon={<FaMousePointer />}
                    >
                        {t("more_articles")}
                    </Button>
                </Stack>
            </Stack>
        </>
    )
}

export default Blog;