import React from 'react';
import Blogs from '../components/Blog/Blogs';
import Layout from '../components/Index/Layout';

const BlogPage = () => {
    return (
        <Layout componente={<Blogs />} />
    )
}

export default BlogPage