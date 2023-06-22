import React from 'react'
import { Divider } from '@chakra-ui/react'
import Blog from '../Blog/Blog'
import Contenido from './Contenido';
import TechStack from './TechStack';
import About from '../About/About';


const Home = () => {
    return (
        <>
            <Contenido />
            <Divider my={4}/>
            <About />
            <Divider my={4}/>
            <TechStack />
            <Divider my={4}/>
            <Blog />
        </>
    )
}

export default Home