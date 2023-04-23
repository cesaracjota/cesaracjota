import React from 'react'
import Index from '../components/layout/Index'
import Blogs from '../components/Blog/Blogs'

const BlogPage = () => {
    return (
        <>
            <Index componente={<Blogs />} />
        </>
    )
}

export default BlogPage