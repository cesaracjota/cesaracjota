import React from 'react';
import Blogs from '../components/Blog/Blogs';
import Layout from '../components/Layout/Layout';

const BlogPage = () => {
    return (
        <Layout componente={<Blogs />} />
    )
}

export default BlogPage