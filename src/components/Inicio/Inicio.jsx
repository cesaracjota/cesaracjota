import React from 'react'
import { Divider } from '@chakra-ui/react'
import Blog from '../Blog/Blog'
import Contenido from './Contenido';
import TechStack from './TechStack';


const Inicio = () => {
    return (
        <>
            <Contenido />
            <Divider />
            <Blog />
            <TechStack />
        </>
    )
}

export default Inicio