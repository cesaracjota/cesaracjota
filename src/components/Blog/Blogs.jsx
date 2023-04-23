import React, { useEffect, useState } from 'react'
import { Heading, Stack } from '@chakra-ui/react'
import { t } from 'i18next'
import { fetchBlogs } from '../../services/api.service';
import CardPost from './CardBlog';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        async function loadBlogs() {
            try {
                const data = await fetchBlogs("erinposting", 15);
                setBlogs(data);
            } catch (error) {
                console.error(error);
            }
        }

        loadBlogs();

    }, []);

    return (
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
                {t("more_blogs")}
            </Heading>
            {
                blogs.map((blog) => {
                    return <CardPost key={blog.id} blog={blog} />
                })
            }
        </Stack>
    )
}

export default Blogs