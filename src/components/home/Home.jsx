import React from 'react'
import About from '../About/About'
import { Divider } from '@chakra-ui/react'
import Blog from '../Blog/Blog'

const Home = ({ loading }) => {
    return (
        <>
            <About />
            <Divider />
            <Blog />
        </>
    )
}

export default Home