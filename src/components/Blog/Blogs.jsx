import React, { useEffect, useState } from 'react'
import { Heading, SimpleGrid, Skeleton, Stack } from '@chakra-ui/react'
import { t } from 'i18next'
import { fetchBlogs } from '../../services/api.service';
import CardPost from './CardBlog';
import { ToastChakra } from '../../helpers/toast';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        async function loadBlogs() {
            try {
                const data = await fetchBlogs("cesaracjota", 15);
                setBlogs(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                ToastChakra('ERROR AL CARGAR LA DATA', error?.message, 'error', 1500, 'bottom');
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
                loading ? (
                    <SimpleGrid columns={1} spacing={4} w="full">
                        <Skeleton height="100px" borderRadius={'xl'} />
                        <Skeleton height="100px" borderRadius={'xl'} />
                        <Skeleton height="100px" borderRadius={'xl'} />
                        <Skeleton height="100px" borderRadius={'xl'} />
                        <Skeleton height="100px" borderRadius={'xl'} />
                        <Skeleton height="100px" borderRadius={'xl'} />
                        <Skeleton height="100px" borderRadius={'xl'} />
                        <Skeleton height="100px" borderRadius={'xl'} />
                    </SimpleGrid>
                ) : (
                    blogs?.map((blog) => {
                        return <CardPost key={blog.id} blog={blog} />
                    })
                )
            }
        </Stack>
    )
}

export default Blogs